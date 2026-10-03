import type { Dictionary } from './types'

export const es: Dictionary = {
  nav: {
    home: 'Quitar fondo',
    guide: 'Guía paso a paso',
    productPhotos: 'Fotos de producto',
    profilePictures: 'Fotos de perfil',
    removeBgAlternative: 'Alternativa a remove.bg',
    photoroomAlternative: 'Alternativa a Photoroom',
    noUpload: 'Sin subir',
    amazonWhite: 'Fondo blanco Amazon',
    logo: 'Logo',
    screenshot: 'Captura',
    signature: 'Firma',
    removeBgShutdown: 'Cierre de remove.bg',
    privacy: 'Privacidad',
    terms: 'Términos',
    contact: 'Contacto',
    skipToTool: 'Ir directamente a la herramienta',
    menu: 'Menú',
    theme: 'Cambiar a modo oscuro',
  },
  tagline: 'Gratis • Ilimitado • Privado',
  badge: '100% privado: tus imágenes nunca salen de tu dispositivo',
  trustBadges: [
    '100% privado: tus imágenes nunca salen de tu dispositivo',
    'Uso gratis e ilimitado',
    'Sin marca de agua',
    'Listo para HD y 4K',
  ],
  featureList: [
    'Quitar fondo en el dispositivo – sin subir archivos',
    'Quitar fondo gratis sin registro ni marca de agua',
    'Uso gratis e ilimitado',
    'Salida a resolución completa HD y 4K',
    'Remover fondo privado en tu navegador',
    'Procesamiento por lotes con descarga ZIP',
    'Funciona sin conexión tras la primera carga',
  ],
  ogImageAlt:
    'freebg.app quitar fondo gratis HD – ilimitado, sin marca de agua, privado en el navegador',

  contactForm: {
    name: 'Nombre',
    email: 'Email',
    message: 'Mensaje',
    submit: 'Enviar mensaje',
    sending: 'Enviando…',
    success: 'Gracias — tu mensaje está en camino. Te responderemos pronto.',
    error: 'No se pudo enviar el mensaje. Inténtalo de nuevo en un momento.',
    required: 'Por favor completa todos los campos.',
  },

  tool: {
    dropTitle: 'Arrastra una imagen aquí',
    dropActive: 'Suelta la imagen aquí',
    dropBrowse: 'o haz clic para buscarla',
    dropFormats: 'JPG, PNG, WEBP · Máx. 25MB',
    pasteHint: 'También puedes pegar una imagen con Ctrl + V',
    orTrySample: '¿No tienes una imagen a mano?',
    sample: 'Prueba con un ejemplo',
    samplePortrait: 'Ejemplo de retrato',
    samplePortraitAlt:
      'Foto de ejemplo de retrato para probar quitar fondo gratis sin registro',
    sampleProduct: 'Ejemplo de producto',
    sampleProductAlt:
      'Foto de ejemplo de producto para remover fondo de imagen online gratis',
    remove: 'Quitar fondo',
    tryAgain: 'Reintentar',
    chooseAnother: 'Elegir otra',
    processAnother: 'Procesar otra',
    cancel: 'Cancelar',
    clear: 'Quitar selección',
    loadingModel: 'Cargando el modelo de IA',
    processing: 'Quitando el fondo',
    downloadingRuntime: 'Descargando el motor…',
    downloadingModel: 'Descargando el modelo de IA…',
    downloadingAssets: 'Descargando archivos…',
    preparing: 'Preparando…',
    done: 'Listo',
    fileTooLarge: (size, max) =>
      `Ese archivo pesa ${size}. El máximo es ${max}.`,
    invalidType: 'Elige una imagen JPG, PNG o WEBP.',
    heicUnsupported:
      'Tu navegador no puede abrir archivos HEIC. En el iPhone ve a Cámara → Formatos → Más compatible, o convierte la foto a JPG primero.',
    compare: 'Comparar antes y después',
    before: 'Antes',
    after: 'Después',
    dragToCompare: 'Arrastra el control para comparar el antes y el después',
    fullResolution: 'Resolución completa – sin pérdida de calidad',
    background: 'Fondo',
    transparent: 'Transparente',
    white: 'Blanco',
    customColor: 'Color personalizado',
    format: 'Formato',
    download: 'Descargar',
    batchTitle: 'Cola de imágenes',
    batchHint: 'Añade varias imágenes y descárgalas todas en un ZIP.',
    batchDownloadZip: 'Descargar todo en ZIP',
    batchProcessing: (done, total) => `Procesando ${done} de ${total}…`,
    queued: 'En cola',
    failed: 'Falló',
    removeFromList: 'Quitar de la lista',
    refine: 'Perfeccionar resultado',
    refineTitle: 'Borrador mágico',
    refineHint: 'Pinta sobre la imagen para corregir pequeños detalles, sin necesidad de saber de edición.',
    eraseMode: 'Borrar',
    eraseModeHint: 'Pinta sobre restos de fondo para eliminarlos.',
    restoreMode: 'Restaurar',
    restoreModeHint: 'Pinta para recuperar partes que se borraron por error.',
    brushSize: 'Tamaño del pincel',
    undo: 'Deshacer',
    redo: 'Rehacer',
    resetEdits: 'Reiniciar',
    discard: 'Descartar',
    applyEdits: 'Aplicar cambios',
    applyingEdits: 'Aplicando…',
  },

  errors: {
    network:
      'No se pudo descargar el modelo de IA. Revisa tu conexión e inténtalo de nuevo.',
    memory:
      'La imagen es demasiado grande para la memoria de tu dispositivo. Prueba con una versión más pequeña.',
    gpu:
      'Falló la aceleración por GPU. Recarga la página para reintentar con el motor de compatibilidad.',
    decode:
      'No se pudo abrir esa imagen. Puede estar dañada o en un formato no compatible.',
    generic: 'No se pudo quitar el fondo. Prueba con otra imagen.',
    boundaryTitle: 'Algo salió mal',
    boundaryBody:
      'La página encontró un error inesperado. Tus imágenes nunca se subieron, así que no se expuso nada.',
    boundaryAction: 'Recargar la página',
    notFoundTitle: 'Página no encontrada',
    notFoundBody:
      'La página que buscas no existe. La herramienta para quitar fondos sigue a un clic de distancia.',
    notFoundAction: 'Ir a la herramienta',
  },

  privacyNote:
    'Todo el procesamiento ocurre en tu dispositivo con IA que se ejecuta en el navegador. Tus imágenes nunca se suben, se guardan ni se comparten: cierras la pestaña y desaparecen.',

  footer: {
    heading: 'Funciona 100% en tu navegador',
    body:
      'FreeBG quita fondos en local con IA en el dispositivo (WebGPU o WebAssembly). No se sube nada a ningún servidor, así que tus fotos se quedan contigo. Sin cuentas, sin marcas de agua y sin límites diarios.',
    product: 'Herramientas',
    useCases: 'Casos de uso',
    legal: 'Legal',
    moreTools: 'Más herramientas gratis',
    openSource: 'Código fuente',
    sourceNote: 'Código abierto (AGPL-3.0)',
    contact: 'Contacto',
    rights: 'Todos los derechos reservados.',
    comingSoon: 'Próximamente',
    sisters: {
      freepng: 'FreePNG – convertir, redimensionar y comprimir imágenes',
      freepdf: 'FreePDF – unir, separar y comprimir PDF',
      freebg: 'FreeBG – quitar fondo de imágenes',
    },
  },

  faqHeading: 'Preguntas frecuentes',

  pages: {
    home: {
      title:
        'Quitar Fondo Gratis – Ilimitado, Sin Marca de Agua, Privado (HD/4K) | freebg.app',
      description:
        'Quita el fondo de imágenes gratis para siempre. Sin registro, sin límites ni marca de agua. 100% en tu navegador: tus fotos no salen del dispositivo. HD y 4K.',
      h1: 'Quitar Fondo Gratis – Ilimitado y Privado',
      subtitle: 'Sin subir archivos. Sin marca de agua. Sin registro. Resolución completa.',
      intro:
        'freebg.app te permite quitar fondo gratis sin registro y sin marca de agua. Remover fondo de imagen online gratis, ilimitado y en HD/4K, con un quitar fondo privado que nunca sube tus fotos. Si buscas quitar el fondo sin subir la imagen — o un quitar fondo HD gratis que conserve la calidad — suelta una foto arriba y descarga un PNG transparente en segundos.',
      showTool: true,
      sections: [
        {
          heading: 'Cómo funciona',
          paragraphs: [
            'A diferencia de los editores en la nube, freebg.app está pensado para quitar el fondo sin subir archivos. Cuando sueltas una foto, tu navegador descarga un modelo compacto de segmentación (una sola vez) y lo ejecuta en local con WebGPU o WebAssembly. Los píxeles se quedan en la memoria de la pestaña todo el tiempo: decodificar → segmentar → exportar. Nada se envía a los servidores de freebg.app para analizarlo.',
            'Ese pipeline 100% client-side es la razón por la que puedes remover fondo de imagen online gratis e ilimitado. No hay factura de API por imagen, así que no hay cuota diaria ni vista previa bloqueada. Los indicadores de progreso muestran cuándo se descarga el modelo y cuándo se procesa tu imagen.',
            'Al terminar verás una comparación antes/después y un botón de descarga bien visible. La exportación mantiene la resolución completa – sin pérdida de calidad – tanto con una foto de móvil como con un producto en 4K.',
          ],
        },
        {
          heading: 'Por qué freebg.app es diferente',
          paragraphs: [
            'Herramientas populares como remove.bg o Photoroom están muy cuidadas, pero sus planes gratis suelen subir tu archivo, poner marca de agua o bajar la resolución HD hasta que pagas créditos. freebg.app es una alternativa para quitar fondo gratis sin registro: uso ilimitado, resolución original y privacidad por arquitectura.',
            'Como la inferencia ocurre en tu dispositivo, freebg.app puede ser un quitar fondo privado sin cuentas ni tarjetas. Pegas desde el portapapeles, procesas un lote, retocas bordes con el borrador mágico y descargas un PNG limpio.',
          ],
          bullets: [
            'Uso gratis e ilimitado — quitar fondo sin cupos diarios.',
            'Sin marca de agua en vistas previas ni descargas.',
            'Sin subir archivos: tus fotos nunca salen de tu dispositivo.',
            'Listo para HD y 4K en las dimensiones originales.',
            'Funciona sin conexión cuando el modelo ya está en caché.',
          ],
        },
        {
          heading: 'Privacidad primero: tus imágenes nunca salen del navegador',
          paragraphs: [
            'La privacidad no es un eslogan; es la restricción del producto. Un quitar fondo privado no debería obligarte a confiar fotos de clientes, niños, productos sin lanzar o retratos sensibles a una granja de GPUs de terceros. Con freebg.app, el modelo viene a ti. Cierras la pestaña y los búferes de imagen desaparecen.',
            'Puedes comprobarlo tú mismo: abre DevTools → Red mientras procesas y verifica que ninguna petición lleva tu foto. Tras la primera descarga del modelo puedes ir sin conexión y seguir trabajando. Esa es la diferencia entre “prometemos no mirar” y “físicamente no podemos ver el archivo”.',
          ],
        },
        {
          heading: 'Ideal para',
          paragraphs: [
            'Tanto si necesitas recortes listos para marketplace como un recorte rápido para redes, freebg.app es un quitar fondo HD gratis pensado para flujos reales.',
          ],
          subsections: [
            {
              heading: 'Fotos de producto para ecommerce',
              paragraphs: [
                'Exporta fondos blancos o transparentes para Amazon, Shopify, eBay y Etsy. Procesa catálogos enteros sin gastar créditos por SKU.',
              ],
            },
            {
              heading: 'Redes sociales y creadores',
              paragraphs: [
                'Miniaturas, stickers, portadas de YouTube y stories en segundos. Conserva la resolución completa para que los recortes se vean nítidos.',
              ],
            },
            {
              heading: 'Diseñadores y marketing',
              paragraphs: [
                'Coloca sujetos en presentaciones, anuncios y mockups como PNG transparentes. Sin marca de agua que borrar antes de un cliente.',
              ],
            },
            {
              heading: 'Fotos de perfil y retratos',
              paragraphs: [
                'Sustituye habitaciones desordenadas por blanco, gris suave o color de marca para LinkedIn, CVs y páginas de equipo — sin subir tu cara a un editor en la nube.',
              ],
            },
          ],
        },
        {
          heading: 'Formatos admitidos y calidad',
          paragraphs: [
            'Entrada: JPG, PNG y WEBP hasta 25 MB. Salida: PNG transparente por defecto (alfa real), o JPG/WEBP si eliges un fondo sólido. El flujo de quitar fondo HD gratis conserva el ancho y alto originales, incluido 4K y resoluciones mayores limitadas solo por la memoria del dispositivo.',
            'Los bordes los genera un modelo de segmentación de la familia IS-Net — muy sólido con personas, productos, animales y vehículos. Pelo ultrafino, cristal y desenfoque fuerte siguen siendo difíciles para cualquier herramienta automática; un relleno sólido o el pincel de retoque suelen resolver lo que importa para publicar.',
            'Después de exportar, continúa con FreePNG (https://freepng.app) para convertir, redimensionar o comprimir, o FreePDF (https://freepdf.app) para documentos — misma familia de herramientas privadas en el dispositivo.',
          ],
          bullets: [
            'El PNG transparente mantiene alfa real para composición.',
            'Resolución completa – sin pérdida de calidad ni reducción forzada.',
            'Cola por lotes con descarga ZIP para catálogos.',
            'La primera vez descarga ~40 MB de modelo; luego queda en caché.',
          ],
        },
      ],
      howTo: {
        name: 'Cómo quitar el fondo con freebg.app',
        steps: [
          {
            name: 'Añade tu imagen',
            text: 'Arrastra un JPG, PNG o WEBP a la zona de carga, haz clic para buscarlo o pégalo con Ctrl + V. No se sube nada.',
          },
          {
            name: 'Ejecuta la IA',
            text: 'Pulsa «Quitar fondo». Observa el indicador de progreso mientras se carga el modelo (la primera vez) y mientras se procesa tu imagen en local.',
          },
          {
            name: 'Compara antes y después',
            text: 'Usa el control deslizante para revisar bordes, retoca si hace falta con el borrador mágico y elige transparente, blanco o un color personalizado.',
          },
          {
            name: 'Descarga a resolución completa',
            text: 'Guarda como PNG, JPG o WEBP con resolución completa – sin pérdida de calidad y sin marca de agua.',
          },
        ],
      },
      faq: [
        {
          q: '¿Puedo quitar fondo gratis sin límites de verdad?',
          a: 'Sí. El procesamiento corre en tu dispositivo, así que no hay cuota en servidor. Puedes remover fondo de imagen online gratis e ilimitado: sin reloj de prueba, sin packs de créditos ni plan de pago que limite la resolución.',
        },
        {
          q: '¿Es quitar fondo gratis sin registro y sin marca de agua?',
          a: 'Sí. Las descargas son archivos limpios a resolución completa, sin marca de agua, sello ni overlay promocional. Tampoco pedimos cuenta ni correo.',
        },
        {
          q: '¿Se suben mis imágenes? ¿Es un quitar fondo privado?',
          a: 'No se suben. El modelo se descarga a tu navegador y la imagen se procesa allí. Es quitar fondo sin subir archivos: puedes comprobarlo en la pestaña Red y, tras cargar el modelo, trabajar sin conexión.',
        },
        {
          q: '¿Obtengo resultado HD y 4K?',
          a: 'Sí. La salida coincide con las dimensiones de entrada, incluido HD y 4K. Las imágenes muy grandes solo están limitadas por la memoria del dispositivo. Resolución completa – sin pérdida de calidad.',
        },
        {
          q: '¿Qué formatos admite?',
          a: 'JPG, PNG y WEBP como entrada. Descarga PNG transparente, o JPG/WEBP si eliges un color de fondo sólido. Convierte HEIC del iPhone a JPG primero: los navegadores no decodifican HEIC de forma nativa.',
        },
        {
          q: '¿Necesito registrarme?',
          a: 'No. Sin registro, sin muro de email y sin tarjeta. Abres la página, sueltas una imagen y descargas el resultado.',
        },
        {
          q: '¿Funciona en el móvil y sin conexión?',
          a: 'Sí en navegadores modernos de iOS y Android (más lento que en ordenador). Tras el primer uso el modelo queda en caché y puedes trabajar sin cobertura.',
        },
        {
          q: '¿Cómo se compara con remove.bg o Photoroom?',
          a: 'Son excelentes herramientas en la nube, pero los planes gratis suelen subir la imagen, poner marca de agua o limitar la resolución. freebg.app cambia una descarga única de ~40 MB del modelo por procesamiento ilimitado, privado y a resolución completa sin coste — una alternativa fuerte para quitar fondo gratis sin registro cuando importan la privacidad y el volumen.',
        },
      ],
      growth: {
        heading: 'Guías y comparativas',
        intro:
          'Guías y comparativas que ya puedes abrir — cada una incluye la misma herramienta privada arriba.',
        links: [
          {
            title: 'Cómo quitar el fondo de una imagen',
            description:
              'Guía paso a paso para quitar el fondo sin subir la foto y a resolución completa.',
            pageKey: 'guide',
          },
          {
            title: 'Quitar fondo a fotos de producto',
            description:
              'Fondos blancos o transparentes para catálogos ecommerce — gratis e ilimitado.',
            pageKey: 'productPhotos',
          },
          {
            title: 'Quitar fondo a foto de perfil',
            description:
              'Retratos limpios para LinkedIn y CVs con un quitar fondo privado.',
            pageKey: 'profilePictures',
          },
          {
            title: 'Mejor alternativa gratis a remove.bg',
            description:
              'Qué cambia cuando remove.bg pasa a Canva — y un recambio HD sin subir archivos.',
            pageKey: 'removeBgAlternative',
          },
          {
            title: 'Alternativa a Photoroom',
            description:
              'Recortes sin app, sin cuenta y sin marca de agua.',
            pageKey: 'photoroomAlternative',
          },
          {
            title: 'Cómo quitar el fondo sin subir la imagen',
            description:
              'Por qué la IA en el dispositivo gana a la nube con fotos sensibles o de clientes.',
            pageKey: 'noUpload',
          },
          {
            title: 'Fondo blanco para Amazon',
            description:
              'Blanco RGB 255 para la imagen principal del marketplace — ilimitado y local.',
            pageKey: 'amazonWhite',
          },
          {
            title: 'remove.bg cierra',
            description:
              'Qué pasa el 1 de diciembre de 2026 con la web, los créditos y la API.',
            pageKey: 'removeBgShutdown',
          },
        ],
      },
    },

    guide: {
      title: 'Cómo Quitar el Fondo de una Imagen (Guía Gratis)',
      description:
        'Guía paso a paso para quitar el fondo de una imagen gratis, a resolución completa y sin subir la foto a ningún servidor. Para ordenador y móvil.',
      h1: 'Cómo quitar el fondo de una imagen',
      subtitle:
        'Una guía práctica y directa, con la herramienta gratuita aquí mismo.',
      intro:
        'Quitar un fondo solía significar una hora con la pluma de Photoshop. Hoy un modelo de IA hace el mismo trabajo en un par de segundos, y puede ejecutarse entero dentro de tu navegador. Aquí tienes cómo hacerlo bien y qué hacer cuando el resultado automático no es perfecto.',
      showTool: true,
      sections: [
        {
          heading: 'Empieza con una buena imagen de origen',
          paragraphs: [
            'El factor que más influye en la calidad es la foto original, no la herramienta. La IA busca el límite entre el sujeto y el fondo, así que todo lo que haga ese límite más evidente mejorará tu resultado.',
          ],
          bullets: [
            'Buena iluminación y uniforme sobre el sujeto: evita sombras marcadas en los bordes.',
            'Contraste razonable entre sujeto y fondo. Una chaqueta negra sobre un sofá negro es el caso más difícil posible.',
            'Enfoque nítido en el sujeto. El desenfoque de movimiento destruye detalle de borde que no se puede recuperar.',
            'La resolución más alta que tengas. Reduce después si lo necesitas, nunca antes.',
          ],
        },
        {
          heading: 'Elige bien el fondo de salida',
          paragraphs: [
            'Un PNG transparente es la opción más flexible y la correcta si vas a colocar el recorte sobre otro diseño. Pero la transparencia también deja a la vista cada píxel de borde imperfecto.',
            'Si el recorte va a acabar sobre un color sólido de todos modos —una ficha de producto blanca, una diapositiva corporativa, un cartel de color— expórtalo directamente sobre ese color. Los bordes suaves o ligeramente imperfectos se funden con el relleno y se vuelven invisibles.',
          ],
        },
        {
          heading: 'Elige el formato adecuado',
          bullets: [
            'PNG: la única opción que conserva transparencia real. Archivos más grandes. Úsalo para logotipos, superposiciones y todo lo que vayas a componer después.',
            'JPG: los archivos más pequeños, sin transparencia. Ideal para fotos de producto sobre fondo blanco donde importa el peso.',
            'WEBP: formato moderno, en torno a un 30% más ligero que PNG con calidad similar y con soporte de transparencia. Compatible con todos los navegadores actuales.',
          ],
        },
        {
          heading: 'Cuando el resultado automático no es perfecto',
          paragraphs: [
            'Todas las herramientas automáticas tropiezan con lo mismo: mechones sueltos sobre un fondo con mucho detalle, materiales transparentes o reflectantes como el cristal y el agua, vallas metálicas y otras estructuras finas repetidas, y el desenfoque de movimiento fuerte.',
          ],
          bullets: [
            'Cambia a un color de fondo sólido: esto oculta al instante la gran mayoría de los defectos de borde.',
            'Recorta más ajustado para que el sujeto ocupe más encuadre y vuelve a procesarla.',
            'Repite la foto sobre un fondo contrastado si la imagen es importante y puedes hacerlo.',
            'Para unas pocas imágenes críticas, usa el recorte automático como máscara de partida y retócala en un editor.',
          ],
        },
        {
          heading: 'Una nota sobre privacidad',
          paragraphs: [
            'La mayoría de las webs gratuitas para quitar fondos suben tu imagen a sus servidores. Eso da igual con la foto de una taza, y es un problema real con documentos de identidad, imágenes médicas, trabajo de cliente bajo acuerdo de confidencialidad o fotos de menores.',
            'FreeBG procesa las imágenes en local en tu navegador, así que el archivo nunca sale de tu dispositivo. Si manejas imágenes sensibles, elige siempre una herramienta que pueda demostrarlo: puedes comprobarlo tú mismo en la pestaña Red del navegador.',
          ],
        },
      ],
      howTo: {
        name: 'Cómo quitar el fondo de una imagen gratis',
        steps: [
          {
            name: 'Abre la herramienta',
            text: 'Abre FreeBG en cualquier navegador moderno. No hay nada que instalar ni ninguna cuenta que crear.',
          },
          {
            name: 'Añade tu foto',
            text: 'Arrastra la imagen a la zona de carga, haz clic para buscarla en tus archivos o pega una imagen copiada con Ctrl + V.',
          },
          {
            name: 'Quita el fondo',
            text: 'Pulsa «Quitar fondo» y espera unos segundos mientras el modelo de IA se ejecuta en tu dispositivo.',
          },
          {
            name: 'Compara y ajusta',
            text: 'Arrastra el comparador antes/después para revisar los bordes y elige fondo transparente, blanco o de color personalizado.',
          },
          {
            name: 'Descarga el resultado',
            text: 'Descárgalo como PNG, JPG o WEBP en la resolución original completa y sin marca de agua.',
          },
        ],
      },
      faq: [
        {
          q: '¿Cuánto tarda?',
          a: 'Unos segundos por imagen en un ordenador moderno una vez cargado el modelo. La primera ejecución además descarga unos 40 MB de archivos del modelo, lo que tarda más según tu conexión.',
        },
        {
          q: '¿Puedo quitar el fondo a varias imágenes a la vez?',
          a: 'Sí. Añade varios archivos y FreeBG los procesará en cola, y después podrás descargarlo todo en un único ZIP.',
        },
        {
          q: '¿Funcionará en mi móvil?',
          a: 'Sí, en versiones actuales de Safari, Chrome y Firefox. Tarda más que en un portátil y las imágenes enormes pueden quedarse sin memoria en dispositivos antiguos.',
        },
        {
          q: '¿Necesito Photoshop para un mejor resultado?',
          a: 'Normalmente no. Para bordes difíciles, exportar sobre un color de fondo sólido resuelve el problema mucho más rápido que enmascarar a mano.',
        },
      ],
    },

    productPhotos: {
      title: 'Quitar Fondo a Fotos de Producto Gratis – Fondo Blanco',
      description:
        'Convierte tus fotos de producto a fondo blanco o transparente para Amazon, Shopify y Etsy. Gratis, ilimitado, a resolución completa y sin subir archivos.',
      h1: 'Quitar el fondo a fotos de producto',
      subtitle:
        'Fondo blanco o transparente para tus fichas de producto, gratis y sin límites.',
      intro:
        'Las fichas de producto convierten mejor con imágenes consistentes y sin distracciones, y la mayoría de los marketplaces exigen fondo blanco puro en la imagen principal. FreeBG te lo da en segundos por foto, a resolución completa y para todo un catálogo, sin créditos por imagen.',
      showTool: true,
      sections: [
        {
          heading: 'Qué piden realmente los marketplaces',
          bullets: [
            'Amazon: la imagen principal debe ir sobre fondo blanco puro (RGB 255, 255, 255) y el producto debe ocupar en torno al 85% del encuadre.',
            'eBay: recomienda con insistencia un fondo blanco o muy claro para la imagen de la galería.',
            'Shopify y Etsy: no lo exigen, pero mantener fondos consistentes en toda una colección se ve mucho más profesional.',
            'Google Shopping: sin marcas de agua, bordes ni texto promocional sobre la imagen del producto.',
          ],
          paragraphs: [
            'Exportar directamente sobre blanco con FreeBG produce exactamente el blanco puro que piden esas normas, algo que una foto sobre un fondo blanco real casi nunca consigue por sí sola.',
          ],
        },
        {
          heading: 'Un flujo de trabajo que escala a todo un catálogo',
          bullets: [
            'Fotografía todo con la misma iluminación para que el color se mantenga consistente entre productos.',
            'Suelta el lote completo en la herramienta y deja que la cola los procese uno tras otro.',
            'Elige la opción de fondo blanco para que todas las imágenes tengan un blanco idéntico y exacto.',
            'Exporta a JPG para las fichas: archivos más ligeros, páginas más rápidas y mejor posicionamiento.',
            'Descarga el ZIP y sube la carpeta directamente a tu tienda.',
          ],
        },
        {
          heading: 'Por qué el procesamiento local importa si vendes',
          paragraphs: [
            'Un catálogo de producto es información comercialmente sensible. Productos sin lanzar, embalaje de proveedores o listas de precios que se cuelan en el encuadre son cosas que quizá no quieras dejar en un servidor ajeno, y muchas herramientas gratuitas se reservan derechos amplios sobre el contenido subido en sus términos.',
            'Como FreeBG nunca transmite tus archivos, no hay nada que filtrar, conservar ni licenciar. Tus fotos se quedan en el equipo donde las editaste.',
          ],
        },
      ],
      faq: [
        {
          q: '¿El fondo blanco es blanco puro?',
          a: 'Sí. Al elegir la opción de fondo blanco se rellena con RGB 255, 255, 255 exacto, que es justo lo que especifican Amazon y otros marketplaces.',
        },
        {
          q: '¿Cuántas fotos puedo procesar?',
          a: 'Las que quieras. No hay cuota, porque el procesamiento ocurre en tu ordenador y no en nuestros servidores.',
        },
        {
          q: '¿Funciona con productos reflectantes o transparentes?',
          a: 'El cristal, la joyería y el metal muy reflectante son los casos más difíciles para cualquier herramienta automática. Aun así, exportar sobre blanco suele dar una imagen de ficha perfectamente utilizable, porque el fondo tras las zonas transparentes también es blanco.',
        },
        {
          q: '¿Puedo conservar la sombra bajo el producto?',
          a: 'No de forma automática: el modelo elimina todo lo que identifica como fondo, incluidas las sombras proyectadas. Si las sombras son importantes para tu marca, compón el recorte sobre una capa de sombra en un editor después.',
        },
      ],
    },

    profilePictures: {
      title: 'Quitar Fondo a Foto de Perfil Gratis y Privado | FreeBG',
      description:
        'Quita el fondo de tu foto de perfil para LinkedIn, currículums y páginas de equipo. Gratis, ilimitado, a resolución completa y procesado en tu navegador.',
      h1: 'Quitar el fondo a una foto de perfil',
      subtitle:
        'Un retrato limpio y profesional en segundos, sin subir tu cara a ningún sitio.',
      intro:
        'Una cocina desordenada de fondo arruina un retrato que por lo demás está bien. Sustituir ese fondo por un color limpio es la forma más rápida de que una foto de perfil parezca intencionada y profesional, y lleva unos cinco segundos.',
      showTool: true,
      sections: [
        {
          heading: 'Qué color de fondo elegir',
          bullets: [
            'Blanco: seguro, neutro y válido en cualquier sitio. La opción por defecto para currículums y directorios corporativos.',
            'Gris claro o azul suave: algo más cálido que el blanco y igual de conservador. Muy usado en LinkedIn.',
            'El color de tu marca: excelente para páginas de equipo, biografías de ponentes y perfiles de congresos donde importa la consistencia.',
            'PNG transparente: úsalo cuando la foto vaya a colocarse sobre un diseño que tú controlas.',
          ],
        },
        {
          heading: 'Cómo sacar el mejor resultado de un retrato',
          bullets: [
            'Ponte de cara a una ventana. La luz natural suave y frontal supera a cualquier iluminación de interior que tengas.',
            'Deja distancia entre tú y la pared de detrás para reducir sombras duras en los bordes.',
            'Evita que el color del pelo se parezca mucho al del fondo: el borde se vuelve mucho más difícil de detectar.',
            'Encuadra desde la mitad del pecho hacia arriba y deja algo de aire sobre la cabeza para poder recortar después.',
          ],
        },
        {
          heading: 'Por qué importa dónde se procesa tu cara',
          paragraphs: [
            'Una foto de tu cara es un dato biométrico. Bajo el RGPD es una categoría especial de dato personal cuando se usa para identificarte, y es justo el tipo de archivo que conviene mantener fuera de servidores ajenos por defecto.',
            'FreeBG nunca transmite la imagen. El modelo viaja hasta tu navegador en lugar de que tu cara viaje hasta un servidor, lo que significa que no existe ninguna copia de tu foto que se pueda conservar, vender o filtrar.',
          ],
        },
      ],
      faq: [
        {
          q: '¿Funciona bien con el pelo?',
          a: 'En general sí, para retratos normales. Los mechones sueltos sobre un fondo recargado son el caso más difícil; exportar sobre un color sólido en lugar de transparencia oculta casi toda la imperfección restante.',
        },
        {
          q: '¿Puedo usarla para una foto de pasaporte o DNI?',
          a: 'Genera el fondo limpio que piden esas fotos, pero los documentos oficiales tienen reglas estrictas de tamaño de cabeza, expresión, sombras y dimensiones de impresión. Consulta siempre la especificación del organismo emisor antes de presentarla.',
        },
        {
          q: '¿Funciona con gafas?',
          a: 'Sí. Las monturas se resuelven bien. Los reflejos fuertes en los cristales pueden confundir de vez en cuando la detección de bordes, así que ilumina ligeramente de lado si puedes.',
        },
        {
          q: '¿Se guarda mi foto en algún sitio?',
          a: 'No. Se carga en la memoria de tu navegador, se procesa allí y se descarta al cerrar la pestaña. No se transmite, ni se registra, ni se conserva nada.',
        },
      ],
    },

    removeBgAlternative: {
      title:
        'Alternativa a remove.bg – Gratis, Ilimitada, Sin Subir | freebg.app',
      description:
        'Alternativa gratis a remove.bg tras el paso a Canva. Recortes HD ilimitados, sin marca de agua ni registro. Tus fotos no salen del navegador.',
      h1: 'Alternativa gratis a remove.bg que nunca sube tu foto',
      subtitle:
        'Descargas HD ilimitadas, sin marca de agua y sin cuenta de Canva. La herramienta está arriba.',
      intro:
        'remove.bg se integra en Canva. El sitio independiente deja de estar disponible el 1 de diciembre de 2026 a las 9:00 CET, los créditos no usados caducan esa misma mañana y la API de autoservicio pasa a Leonardo.Ai. Si necesitas una alternativa a remove.bg que siga siendo una web simple —gratis, ilimitada y privada— suelta una imagen arriba. freebg.app recorta en tu navegador: el archivo no sale de tu dispositivo.',
      showTool: true,
      sections: [
        {
          heading: 'Qué cambia en remove.bg',
          paragraphs: [
            'Canva compró remove.bg en 2021. En 2026 mete el producto de consumo dentro de Canva y retira la web independiente. Es un problema si querías una página de un solo uso: abrir, soltar, descargar. Canva es una suite de diseño. Leonardo.Ai es una plataforma de API. Ninguna es “pega una foto de producto y baja un PNG transparente sin cuenta”.',
            'Si aún tienes créditos de pago por uso, gástalos antes del 1 de diciembre de 2026. Los términos de remove.bg dicen que los créditos no usados caducan ese día y no se reembolsan ni se pasan a Canva.',
          ],
        },
        {
          heading: 'freebg.app frente a remove.bg',
          paragraphs: [
            'remove.bg marcó el listón de calidad en la nube. También sube cada imagen, limita las descargas HD y ahora te empuja a otro producto. freebg.app es la arquitectura contraria: el modelo se descarga una vez (~40 MB) y tu CPU o GPU hace el trabajo. Por eso esta alternativa a remove.bg puede ser ilimitada y gratis.',
          ],
          bullets: [
            'Subida — remove.bg envía el archivo a un servidor. freebg.app no.',
            'Precio — los créditos de remove.bg caducan; aquí no hay créditos.',
            'Marca de agua / resolución — se exportan los píxeles originales, HD y 4K, sin marca de agua.',
            'Cuenta — ninguna. Canva/remove.bg quieren que entres en su plataforma.',
            'Lotes — cola local y ZIP. Sin factura por imagen.',
            'Sin conexión — tras la primera descarga del modelo, la pestaña sigue funcionando.',
          ],
        },
        {
          heading: 'Cuándo seguir con Canva o remove.bg',
          paragraphs: [
            'Usa Canva si ya vives ahí y el recorte va dentro de un diseño mayor. Usa una API en la nube si procesas decenas de miles de imágenes en servidor. Usa freebg.app cuando quieras una alternativa a remove.bg privada e ilimitada para catálogos, clientes, fotos de niños o cualquier archivo que no quieras en la GPU de un tercero.',
          ],
        },
        {
          heading: 'Cómo cambiar en menos de un minuto',
          paragraphs: [
            'No hay nada que migrar. Los favoritos que apuntaban a remove.bg pueden apuntar aquí. Pega o suelta los mismos JPG, PNG o WEBP. Descarga un PNG transparente o exporta a blanco para fichas tipo Amazon. Si después necesitas redimensionar o comprimir, sigue en FreePNG.',
          ],
        },
      ],
      howTo: {
        name: 'Cómo sustituir remove.bg por una herramienta sin subida',
        steps: [
          {
            name: 'Abre esta página',
            text: 'Quédate aquí: el quitar fondo es el bloque de arriba. Sin cuenta de Canva y sin pack de créditos.',
          },
          {
            name: 'Añade las mismas imágenes que usabas en remove.bg',
            text: 'Arrastra, busca o pega. Varios archivos entran en una cola local.',
          },
          {
            name: 'Quita el fondo en tu dispositivo',
            text: 'La IA corre en esta pestaña. Mira la barra de progreso; no se envía nada a un servidor.',
          },
          {
            name: 'Descarga en HD',
            text: 'Guarda PNG, JPG o WEBP a la resolución original, sin marca de agua.',
          },
        ],
      },
      faq: [
        {
          q: '¿De verdad cierra remove.bg?',
          a: 'La web independiente está prevista para el 1 de diciembre de 2026 a las 9:00 CET. El quitar fondo pasa a Canva; la API de autoservicio, a Leonardo.Ai. Los contratos enterprise son otro caso: consulta el FAQ de remove.bg.',
        },
        {
          q: '¿Mis créditos de remove.bg pasan a Canva?',
          a: 'No. Los créditos PAYG y el resto caducan el 1 de diciembre de 2026 y no se reembolsan. Gasta el saldo antes de esa mañana si aún tienes.',
        },
        {
          q: '¿Es freebg.app una alternativa a remove.bg de calidad completa?',
          a: 'Usa un modelo IS-Net en el dispositivo. Personas, productos, animales y vehículos salen bien. Pelo, cristal y desenfoque son difíciles para cualquier herramienta automática, también las de pago. Exporta a blanco o usa el pincel de retoque si un borde falla.',
        },
        {
          q: '¿Necesito cuenta para descargar en HD?',
          a: 'No. HD y 4K no están bloqueados. No hay marca de agua de vista previa.',
        },
        {
          q: '¿Se suben mis imágenes como en remove.bg?',
          a: 'No. Es quitar fondo sin subir archivos. Compruébalo en DevTools → Red: tu foto no va en el cuerpo de ninguna petición.',
        },
        {
          q: '¿Puedo usar el resultado con fines comerciales?',
          a: 'Sí. No añadimos marca de agua ni reclamamos licencia sobre tus archivos. Sigues necesitando los derechos de la foto original.',
        },
      ],
    },

    photoroomAlternative: {
      title:
        'Alternativa a Photoroom – Gratis, Sin Marca de Agua | freebg.app',
      description:
        'Alternativa gratis a Photoroom para recortes. Sin app, sin registro, sin marca de agua. HD ilimitado en el navegador: tus fotos no salen del dispositivo.',
      h1: 'Alternativa gratis a Photoroom para recortes simples y privados',
      subtitle:
        'Sin instalar app. Sin créditos. Resolución completa en el navegador.',
      intro:
        'Photoroom es un estudio de producto potente: fondos, sombras, lotes y una app móvil muy cuidada. Ese poder también es el candado — cuentas, subidas y un plan de pago cuando se acaba lo gratis. Si solo necesitas una alternativa a Photoroom para “quitar fondo y bajar PNG”, freebg.app hace ese trabajo sin app y sin subir nada.',
      showTool: true,
      sections: [
        {
          heading: 'En qué es bueno Photoroom',
          paragraphs: [
            'Photoroom brilla cuando quieres un estudio de fichas: escenas generadas, sombras de marca, plantillas de equipo y flujo en el móvil. Si ese es tu trabajo diario, sigue pagándolo. Esta página es para el otro caso: abriste Photoroom (o un clon) solo para quitar un fondo y te encontraste marca de agua, recorte de resolución o una subida que no querías.',
          ],
        },
        {
          heading: 'freebg.app frente a Photoroom',
          bullets: [
            'Instalación — Photoroom quiere la app o un espacio web con sesión. freebg.app es esta página.',
            'Subida — Photoroom procesa en la nube. freebg.app es un quitar fondo privado: los píxeles se quedan en la pestaña.',
            'Precio — el plan gratis de Photoroom es un embudo. Aquí hay un solo plan: ilimitado y gratis.',
            'Marca de agua / HD — las descargas son limpias y coinciden con la resolución original, incluido 4K.',
            'Lotes — cola local + ZIP, sin quemar créditos por SKU.',
            'Estudio — Photoroom gana en escenas IA y kits de marca. No lo negamos.',
          ],
        },
        {
          heading: 'Para quién es esta alternativa a Photoroom',
          subsections: [
            {
              heading: 'Vendedores que solo necesitan fondo blanco',
              paragraphs: [
                'Exporta a blanco exacto (RGB 255, 255, 255) para la imagen principal tipo Amazon, o deja transparencia para Shopify. Procesa una carpeta sin pagar un asiento al mes.',
              ],
            },
            {
              heading: 'Diseñadores que no quieren otro SaaS',
              paragraphs: [
                'Suelta el sujeto, descarga un PNG transparente y termina en Figma, Canva o Photoshop. Sin marca de agua que borrar antes del cliente.',
              ],
            },
            {
              heading: 'Quien envía caras o productos sin lanzar',
              paragraphs: [
                'Un retrato o un SKU prelanzamiento no debería ir por defecto a la GPU de un tercero. Inferencia en el dispositivo es la opción conservadora.',
              ],
            },
          ],
        },
        {
          heading: 'Calidad, con honestidad',
          paragraphs: [
            'Los modelos en la nube de Photoroom están afinados para merchandising y retratos y pueden ganar a un único modelo en el navegador con pelo, joyas y cristal. Para productos, personas y mascotas del día a día, un modelo local IS-Net basta para publicar. Los bordes suaves desaparecen si exportas a un color sólido. El pincel de retoque cubre restos.',
            'Después del recorte, redimensiona o comprime en FreePNG si el marketplace limita el peso.',
          ],
        },
      ],
      howTo: {
        name: 'Cómo quitar un fondo sin Photoroom',
        steps: [
          {
            name: 'Quédate en esta página',
            text: 'Sin tienda de apps ni muro de email. La zona de carga está arriba.',
          },
          {
            name: 'Añade una imagen o un lote',
            text: 'JPG, PNG o WEBP. Pega desde el portapapeles si ya copiaste el archivo.',
          },
          {
            name: 'Ejecuta el modelo local',
            text: 'La primera vez cachea unos 40 MB. Después cada recorte empieza al momento.',
          },
          {
            name: 'Descarga un archivo limpio',
            text: 'PNG transparente, o JPG/WEBP en blanco o color. Resolución completa, sin marca de agua.',
          },
        ],
      },
      faq: [
        {
          q: '¿Es una alternativa real a Photoroom o solo una landing?',
          a: 'Arriba corre la misma herramienta que en la home. Es un recorte enfocado, no un clon de Photoroom con escenas y kits de marca.',
        },
        {
          q: '¿Photoroom sube mis fotos?',
          a: 'Sí: editar en la nube implica el archivo en sus servidores. freebg.app no sube la imagen. Puedes verlo en la pestaña Red.',
        },
        {
          q: '¿Habrá marca de agua en el plan gratis?',
          a: 'Aquí no hay plan gratis. Cada descarga va sin marca de agua.',
        },
        {
          q: '¿Puedo hacer lotes como en Photoroom?',
          a: 'Sí, en local. Añade varios archivos, espera la cola y descarga un ZIP.',
        },
        {
          q: '¿Funciona en iPhone?',
          a: 'Sí en Safari o Chrome. Convierte HEIC a JPG primero (Cámara → Formatos → Más compatible) o el navegador no puede abrir el archivo.',
        },
        {
          q: '¿Puedo seguir con Photoroom para diseño y usar esto para volumen?',
          a: 'Sí. Mucha gente mantiene un estudio de pago para campañas y usa una herramienta sin subida para SKUs masivos y fotos sensibles.',
        },
      ],
    },

    noUpload: {
      title:
        'Cómo Quitar el Fondo Sin Subir la Imagen | freebg.app',
      description:
        'Quita el fondo sin subir la foto. IA en tu dispositivo, sin cuenta ni marca de agua. HD y 4K se quedan en tu ordenador o móvil.',
      h1: 'Cómo quitar el fondo sin subir tu foto',
      subtitle:
        'IA en el dispositivo. Nada sale de esta pestaña. Descarga a resolución completa.',
      intro:
        'La mayoría de webs para “quitar fondo gratis” son formularios de subida con una GPU al otro lado. Vale para una taza. Es un mal valor por defecto para retratos tipo DNI, niños, trabajo bajo NDA o un producto sin lanzar. Quitar el fondo sin subir la imagen invierte el modelo: la IA viene a tu navegador y los píxeles no salen.',
      showTool: true,
      sections: [
        {
          heading: 'Por qué “sin subir” no es un eslogan',
          paragraphs: [
            'Si el archivo cruza la red, confías en logs, copias, acceso de personal, subencargados y una cláusula de términos que no leíste. El RGPD trata una cara como dato biométrico cuando te identifica. Un catálogo filtra fechas de lanzamiento. Las fotos del colegio no deberían entrenar el modelo de otro.',
            'freebg.app es un quitar fondo privado por arquitectura. Decodificar, segmentar y exportar ocurren en esta pestaña con WebGPU o WebAssembly. Cierras la pestaña y los búferes desaparecen.',
          ],
        },
        {
          heading: 'Cómo comprobar que no se subió nada',
          bullets: [
            'Abre DevTools → Red antes de soltar el archivo.',
            'Procesa la imagen. Deberías ver la descarga única del modelo, no un POST con tu foto.',
            'Cuando el modelo esté en caché, corta el Wi-Fi y procesa otra. Si sigue funcionando, los píxeles no necesitaban servidor.',
            'Nada en la barra de direcciones debería parecer una API de subida de tu bitmap.',
          ],
        },
        {
          heading: 'Paso a paso: recorte sin nube',
          paragraphs: [
            'Usa la herramienta de arriba. Arrastra un JPG, PNG o WEBP, o pega con Ctrl + V. Pulsa Quitar fondo. Compara antes y después, retoca restos con el borrador mágico si hace falta y descarga un PNG transparente al tamaño original. Ese es todo el flujo — el de la guía paso a paso, sin servidor de terceros.',
          ],
        },
        {
          heading: 'Cuándo la nube sigue siendo la opción correcta',
          paragraphs: [
            'Los editores con subida pueden ganar en pelo, cristal y joyas muy difíciles, y escalan lotes enormes en servidor. Úsalos para piezas de marketing que publicarías igual. Prefiere no subir nada de lo que no adjuntarías a un email al azar.',
            'Si llegaste desde la comparativa con remove.bg o Photoroom, el mismo motor en el dispositivo está en esas páginas.',
          ],
        },
      ],
      howTo: {
        name: 'Cómo quitar el fondo sin subir la imagen',
        steps: [
          {
            name: 'Deja el archivo en tu dispositivo',
            text: 'No lo envíes por correo a una web. Suéltalo arriba para que solo se lea en memoria.',
          },
          {
            name: 'Deja que el modelo se descargue una vez',
            text: 'Unos 40 MB de IA quedan en la caché del navegador. Ese es el único paso de red obligatorio.',
          },
          {
            name: 'Procesa en local',
            text: 'Mira el indicador de progreso. La segmentación corre en tu CPU o GPU dentro de esta pestaña.',
          },
          {
            name: 'Opcional: desconéctate y repite',
            text: 'Con la caché caliente, corta la red y procesa una segunda imagen para demostrar que no hay subida.',
          },
          {
            name: 'Descarga el PNG',
            text: 'Resolución completa, sin marca de agua. Cierra la pestaña: no queda nada en un servidor porque no se envió nada.',
          },
        ],
      },
      faq: [
        {
          q: '¿Se puede quitar el fondo sin subir la foto de verdad?',
          a: 'Sí. Los modelos ONNX / WebAssembly en el navegador bastan para recortes del día a día. El intercambio es una descarga la primera vez y más carga en tu dispositivo.',
        },
        {
          q: '¿Podéis ver mi imagen de todos modos?',
          a: 'No. Nunca se transmite a freebg.app. No podríamos guardarla ni entrenar con ella aunque quisiéramos.',
        },
        {
          q: '¿“Sin subir” significa que funciona sin conexión?',
          a: 'Tras la primera visita, sí. El modelo y la app quedan en caché. La primera visita sigue necesitando red para esos archivos.',
        },
        {
          q: '¿Y las imágenes de ejemplo?',
          a: 'Los ejemplos son archivos públicos de este sitio. Tu foto no se envía cuando usas la zona de carga.',
        },
        {
          q: '¿Es lo mismo que un VPN o “subir en incógnito”?',
          a: 'No. Incógnito también sube. Un VPN también sube. Sin subida significa que el bitmap no se convierte en cuerpo HTTP.',
        },
        {
          q: '¿Qué formatos se quedan en local?',
          a: 'JPG, PNG y WEBP. HEIC hay que convertirlo antes en el dispositivo porque los navegadores no lo decodifican de forma nativa.',
        },
        {
          q: '¿Puedo hacerlo en el móvil?',
          a: 'Sí en Safari y Chrome actuales. Archivos 4K muy grandes pueden quedarse sin memoria en móviles viejos.',
        },
      ],
    },

    amazonWhite: {
      title:
        'Fondo Blanco Amazon Gratis – RGB 255 Sin Subir | freebg.app',
      description:
        'Crea fondos blancos listos para Amazon gratis. RGB 255, 255, 255, sin subir archivos ni marca de agua. HD ilimitado también para Shopify y eBay.',
      h1: 'Fondo blanco Amazon – gratis, blanco exacto, sin subir',
      subtitle:
        'RGB 255, 255, 255. Resolución completa. Sin créditos por SKU.',
      intro:
        'Amazon es exigente con la imagen principal: producto sobre fondo blanco puro, ocupando casi todo el encuadre, sin marca de agua ni texto promocional. Una foto de un “fondo blanco” casi nunca es RGB 255, 255, 255. Suelta la toma arriba, elige Blanco y descarga. Eso es fondo blanco Amazon sin subir el catálogo.',
      showTool: true,
      sections: [
        {
          heading: 'Qué revisa Amazon de verdad',
          bullets: [
            'Imagen principal: fondo blanco puro (RGB 255, 255, 255).',
            'El producto debe ocupar unos 85% del encuadre y verse entero.',
            'Sin marcas de agua, sellos, recuadros ni texto promocional.',
            'Google Shopping y muchos conectores rechazan lo mismo.',
          ],
          paragraphs: [
            'eBay prefiere un fondo claro. Shopify y Etsy son más flexibles, pero un set blanco uniforme convierte mejor. Exportar a blanco exacto aquí gana a fotografiar un ciclo arrugado.',
          ],
        },
        {
          heading: 'Un flujo de catálogo que no quema créditos',
          paragraphs: [
            'Las herramientas en la nube cobran por imagen al salir del plan gratis. Como esto corre en tu máquina, puedes procesar una temporada de SKUs del tirón. Dispara con la misma luz, suelta el lote, elige Blanco, descarga el ZIP y súbelo a Seller Central o Shopify.',
            '¿Necesitas un JPG más ligero? Comprime en FreePNG para que la ficha cargue antes.',
          ],
        },
        {
          heading: 'Por qué al vendedor le importa no subir',
          paragraphs: [
            'Productos sin lanzar, cajas de proveedor y etiquetas de precio en el encuadre son sensibles. Muchos quitafondos gratis se reservan derechos amplios sobre lo que subes. Aquí el archivo no sale de la pestaña — el mismo camino privado que la página de fotos de producto, afinado para el blanco de marketplace.',
          ],
        },
      ],
      howTo: {
        name: 'Cómo hacer un fondo blanco Amazon',
        steps: [
          {
            name: 'Suelta la foto de producto',
            text: 'JPG, PNG o WEBP. Añade varios SKUs si quieres cola.',
          },
          {
            name: 'Quita el fondo',
            text: 'El modelo corre en local. Espera la barra de progreso.',
          },
          {
            name: 'Elige Blanco',
            text: 'Ese relleno es RGB 255, 255, 255 — la especificación de Amazon.',
          },
          {
            name: 'Descarga JPG o PNG',
            text: 'JPG suele pesar menos en fichas. Sin marca de agua.',
          },
        ],
      },
      faq: [
        {
          q: '¿El blanco es el de Amazon?',
          a: 'Sí. La opción Blanco rellena con RGB 255, 255, 255, que es lo que pide Amazon para la imagen principal.',
        },
        {
          q: '¿Pasará Seller Central?',
          a: 'Resuelve la regla del color de fondo. Sigue haciendo falta recorte, foco y que no haya texto. Relee la ayuda de imágenes de Amazon de tu categoría.',
        },
        {
          q: '¿Puedo dejar una sombra suave?',
          a: 'No de forma automática. El modelo trata las sombras proyectadas como fondo. Compón la sombra después si tu marca la necesita.',
        },
        {
          q: '¿Cristal y joyas?',
          a: 'Difícil para cualquier herramienta automática. Exportar a blanco suele dar una ficha usable porque las zonas transparentes también quedan blancas.',
        },
        {
          q: '¿Sirve para Shopify y eBay?',
          a: 'Sí. El mismo archivo blanco vale en Shopify, eBay, Etsy y Google Shopping.',
        },
        {
          q: '¿Hay cobro por imagen?',
          a: 'No. SKUs ilimitados, sin cuenta.',
        },
      ],
    },

    logo: {
      title:
        'Quitar Fondo a un Logo Gratis – PNG Transparente | freebg.app',
      description:
        'Quita el fondo de un logo gratis. PNG transparente, sin marca de agua y sin subir. La marca se queda en tu dispositivo, a tamaño original.',
      h1: 'Quitar el fondo de un logo – PNG transparente gratis',
      subtitle:
        'Sin subir archivos de marca. Resolución completa. Sin marca de agua.',
      intro:
        'Un logo dentro de un rectángulo blanco se ve amateur en una diapositiva oscura o en una web. Quieres un PNG con transparencia real. Los quitafondos en la nube también dejan tu marca en el disco de otro. Esta página es quitar fondo sin subir para isotipos, wordmarks e iconos.',
      showTool: true,
      sections: [
        {
          heading: 'Qué funciona bien',
          bullets: [
            'Wordmarks e iconos sólidos sobre fondo liso o papel.',
            'Logos tipo sticker fotografiados en un escritorio (recorta antes).',
            'Iconos de app y badges que solo tienes en JPG aplanado.',
          ],
          paragraphs: [
            'El SVG vectorial sigue siendo mejor si tienes el original. Usa esto cuando el único archivo que te enviaron es una foto o un PNG con caja.',
          ],
        },
        {
          heading: 'A qué prestar atención',
          paragraphs: [
            'Script fino, tipo recortado y sombras confunden a cualquier modelo. Si la marca es negra sobre blanco, un vectorizador puede quedar más limpio. Si es un badge de color sobre una foto recargada, recorta para que el logo llene el encuadre, procesa y retoca restos con el pincel.',
            'No subas packs de identidad a webs random de “quitar fondo logo”. Aquí el archivo se queda en la pestaña. Después, redimensiona o convierte en FreePNG si necesitas favicon o cabecera.',
          ],
        },
      ],
      howTo: {
        name: 'Cómo quitar el fondo de un logo',
        steps: [
          {
            name: 'Recorta justo',
            text: 'Dale al modelo el mínimo escritorio, captura o póster posible.',
          },
          {
            name: 'Suelta el archivo arriba',
            text: 'PNG o JPG. No se envía a ningún servidor.',
          },
          {
            name: 'Deja transparencia',
            text: 'Fondo en Transparente para obtener un PNG con alfa real.',
          },
          {
            name: 'Revisa bordes',
            text: 'Usa el antes/después y el pincel en las esquinas sucias.',
          },
        ],
      },
      faq: [
        {
          q: '¿Convierte un logo JPG en PNG transparente de verdad?',
          a: 'Sí. La salida es un PNG con canal alfa si dejas el fondo en Transparente.',
        },
        {
          q: '¿Sustituye a Illustrator?',
          a: 'No, si tienes vectores. Sí, si el único asset es una foto o un export aplanado.',
        },
        {
          q: '¿Puedo hacer un pack entero de marca?',
          a: 'Añade varios archivos y descarga un ZIP. Sigue siendo local e ilimitado.',
        },
        {
          q: '¿Se sube mi marca?',
          a: 'No. El mismo pipeline sin subida que el resto de freebg.app.',
        },
        {
          q: 'El texto fino se ve mordido',
          a: 'Exporta al color real de destino o vectoriza. El recorte automático sufre con tipos muy finos.',
        },
        {
          q: '¿Entrada SVG?',
          a: 'Los navegadores no tratan el SVG como un bitmap. Exporta un PNG grande desde tu app de diseño, o quédate con el SVG.',
        },
      ],
    },

    screenshot: {
      title:
        'Quitar Fondo a una Captura de Pantalla Gratis | freebg.app',
      description:
        'Quita el fondo de una captura gratis. Aísla UI, ventanas o móviles. Sin subir, sin marca de agua, PNG a resolución completa.',
      h1: 'Quitar el fondo de una captura de pantalla',
      subtitle:
        'Aísla una ventana, un móvil o una UI. Nada sale del navegador.',
      intro:
        'Docs, landings y fichas de store suelen necesitar una ventana o un móvil — no el escritorio de detrás. Un quitar fondo de captura no debería subir UI sin lanzar. Suelta la captura arriba; quédate con el marco que quieres y pierde el wallpaper.',
      showTool: true,
      sections: [
        {
          heading: 'Mejores capturas de origen',
          bullets: [
            'Una sola ventana con borde claro contra el fondo.',
            'Un mockup de móvil o portátil que no corte el bisel.',
            'UI oscura sobre escritorio claro, o al revés — el contraste ayuda.',
          ],
          paragraphs: [
            'Las sombras del sistema y las esquinas redondas son lo difícil. Si el modelo se come una sombra que querías, restáurala con el pincel o pon el PNG sobre una sombra nueva en Figma. Si deja wallpaper en las esquinas, bórralo.',
          ],
        },
        {
          heading: 'Cuándo no usar un recorte',
          paragraphs: [
            'Si necesitas un marco de dispositivo pixel-perfect, un kit de mockups queda más limpio. Usa esto cuando tienes una captura real y diez minutos, no un design system. En slides y Notion, un borde un poco blando sobre un color sólido desaparece.',
          ],
        },
      ],
      howTo: {
        name: 'Cómo recortar una captura del escritorio',
        steps: [
          {
            name: 'Captura un solo sujeto',
            text: 'Una ventana o un dispositivo. Esconde paneles extra antes.',
          },
          {
            name: 'Suelta el PNG o JPG',
            text: 'El proceso se queda en esta pestaña — útil para UI sin publicar.',
          },
          {
            name: 'Compara bordes',
            text: 'Revisa esquinas redondas y la sombra del sistema en el control.',
          },
          {
            name: 'Exporta transparente o sólido',
            text: 'Transparente para mockups; un color de marca para slides.',
          },
        ],
      },
      faq: [
        {
          q: '¿Conserva las esquinas redondas de la ventana?',
          a: 'Suele sí si hay contraste. Retoca si una esquina queda cuadrada.',
        },
        {
          q: '¿Puedo aislar una zona de la UI, no toda la ventana?',
          a: 'Recorta primero y luego pasa la herramienta. Busca un sujeto principal.',
        },
        {
          q: '¿Capturas retina?',
          a: 'Se mantiene la resolución. Capturas 5K muy grandes pueden ahogar portátiles viejos.',
        },
        {
          q: '¿Se sube la UI sin publicar?',
          a: 'No. Por eso tiene sentido este flujo en freebg.app.',
        },
        {
          q: 'Sale el chrome del navegador',
          a: 'Recorta la barra de direcciones antes de soltar el archivo si solo quieres la página.',
        },
        {
          q: '¿Fotogramas de vídeo?',
          a: 'Un frame en JPG/PNG vale. No procesamos archivos de vídeo.',
        },
      ],
    },

    signature: {
      title:
        'Quitar Fondo a una Firma Gratis – PNG Transparente | freebg.app',
      description:
        'Quita el fondo de una firma gratis. De escaneo a PNG transparente para email, contratos y PDF. Sin subir y sin marca de agua.',
      h1: 'Quitar el fondo de una firma',
      subtitle:
        'De foto o escaneo a PNG transparente. Se queda en tu dispositivo.',
      intro:
        'Una firma a bolígrafo sobre papel rayado no pinta en un pie de email como un rectángulo gris. Necesitas tinta sobre PNG transparente. Las firmas son dato de identidad: no las subas a un recortador random. Suelta el escaneo arriba y deja el archivo en local.',
      showTool: true,
      sections: [
        {
          heading: 'Cómo fotografiar la firma',
          bullets: [
            'Papel blanco o muy claro, sin renglones. Las líneas se vuelven “tinta” para el modelo.',
            'Luz de día uniforme; evita la sombra de la mano.',
            'Llena el encuadre. Un garabato minúsculo en una foto enorme deja basura en los bordes.',
            'JPG o PNG. HEIC del móvil: convierte a JPG primero.',
          ],
        },
        {
          heading: 'Después del recorte',
          paragraphs: [
            'Si queda textura de papel, exporta a blanco para un PDF de contrato o bórrala con el pincel. Para email, un PNG transparente pequeño basta — encógelo en FreePNG para que no se coma el mensaje. Para un sello reutilizable en PDF, guarda el PNG a resolución completa y colócalo en FreePDF o en tu editor.',
            'Una firma escaneada se puede abusar si se filtra. Como no se sube nada, cerrar la pestaña es toda la política de retención.',
          ],
        },
      ],
      howTo: {
        name: 'Cómo hacer un PNG transparente de firma',
        steps: [
          {
            name: 'Firma en papel en blanco',
            text: 'Tinta oscura, sin renglones, buena luz.',
          },
          {
            name: 'Suelta la foto o el escaneo',
            text: 'El modelo corre en el navegador. La firma no se envía.',
          },
          {
            name: 'Deja transparencia',
            text: 'O elige blanco si el PNG va directo a un PDF tipo folio.',
          },
          {
            name: 'Descarga y guárdala tú',
            text: 'Nosotros no vemos el archivo, así que no podemos recuperarlo después.',
          },
        ],
      },
      faq: [
        {
          q: '¿Aguanta tinta azul o negra?',
          a: 'Sí en escaneos normales. El lápiz muy claro es mala fuente: vuelve a firmar con un bolígrafo más oscuro.',
        },
        {
          q: '¿Papel de cuaderno rayado?',
          a: 'Las líneas suelen quedarse. Usa papel en blanco o bórralas después.',
        },
        {
          q: '¿Esto es “mi firma” legalmente?',
          a: 'Es una foto de tu rúbrica. Las reglas de contrato dependen de tu jurisdicción. Esta herramienta solo quita el papel.',
        },
        {
          q: '¿Guardáis firmas?',
          a: 'No. Nunca llegan a nuestros servidores.',
        },
        {
          q: 'Tamaño para email',
          a: 'Redimensiona el PNG después. Una firma de 4000 px sobra en Gmail.',
        },
        {
          q: '¿Varias firmas a la vez?',
          a: 'Sí — lote y ZIP, sigue en local.',
        },
      ],
    },

    removeBgShutdown: {
      title:
        'remove.bg Cierra el 1 de Diciembre de 2026 – Qué Hacer | freebg.app',
      description:
        'La web de remove.bg cierra el 1 de diciembre de 2026. Caducan créditos. La API pasa a Leonardo. Alternativa gratis sin subir que puedes usar hoy.',
      h1: 'remove.bg cierra el 1 de diciembre de 2026',
      subtitle:
        'Web, créditos y API de autoservicio cambian esa mañana. Arriba tienes una herramienta local gratis.',
      intro:
        'Canva retira la web independiente de remove.bg el 1 de diciembre de 2026 a las 9:00 CET. Los créditos no usados caducan esa misma mañana. La API de autoservicio pasa a Leonardo.Ai. Si quieres una página que siga haciendo una sola cosa — soltar imagen, bajar PNG — usa la herramienta de arriba. Lo de abajo sale del FAQ y los términos de remove.bg, no de rumores.',
      showTool: true,
      sections: [
        {
          heading: 'Las tres cosas que pasan el 1 de diciembre',
          bullets: [
            'La web independiente deja de estar. El recorte de consumo pasa a Canva.',
            'Los créditos no usados (PAYG, acumulados, promos) caducan y no se reembolsan ni se pasan a Canva.',
            'La API de autoservicio pasa a Leonardo.Ai. Los contratos enterprise son otro caso: lee el FAQ de remove.bg.',
          ],
          paragraphs: [
            'Si aún tienes saldo, gástalo antes de esa mañana o dálo por perdido. No compres un pack a finales de noviembre salvo que lo vayas a agotar.',
          ],
        },
        {
          heading: 'Qué usar en lugar de la web independiente',
          paragraphs: [
            'Quédate en Canva si el recorte es un paso dentro de un diseño mayor. Pasa la API a Leonardo si ya integras el stack de Canva. Cambia a una herramienta sin subida como freebg.app si querías la pestaña antigua de remove.bg: HD ilimitado, sin cuenta, fotos en tu dispositivo. La página de alternativa a remove.bg tiene el lado a lado.',
            'Guarda esta web en favoritos. De remove.bg no hay nada que exportar salvo la costumbre de soltar un archivo.',
          ],
        },
        {
          heading: 'Por qué existe esta página',
          paragraphs: [
            'La búsqueda se está llenando de posts de “remove.bg cierra” que esconden la fecha detrás de un registro. Deberías poder leer los hechos y probar un recambio en la misma vista. No somos Canva; no tenemos tus créditos; no podemos transferirlos.',
          ],
        },
      ],
      howTo: {
        name: 'Cómo dejar remove.bg antes del 1 de diciembre de 2026',
        steps: [
          {
            name: 'Gasta o asume los créditos perdidos',
            text: 'Usa el PAYG que quede en remove.bg antes del 1 de diciembre de 2026 a las 9:00 CET.',
          },
          {
            name: 'Cancela cobros que no necesites',
            text: 'Para los planes mensuales para no pagar un producto que está a punto de desaparecer.',
          },
          {
            name: 'Elige un flujo de recambio',
            text: 'Canva para suite, Leonardo para API, freebg.app para recortes privados e ilimitados.',
          },
          {
            name: 'Prueba un archivo real aquí',
            text: 'Suelta una foto de producto arriba. Descarga HD sin marca de agua y sin cuenta.',
          },
        ],
      },
      faq: [
        {
          q: '¿De verdad cierra remove.bg?',
          a: 'La web independiente está prevista para no estar disponible desde el 1 de diciembre de 2026 a las 9:00 CET. El quitar fondo sigue dentro de Canva. Confírmalo en el FAQ de remove.bg: Canva puede reescribir fechas.',
        },
        {
          q: '¿Los créditos pasan a Canva Pro?',
          a: 'No. Los créditos no usados caducan ese día y no se reembolsan, según los términos de remove.bg.',
        },
        {
          q: '¿Qué pasa con la API?',
          a: 'La API de autoservicio pasa a Leonardo.Ai el 1 de diciembre de 2026. Los contratos enterprise pueden continuar: revisa el contrato y la página de API de remove.bg.',
        },
        {
          q: '¿freebg.app está ligado a Canva o remove.bg?',
          a: 'No. Es una herramienta independiente, open source y en el navegador.',
        },
        {
          q: '¿Podéis importar mi historial de remove.bg?',
          a: 'No. Nunca recibimos esos archivos. Quédate con tus originales.',
        },
        {
          q: '¿Esta web se quedará siendo una herramienta simple?',
          a: 'Sí. Sin cuenta de Canva, sin pack de créditos y sin subir archivos.',
        },
      ],
    },

    privacy: {
      title: 'Política de Privacidad | FreeBG',
      description:
        'Cómo trata FreeBG tus datos: las imágenes se procesan íntegramente en tu navegador y nunca se suben. Política de privacidad completa.',
      h1: 'Política de privacidad',
      subtitle:
        'Versión corta: tus imágenes nunca llegan hasta nosotros, porque nunca salen de tu navegador.',
      showTool: false,
      sections: [
        {
          heading: 'Tus imágenes',
          paragraphs: [
            'FreeBG realiza todo el borrado de fondo en local, dentro de tu navegador, mediante un modelo de IA que se descarga a tu dispositivo. Las imágenes que abres con la herramienta nunca se transmiten a FreeBG ni a ningún tercero.',
            'No recibimos, vemos, almacenamos, registramos, respaldamos ni procesamos tus imágenes de ninguna forma. Al cerrar o recargar la página, la imagen se descarta de la memoria. Puedes comprobarlo tú mismo abriendo las herramientas de desarrollo del navegador e inspeccionando la pestaña Red mientras usas la herramienta.',
          ],
        },
        {
          heading: 'Qué sí recopilamos',
          paragraphs: [
            'Usamos analítica web agregada y respetuosa con la privacidad para saber cuánta gente nos visita y qué páginas lee. Esa analítica no usa cookies, no identifica tu dispositivo por huella digital y no construye un perfil tuyo entre sitios web.',
          ],
          bullets: [
            'URL visitada, procedencia, país aproximado, navegador y tipo de dispositivo.',
            'Sin cookies, sin identificadores de seguimiento entre sitios y sin datos personales.',
          ],
        },
        {
          heading: 'Servicios de terceros',
          paragraphs: [
            'Los archivos del modelo de IA y del motor se descargan desde una red de distribución de contenidos la primera vez que usas la herramienta. Esa petición expone necesariamente tu dirección IP al proveedor de la CDN, como cualquier petición web. No contiene información alguna sobre tus imágenes.',
            'Si usas el formulario de contacto, tu nombre, email y mensaje se envían a Formspree para que podamos recibir y responder tu consulta. Formspree procesa ese envío según su propia política de privacidad. No incluyas imágenes ni datos personales sensibles en el formulario.',
            'Si en el futuro se muestra publicidad en este sitio, los proveedores publicitarios podrán usar cookies o identificadores de dispositivo conforme a sus propias políticas. Esta página se actualizará antes de que ese cambio entre en vigor y se solicitará consentimiento donde la ley lo exija.',
          ],
        },
        {
          heading: 'Almacenamiento en tu dispositivo',
          paragraphs: [
            'Los archivos del modelo de IA y los recursos de la aplicación se guardan en la caché de tu navegador para que la herramienta cargue rápido y funcione sin conexión. Tus preferencias de interfaz, como el modo oscuro, también se guardan en local. Estos datos se quedan en tu dispositivo y puedes borrarlos cuando quieras desde los ajustes del navegador.',
          ],
        },
        {
          heading: 'Tus derechos',
          paragraphs: [
            'Como no recopilamos datos personales a través del quitafondo, por lo general no hay nada a lo que podamos acceder, que podamos corregir, exportar o eliminar en tu nombre por ese uso. Si nos escribes por el formulario, puedes pedirnos que borremos ese mensaje. Para cualquier duda sobre esta política, usa el formulario de contacto y te responderemos.',
          ],
        },
        {
          heading: 'Menores',
          paragraphs: [
            'Este servicio no está dirigido a menores de 13 años y no recopilamos conscientemente información personal de nadie.',
          ],
        },
        {
          heading: 'Cambios en esta política',
          paragraphs: [
            'Si esta política cambia de forma sustancial, se publicará la versión actualizada en esta página con una nueva fecha de entrada en vigor.',
          ],
        },
      ],
    },

    terms: {
      title: 'Términos del Servicio | FreeBG',
      description:
        'Los términos que se aplican al usar FreeBG. Gratis, se ofrece tal cual y no adquirimos ningún derecho sobre tus imágenes.',
      h1: 'Términos del servicio',
      subtitle:
        'Términos claros para una herramienta gratuita que se ejecuta en tu propio dispositivo.',
      showTool: false,
      sections: [
        {
          heading: 'Aceptación',
          paragraphs: [
            'Al usar FreeBG aceptas estos términos. Si no estás de acuerdo con ellos, por favor no uses el servicio.',
          ],
        },
        {
          heading: 'El servicio',
          paragraphs: [
            'FreeBG es una herramienta gratuita basada en navegador que quita el fondo de las imágenes mediante un modelo de IA ejecutado en tu propio dispositivo. No requiere cuenta ni tiene coste.',
            'Como el procesamiento ocurre en local, la calidad, la velocidad y el éxito de cada operación dependen de tu dispositivo, tu navegador y la propia imagen.',
          ],
        },
        {
          heading: 'Tu contenido',
          paragraphs: [
            'Conservas todos los derechos sobre las imágenes que procesas. No reclamamos propiedad, licencia ni derecho alguno sobre ellas y, dado que nunca se nos transmiten, no podríamos ejercer tales derechos aunque quisiéramos.',
            'Eres responsable de asegurarte de que tienes derecho a usar y editar cualquier imagen que proceses, y de cumplir la legislación aplicable al hacerlo.',
          ],
        },
        {
          heading: 'Uso aceptable',
          bullets: [
            'No uses el servicio para crear material ilícito, difamatorio o que infrinja los derechos de terceros.',
            'No lo uses para producir imágenes engañosas destinadas a defraudar o suplantar a alguien.',
            'No intentes interrumpir el sitio ni su infraestructura de distribución.',
          ],
        },
        {
          heading: 'Sin garantía',
          paragraphs: [
            'El servicio se ofrece «tal cual» y «según disponibilidad», sin garantías de ningún tipo, expresas o implícitas, incluida la idoneidad para un fin concreto. No garantizamos que los resultados cumplan tus requisitos ni que el servicio funcione de forma ininterrumpida o sin errores.',
            'Conserva siempre tus archivos originales. No podemos recuperar nada, porque nunca recibimos nada.',
          ],
        },
        {
          heading: 'Limitación de responsabilidad',
          paragraphs: [
            'En la máxima medida permitida por la ley, no somos responsables de daños indirectos, incidentales o consecuentes, ni de la pérdida de datos o beneficios, derivados del uso del servicio.',
          ],
        },
        {
          heading: 'Código abierto y licencia',
          paragraphs: [
            'La aplicación web FreeBG es de código abierto y se distribuye bajo la Licencia Pública General Affero de GNU v3.0, tal y como exige la biblioteca de eliminación de fondos sobre la que se construye. El código fuente es público y eres libre de inspeccionarlo, modificarlo y alojarlo por tu cuenta según los términos de esa licencia.',
          ],
        },
        {
          heading: 'Cambios',
          paragraphs: [
            'Estos términos pueden actualizarse de vez en cuando. El uso continuado del servicio tras un cambio supone la aceptación de los términos revisados.',
          ],
        },
      ],
    },

    contact: {
      title: 'Contacto | FreeBG',
      description:
        'Contacta con el equipo de FreeBG. Envía un mensaje con el formulario, sin necesidad de abrir el correo.',
      h1: 'Contacto',
      subtitle: 'Dudas, comentarios o propuestas — escríbenos un mensaje.',
      showTool: false,
      showContactForm: true,
      intro:
        'Leemos todos los mensajes. Usa el formulario y te responderemos lo antes posible. Por favor no pegues ni adjuntes imágenes personales aquí: el quitafondo ya funciona de forma privada en tu navegador.',
      sections: [],
    },
  },
}
