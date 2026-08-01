/**
 * Cloudflare Web Analytics — free, cookieless and no personal data, which is
 * what the privacy policy promises. Disabled unless VITE_ANALYTICS_TOKEN is set,
 * so local and preview builds never send beacons.
 */
export function initAnalytics(): void {
  const token = import.meta.env.VITE_ANALYTICS_TOKEN
  if (!token || typeof document === 'undefined') return

  const script = document.createElement('script')
  script.defer = true
  script.src = 'https://static.cloudflareinsights.com/beacon.min.js'
  script.dataset.cfBeacon = JSON.stringify({ token })
  document.head.appendChild(script)
}
