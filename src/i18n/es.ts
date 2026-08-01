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
    fullResolution: 'Resolución completa · Sin marca de agua',
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
    openSource: 'Código fuente',
    sourceNote: 'Código abierto (AGPL-3.0)',
    contact: 'Contacto',
    rights: 'Todos los derechos reservados.',
  },

  faqHeading: 'Preguntas frecuentes',

  pages: {
    home: {
      title: 'Quitar Fondo a una Imagen Gratis – Sin Marca de Agua | FreeBG',
      description:
        'Quita el fondo de tus imágenes gratis y sin límites. Sin marca de agua, sin registro y sin subir archivos. Resolución completa HD/4K, todo en tu navegador.',
      h1: 'Quita el fondo de tus imágenes. Gratis, ilimitado y privado.',
      subtitle: 'Resolución completa • Todo en tu navegador • Sin registro',
      showTool: true,
      sections: [
        {
          heading: 'Por qué FreeBG es diferente',
          paragraphs: [
            'La mayoría de las webs para quitar fondos suben tu foto a un servidor, te limitan a unas pocas imágenes gratis y luego te devuelven una vista previa en baja resolución con marca de agua si no pagas. FreeBG no hace nada de eso.',
            'El modelo de IA se ejecuta dentro de la pestaña de tu navegador. Tu imagen se lee desde el disco a la memoria, se procesa con tu propia CPU o GPU y se guarda como un PNG transparente. Ningún servidor ve el archivo, y por eso la herramienta puede ser realmente gratis e ilimitada.',
          ],
          bullets: [
            'Imágenes ilimitadas: no hay cuota que controlar porque no hay factura de servidor que pagar.',
            'Resolución original completa, incluido 4K. Nada de vistas previas reducidas.',
            'Nunca añadimos marca de agua.',
            'Sin cuenta, sin correo y sin tarjeta.',
            'Funciona sin conexión una vez descargado el modelo.',
          ],
        },
        {
          heading: 'Para qué te sirve',
          bullets: [
            'Fotos de producto para tiendas online que necesitan fondo blanco.',
            'Fotos de perfil para LinkedIn, currículums y páginas de equipo.',
            'Logotipos y recursos en PNG transparente para presentaciones y documentos.',
            'Recortes para carteles, miniaturas, collages y memes.',
            'Eliminar fondos que distraen antes de imprimir una foto.',
          ],
        },
        {
          heading: 'Calidad y límites, con honestidad',
          paragraphs: [
            'FreeBG usa el modelo de segmentación IS-Net, de la misma familia que utilizan muchas herramientas de pago. Funciona muy bien con personas, productos, animales y vehículos, y se defiende bien con detalles finos como el pelo.',
            'Los mechones muy finos sobre un fondo recargado, el cristal transparente y el desenfoque de movimiento siguen siendo difíciles para cualquier herramienta automática. Si un borde no queda perfecto, cambiar el fondo a blanco o a un color sólido suele disimular la diferencia por completo.',
            'La primera vez se descargan unos 40 MB de modelo y motor. Esa descarga queda en la caché del navegador, así que a partir de la segunda imagen todo es inmediato.',
          ],
        },
      ],
      howTo: {
        name: 'Cómo quitar el fondo con FreeBG',
        steps: [
          {
            name: 'Añade tu imagen',
            text: 'Arrastra un JPG, PNG o WEBP a la zona de carga, haz clic para buscarlo o pégalo desde el portapapeles con Ctrl + V.',
          },
          {
            name: 'Ejecuta la IA',
            text: 'Pulsa «Quitar fondo». El modelo se ejecuta en local en tu navegador y muestra el progreso en tiempo real.',
          },
          {
            name: 'Elige el fondo',
            text: 'Déjalo transparente o cámbialo a blanco o a cualquier color personalizado desde las opciones de fondo.',
          },
          {
            name: 'Descarga',
            text: 'Guarda el resultado en la resolución original completa como PNG, JPG o WEBP. Sin marca de agua.',
          },
        ],
      },
      faq: [
        {
          q: '¿De verdad es gratis y sin límites?',
          a: 'Sí. El procesamiento ocurre en tu propio dispositivo, así que atenderte mil imágenes no nos cuesta nada. No hay cuotas, ni prueba limitada, ni un plan de pago que mejore la calidad del resultado.',
        },
        {
          q: '¿Añadís marca de agua?',
          a: 'No. El archivo que descargas es una imagen limpia a resolución completa, sin marca de agua, sello ni metadatos añadidos por nosotros.',
        },
        {
          q: '¿Se suben mis imágenes a un servidor?',
          a: 'No. El modelo de IA se descarga a tu navegador y la imagen se procesa allí. Puedes comprobarlo abriendo las herramientas de desarrollo del navegador, yendo a la pestaña Red y verificando que ninguna petición contiene tu imagen. De hecho puedes desconectarte de internet tras cargar el modelo y la herramienta seguirá funcionando.',
        },
        {
          q: '¿En qué resolución obtengo el resultado?',
          a: 'En la misma que subiste, incluido 4K o superior. Las imágenes muy grandes solo están limitadas por la memoria disponible en tu dispositivo.',
        },
        {
          q: '¿Qué formatos admite?',
          a: 'Admite JPG, PNG y WEBP como entrada. Puedes descargar el resultado como PNG transparente, o como JPG o WEBP si eliges un color de fondo sólido. Las fotos HEIC del iPhone hay que convertirlas antes a JPG, porque los navegadores no pueden decodificar HEIC de forma nativa.',
        },
        {
          q: '¿Funciona en el móvil?',
          a: 'Sí. La interfaz está pensada para pantallas táctiles y la IA funciona en navegadores modernos de iOS y Android. El procesamiento es más lento que en un ordenador y las imágenes muy grandes pueden fallar en móviles antiguos con poca memoria.',
        },
        {
          q: '¿Funciona sin conexión?',
          a: 'Sí, después del primer uso. El modelo y la aplicación quedan en caché, así que puedes quitar fondos en un avión o sin cobertura.',
        },
        {
          q: '¿Cómo se compara con remove.bg?',
          a: 'remove.bg da resultados excelentes, pero sube tu imagen, limita las descargas gratuitas a baja resolución y cobra créditos por el tamaño completo. FreeBG cambia una descarga inicial del modelo por procesamiento ilimitado, privado y a resolución completa sin coste.',
        },
      ],
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
