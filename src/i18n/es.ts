import type { Dictionary } from './types'

export const es: Dictionary = {
  nav: {
    home: 'Quitar fondo',
    guide: 'Guía paso a paso',
    productPhotos: 'Fotos de producto',
    profilePictures: 'Fotos de perfil',
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
        heading: 'Guías y próximos artículos',
        intro:
          'Vamos a ampliar la cobertura temática con guías listas para AdSense. Empieza por las páginas de abajo o vuelve pronto para comparativas y flujos sin subida.',
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
            title: 'Mejores alternativas gratis a remove.bg',
            description:
              'Comparativa de opciones para quitar fondo gratis sin marca de agua en HD.',
            comingSoon: true,
          },
          {
            title: 'Cómo quitar el fondo sin subir la imagen',
            description:
              'Por qué la IA en el dispositivo gana a la nube con fotos sensibles o de clientes.',
            comingSoon: true,
          },
          {
            title: 'Free background remover (English)',
            description:
              'Unlimited, private, no watermark HD background remover — English homepage.',
            href: '/',
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
