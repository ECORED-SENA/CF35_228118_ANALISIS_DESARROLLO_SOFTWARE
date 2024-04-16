export default {
  global: {
    componenteFormativo: 'Aplicación de pruebas de <em>software</em>',
    descripcionCurso:
      'En este componente, el aprendiz identificará que un <em>software</em> de calidad implica la utilización de diferentes tipos de pruebas, metodologías y procedimientos estándares para el análisis, diseño, programación y prueba del <em>software</em>. Esto con el objetivo de lograr una mayor confiabilidad, mantenibilidad y facilidad de prueba, así como de elevar la productividad tanto en la labor de desarrollo como en el control de calidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Realización de pruebas de <em>Software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de pruebas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: '<em>Agile Testing</em>',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Elaboración de informe de resultados',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Elaboración del plan de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Seleccionar las acciones de mejora',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Realizar una planeación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Seguimiento del plan de mejora',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228128_CF13_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.1 Tipos de pruebas',
      referencia:
        'SENA, E. d. (24 de 08 de 2021). Tipos de pruebas de <em>software</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Uf1Kk52ONYc',
    },
    {
      tema: '1.1.1 Pruebas Funcionales',
      referencia: 'IBM (2021). Pruebas Funcionales.',
      tipo: 'Documento',
      link:
        'https://www.ibm.com/docs/es/rtw/9.1.0?topic=SSBLQQ_9.1.0/com.ibm.rational.test.ft.doc/topics/Getting_Started_With_Ivory.html',
    },
    {
      tema: '1.1.5 Pruebas de Rendimiento',
      referencia: 'IBM (2021).Pruebas de rendimiento.',
      tipo: 'Documento',
      link:
        'https://www.ibm.com/docs/es/rtw/9.0.0?topic=phases-performance-testing',
    },
    {
      tema: '1.2 Agile Testing',
      referencia: 'QA, H.-O. (04 de 09 de 2020). Cuadrantes de prueba.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gz7A7EMZT_4',
    },
    {
      tema: '1.2.1 Test Driven Development (TDD)',
      referencia:
        'Zapata, M. (07 de 06 de 2020). Pruebas unitarias y Test-Driven Development.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YuRdaR6wwWU',
    },
    {
      tema: '1.2.6 Pruebas de Exploratorias, Usabilidad y Aceptación',
      referencia:
        'SIlva, F. (2015, 27 mayo). Cómo mejorar la usabilidad de tu diseño web. Blog IDA Chile | Estrategia para el éxito de tu negocio.',
      tipo: 'Blog',
      link: 'https://blog.ida.cl/diseno/como-mejorar-usabilidad-diseno-web/',
    },
    {
      tema: '1.2.6 Pruebas de Exploratorias, Usabilidad y Aceptación',
      referencia:
        'Zamora, A., Benitez, J., & M. M. (25 de 06 de 2020). Test de usabilidad: identificando mejoras con nuestros usuarios.',
      tipo: 'Workshop',
      link: 'https://www.youtube.com/watch?v=EeRtQUljvOM',
    },
  ],
  glosario: [
    {
      termino: 'Automatización de pruebas',
      significado:
        'es la práctica que permite controlar la ejecución de un producto <em>software</em> de manera automática.',
    },
    {
      termino: 'Aplicación',
      significado:
        'una aplicación es un programa informático diseñado como una herramienta para realizar operaciones o funciones específicas. Generalmente, son diseñadas para facilitar ciertas tareas complejas y hacer más sencilla la experiencia informática de las personas.',
    },
    {
      termino: 'ATDD',
      significado:
        'Desarrollo Orientado a pruebas de Aceptacion (<em>Acceptance test–driven development</em>) es una metodología de desarrollo basada en la comunicación entre los clientes comerciales, los desarrolladores y los evaluadores.',
    },
    {
      termino: 'BDD',
      significado:
        '<em>Behaviour Driven Development</em> es una estrategia de desarrollo dirigido por comportamiento, se define en un idioma común entre todos los <em>stakeholders</em>, lo que mejora la comunicación entre equipos tecnológicos y no técnicos.',
    },
    {
      termino: 'Incidencia',
      significado:
        'suceso que se produce durante una actividad y puede causar, una disminución de calidad de este.',
    },
    {
      termino: 'Integración Continua',
      significado:
        'es una práctica de desarrollo de <em>software</em> por medio de la cual los desarrolladores combinan los cambios en el código en un repositorio.',
    },
    {
      termino: 'QA',
      significado:
        'calidad de <em>software</em> (<em>Quality Software</em>) trata los conceptos, los métodos, las técnicas, los procedimientos y los estándares necesarios para producir productos y procesos <em>software</em> de alta calidad.',
    },
    {
      termino: 'TDD',
      significado:
        'desarrollo Guiado por Pruebas (<em>Test Driven Development</em>) con el TDD se puede agilizar el proceso de creación de código. Este se centra más por el qué y el por qué antes del cómo.',
    },
    {
      termino: 'UX',
      significado:
        'experiencia de usuario (<em>User Experience</em>) es el conjunto de factores y elementos relativos a la interacción del usuario con un entorno o dispositivo concretos, dando como resultado una percepción positiva o negativa de dicho servicio, producto o dispositivo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Beck, K., & Andres, C. (2004b). <em>Extreme Programming Explained: Embrace Change, 2nd Edition (The XP Series)</em> (2nd ed.). Addison-Wesley.',
      link: '',
    },
    {
      referencia:
        'Bustamante Ramírez, J. (2011). <em>Sistema de informes para pruebas de software.</em> Obtenido de',
      link: 'http://bibliotecadigital.iue.edu.co/xmlui/handle/20.500.12717/153',
    },
    {
      referencia:
        'Clemente, P. J., & Gómez, A. (2014). <em>Aplicación de un proceso de mejora continua en una asignatura de Desarrollo de Software Dirigido por Modelos.</em> Obtenido de',
      link: 'http://hdl.handle.net/2099/15497',
    },
    {
      referencia:
        'Jeffries, R. (2011). <em>What is Extreme Programming?</em> Ronjeffries.Com.',
      link: 'https://ronjeffries.com/xprog/what-is-extreme-programming/',
    },
    {
      referencia:
        'Kruchten, P. (2003). <em>The Rational Unified Process: An Introduction</em> (3rd Edition) (3rd ed.). Addison-Wesley Professional.',
      link: '',
    },
    {
      referencia:
        'Maida, EG, Pacienzia, J. (2015). <em>Metodologías de desarrollo de software</em> [en línea]. Tesis de Licenciatura en Sistemas y Computación. Facultad de Química e Ingeniería “Fray Rogelio Bacon”. Universidad Católica Argentina, 2015.',
      link:
        'https://repositorio.uca.edu.ar/bitstream/123456789/522/1/metodologias-desarrollo-software.pdf',
    },
    {
      referencia:
        '<em>Manifiesto por el Desarrollo Ágil de Software</em>. (2001). Agilemanifesto.Org.',
      link: 'https://agilemanifesto.org/iso/es/manifesto.html',
    },
    {
      referencia:
        'Martin, J. (1991). <em>Rapid Application Development</em>. Macmillan Coll Div.',
      link: '',
    },
    {
      referencia:
        'Mera Paz, J. A. (19 de 10 de 2016). <em>Pruebas de Calidad software.</em> Obtenido de ',
      link: 'https://repository.ucc.edu.co/handle/20.500.12494/962',
    },
    {
      referencia:
        'Royce, W.W. (1970) <em>Managing the Development of Large Software Systems.</em> Proceedings of IEEE WESCON, 26, 328-388.',
      link: '',
    },
    {
      referencia:
        'SCRUMstudy. (2013). <em>A Guide to the Scrum Body of Knowledge (SBOK Guide)</em> (2013th ed.). VMEdu Inc. Sommerville, I., Galipienso, M. I. A., & Martinez, A. B. (2005). <em>Ingenieria del Software</em>. Pearson Educacion.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ervin Andrade',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Peter Pinchao',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suarez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
