// Datos del equipo y sus portafolios.
// Para agregar o editar tu perfil, sigue src/app/equipo/README.md.
// Sin fotos de personas: cada perfil se identifica con sus iniciales.

export interface Project {
  context?: string; // dónde y cuándo: cliente, empresa, año
  title: string;
  summary: string;
  stack?: string[];
  url?: string;
}

export interface Collaborator {
  slug: string;
  name: string;
  initials: string;
  role: string;
  bio: string[];
  links?: { github?: string; linkedin?: string; web?: string };
  projects: Project[];
}

export const TEAM: Collaborator[] = [
  {
    slug: 'gael-rodriguez',
    name: 'Ing. Gael Rodríguez',
    initials: 'G',
    role: 'Fundador · Desarrollo full stack',
    bio: [
      'Construyo y mantengo sistemas web desde 2022: Angular y Node.js desde el principio, NestJS desde 2023, casi todo en TypeScript. Los sistemas que hago se quedan corriendo en negocios reales, y yo sigo ahí cuando hay que cambiarlos.',
      'Antes de KAWI fui el único desarrollador de una planta de manufactura, donde hice 5 sistemas internos de calidad. También he trabajado como contratista para equipos en Monterrey y como becario de investigación en la Universidad de Guadalajara.',
      'Ingeniero en Electrónica y Computación por la UdeG, CUValles (2021–2024). Maestría en Ingeniería de Software en curso (2025–2027).',
    ],
    links: {
      linkedin: 'https://www.linkedin.com/in/claudio-gael-rodr%C3%ADguez-vega-b83507217/',
      github: 'https://github.com/LaBoa99',
    },
    projects: [
      {
        context: 'Cliente KAWI · Tala',
        title: 'Sistema de socios · Mutual Guadalupana A.C.',
        summary:
          'Lo usan 2 personas para administrar a 1,800 socios: padrón con beneficiarios, cobros y recibos, servicios funerarios, inventario y credenciales en PDF con QR. Los socios tienen un portal web (PWA) para consultar su adeudo y su credencial. Los pagos se quedaron fuera del portal a propósito, para no exponer a socios mayores a fraudes. El backend tiene unas 200 pruebas unitarias.',
        stack: ['NestJS', 'Angular', 'PWA', 'MariaDB', 'Docker'],
      },
      {
        context: 'Cliente KAWI · Tala · 2023 a la fecha',
        title: 'Punto de venta · Refaccionaria Torres',
        summary:
          'Venta con búsqueda por código y ticket impreso, inventario de más de 5,500 piezas con etiquetas QR, proveedores por pieza, historial de precios y reportes. Corre en una Raspberry Pi dentro de la tienda, con respaldo cada hora fuera de ella.',
        stack: ['Angular', 'NestJS', 'MariaDB', 'Raspberry Pi'],
      },
      {
        context: 'Open source · CUValles · 2026 · en equipo',
        title: 'Juez Miau',
        summary:
          'Juez automático para concursos de programación presenciales. Cada envío corre en un contenedor Docker sin red, con un núcleo de CPU reservado por caso de prueba y los mismos límites de tiempo y memoria para todos. Califica C, C++, Java, Python, JavaScript y C#. Trae panel para el staff, una app de escritorio que avisa si un equipo abre procesos, monitores o USB que no debe, y un marcador en vivo para el proyector.',
        stack: ['NestJS', 'Redis', 'Docker', 'Docker Compose'],
        url: 'https://juez-miau.kawi.page',
      },
      {
        context: 'Tesis de maestría · 2025 a la fecha',
        title: 'CUFlora',
        summary:
          'Plataforma para administrar un jardín etnobiológico. Es un API Gateway con microservicios NestJS, una app móvil en Expo y un editor de mapas sobre canvas. El georreferenciado no depende de ningún servicio de mapas comercial: es un ajuste afín por mínimos cuadrados sobre Web Mercator, afinado con la precisión del GPS. Tiene más de 170 casos de prueba unitaria y entra a evaluación en el Jardín Etnobiológico de Jalisco.',
        stack: ['NestJS', 'Microservicios', 'React Native', 'Expo', 'Skia'],
        url: 'https://info.cuflora.kawi.page',
      },
      {
        context: 'KAWI',
        title: 'Punto de venta para restaurante',
        summary:
          'Comandas, recetas con versiones, inventario con conteos cíclicos, corte de caja por turno e impresión térmica ESC/POS a través de un servicio puente en Python.',
        stack: ['NestJS', 'Angular', 'Python', 'BullMQ'],
      },
      {
        context: 'Interplex (hoy ENNOVI) · 2022–2023',
        title: '5 sistemas internos de calidad',
        summary:
          'Como único desarrollador de la planta: 8D, solicitudes de desviación, scorecard de clientes, control de documentos y cumplimiento legal. El 8D reemplazó una tabla de incidencias: pasos D0 a D8, cinco porqués, causas raíz, contención, acciones preventivas, alertas por correo y generador de gráficas. Inicio de sesión con la cuenta de Windows y permisos por rol.',
        stack: ['Angular', 'Express', 'SQL Server', 'MariaDB'],
      },
      {
        context: 'UdeG, CUValles · 2023–2024 · 2.º lugar del concurso de sistemas de acceso',
        title: 'Control de acceso con dashboard en tiempo real',
        summary:
          'Registro de entradas y salidas con un dashboard que se actualiza en vivo. Combina GraphQL y REST en NestJS con WebSockets.',
        stack: ['NestJS', 'GraphQL', 'WebSockets', 'Angular'],
      },
      {
        context: 'UdeG, CUValles · 2023–2024',
        title: 'API de horarios y app Android',
        summary:
          'El sistema académico de la universidad no tiene API pública, así que escribí un scraper en Python para sacar los datos. Encima de él construí una API de horarios de clases y una app nativa para Android.',
        stack: ['Python', 'Kotlin', 'Android'],
      },
      {
        context: 'Castesoft · Monterrey · 2025, contratista',
        title: 'Filtros genéricos en .NET y generador de código',
        summary:
          'Cambié controladores de unas 1,000 líneas, con un if por cada filtro, por un patrón genérico de consultas. Los archivos de filtros quedaron en una vigésima parte de su tamaño. Además hice una herramienta en Python que genera el frontend Angular repetitivo, y con ella el equipo de 3 tuvo en un mes un prototipo completo con autenticación y todos los CRUD.',
        stack: ['C#', '.NET', 'Python', 'Angular'],
      },
      {
        context: 'Freelance para Clik Graphics · 2023–2024',
        title: 'Sistemas para escuela, veterinaria y salón de eventos',
        summary:
          'Tres sistemas en NestJS y Angular, más el frontend del sistema de una financiera. Desplegados con Docker y Nginx en servidores VPS.',
        stack: ['NestJS', 'Angular', 'Docker', 'Nginx'],
      },
    ],
  },
  {
    slug: 'maribel-navarro',
    name: 'Ing. Maribel Navarro',
    initials: 'M',
    role: 'Desarrollo de software · Apps móviles',
    bio: [
      'Su primer proyecto fue una app para enseñar lengua de señas a niños sordos de Jalpa. La construyó desde cero con herramientas que nunca había tocado antes de empezar.',
      'Egresada de la UAZ Jalpa.',
    ],
    projects: [
      {
        title: 'App de lengua de señas para niños',
        summary: 'App móvil para enseñar lengua de señas a niños sordos de Jalpa.',
      },
    ],
  },
  {
    slug: 'juan-andres-virgen',
    name: 'Ing. Juan Andrés Virgen',
    initials: 'J',
    role: 'Desarrollo web · Soporte en campo',
    bio: [
      'Ingeniero por la Universidad de Guadalajara. Creció en Tala, a unas cuadras de donde arrancó KAWI.',
      'Cuando algo falla en el negocio de un cliente, puede estar ahí ese mismo día. Programa en Laravel, Node.js y Python, y entiende cómo funciona el mostrador, no solo el código.',
    ],
    projects: [],
  },
];

export const findCollaborator = (slug: string | null) => TEAM.find((c) => c.slug === slug);
