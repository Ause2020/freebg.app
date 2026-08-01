import { useCallback, useEffect, useRef, useState } from 'react'
import {
  assertDecodable,
  classifyError,
  phaseForKey,
  preloadModel,
  removeImageBackground,
  revokeObjectUrl,
  type ProgressPhase,
  type RemovalErrorCode,
} from '../lib/backgroundRemoval'

export type JobStatus = 'queued' | 'processing' | 'done' | 'error'

export type Job = {
  id: string
  file: File
  previewUrl: string
  status: JobStatus
  resultBlob: Blob | null
  resultUrl: string | null
  errorCode: RemovalErrorCode | null
}

export type RemoverStatus =
  | 'idle'
  | 'ready'
  | 'loading-model'
  | 'processing'
  | 'done'
  | 'error'

export type UseBackgroundRemoverReturn = {
  jobs: Job[]
  status: RemoverStatus
  percent: number
  phase: ProgressPhase
  errorCode: RemovalErrorCode | null
  completedCount: number
  addFiles: (files: File[]) => void
  removeJob: (id: string) => void
  processAll: () => Promise<void>
  cancel: () => void
  reset: () => void
  preload: () => Promise<void>
  updateResult: (id: string, blob: Blob) => void
}

let jobCounter = 0

function createJob(file: File): Job {
  jobCounter += 1
  return {
    id: `job-${jobCounter}-${file.size}`,
    file,
    previewUrl: URL.createObjectURL(file),
    status: 'queued',
    resultBlob: null,
    resultUrl: null,
    errorCode: null,
  }
}

function disposeJob(job: Job): void {
  revokeObjectUrl(job.previewUrl)
  revokeObjectUrl(job.resultUrl)
}

export function useBackgroundRemover(): UseBackgroundRemoverReturn {
  const [jobs, setJobs] = useState<Job[]>([])
  const [status, setStatus] = useState<RemoverStatus>('idle')
  const [percent, setPercent] = useState(0)
  const [phase, setPhase] = useState<ProgressPhase>('idle')
  const [errorCode, setErrorCode] = useState<RemovalErrorCode | null>(null)

  const jobsRef = useRef<Job[]>([])
  const cancelledRef = useRef(false)
  const runningRef = useRef(false)
  const modelReadyRef = useRef(false)
  const preloadPromiseRef = useRef<Promise<void> | null>(null)

  jobsRef.current = jobs

  const patchJob = useCallback((id: string, patch: Partial<Job>) => {
    setJobs((current) =>
      current.map((job) => (job.id === id ? { ...job, ...patch } : job)),
    )
  }, [])

  const ensureModel = useCallback(async (reportProgress: boolean) => {
    if (modelReadyRef.current) return

    if (!preloadPromiseRef.current) {
      preloadPromiseRef.current = preloadModel(
        reportProgress
          ? (key, current, total) => {
              if (cancelledRef.current) return
              setPhase(phaseForKey(key))
              setPercent(
                total > 0 ? Math.min(95, Math.round((current / total) * 100)) : 0,
              )
            }
          : undefined,
      )
        .then(() => {
          modelReadyRef.current = true
        })
        .finally(() => {
          preloadPromiseRef.current = null
        })
    }

    await preloadPromiseRef.current
  }, [])

  const preload = useCallback(async () => {
    if (modelReadyRef.current || preloadPromiseRef.current) return
    try {
      await ensureModel(false)
    } catch {
      // A silent warm-up failure is surfaced on the next explicit run.
    }
  }, [ensureModel])

  const addFiles = useCallback((files: File[]) => {
    if (files.length === 0) return
    const created = files.map(createJob)
    setJobs((current) => [...current, ...created])
    setStatus((current) =>
      current === 'idle' || current === 'done' || current === 'error'
        ? 'ready'
        : current,
    )
    setErrorCode(null)
  }, [])

  const removeJob = useCallback((id: string) => {
    setJobs((current) => {
      const target = current.find((job) => job.id === id)
      if (target) disposeJob(target)
      const next = current.filter((job) => job.id !== id)
      if (next.length === 0) setStatus('idle')
      return next
    })
  }, [])

  const cancel = useCallback(() => {
    cancelledRef.current = true
    runningRef.current = false
    setStatus(jobsRef.current.length > 0 ? 'ready' : 'idle')
    setPhase('idle')
    setPercent(0)
    setJobs((current) =>
      current.map((job) =>
        job.status === 'processing' ? { ...job, status: 'queued' } : job,
      ),
    )
  }, [])

  const reset = useCallback(() => {
    cancelledRef.current = true
    runningRef.current = false
    for (const job of jobsRef.current) disposeJob(job)
    setJobs([])
    setStatus('idle')
    setPhase('idle')
    setPercent(0)
    setErrorCode(null)
  }, [])

  const processAll = useCallback(async () => {
    if (runningRef.current) return

    const pending = jobsRef.current.filter((job) => job.status !== 'done')
    if (pending.length === 0) return

    runningRef.current = true
    cancelledRef.current = false
    setErrorCode(null)

    try {
      if (!modelReadyRef.current) {
        setStatus('loading-model')
        setPhase('model')
        setPercent(0)
        await ensureModel(true)
        if (cancelledRef.current) return
      }

      setStatus('processing')

      for (const job of pending) {
        if (cancelledRef.current) return

        patchJob(job.id, { status: 'processing', errorCode: null })
        setPhase('processing')
        setPercent(10)

        try {
          await assertDecodable(job.file)
          const blob = await removeImageBackground(job.file, (_key, current, total) => {
            if (cancelledRef.current) return
            setPercent(
              total > 0
                ? Math.min(99, 10 + Math.round((current / total) * 89))
                : 50,
            )
          })

          if (cancelledRef.current) return

          patchJob(job.id, {
            status: 'done',
            resultBlob: blob,
            resultUrl: URL.createObjectURL(blob),
          })
        } catch (error) {
          if (cancelledRef.current) return
          const code = classifyError(error)
          patchJob(job.id, { status: 'error', errorCode: code })
          setErrorCode(code)
        }
      }

      if (cancelledRef.current) return

      setPercent(100)
      setPhase('done')
      const anySucceeded = jobsRef.current.some((job) => job.status === 'done')
      setStatus(anySucceeded ? 'done' : 'error')
    } catch (error) {
      if (cancelledRef.current) return
      setErrorCode(classifyError(error))
      setStatus('error')
      setPhase('idle')
      setPercent(0)
    } finally {
      runningRef.current = false
    }
  }, [ensureModel, patchJob])

  const updateResult = useCallback((id: string, blob: Blob) => {
    setJobs((current) =>
      current.map((job) => {
        if (job.id !== id) return job
        revokeObjectUrl(job.resultUrl)
        return { ...job, resultBlob: blob, resultUrl: URL.createObjectURL(blob) }
      }),
    )
  }, [])

  useEffect(() => {
    return () => {
      cancelledRef.current = true
      for (const job of jobsRef.current) disposeJob(job)
    }
  }, [])

  const completedCount = jobs.filter((job) => job.status === 'done').length

  return {
    jobs,
    status,
    percent,
    phase,
    errorCode,
    completedCount,
    addFiles,
    removeJob,
    processAll,
    cancel,
    reset,
    preload,
    updateResult,
  }
}

export default useBackgroundRemover
