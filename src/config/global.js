export default {
  global: {
    componenteFormativo:
      'Fundamentos, aplicación y análisis del Blockchain en el ámbito financiero',
    descripcionCurso:
      'La tecnología <i>Blockchain</i> surge como respuesta a la necesidad de digitalizar las transacciones comerciales. Ya se vienen realizando transacciones soportadas en <i>Blockchain</i>, gracias a que esta responde a criterios de operatividad que garantizan la trazabilidad, la seguridad, la centralización y el anonimato; sumado a que, con la criptografía apropiada y la redistribución de datos, la información queda consignada en los diferentes bloques.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/fondo-banner-interno.jpg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '<i>Blockchain</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características',
            hash: 'caracteristica',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Arquitectura',
            hash: 'arquitectura',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Casos de éxito',
            hash: 'casos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Elementos que configuran el <i>Blockchain</i>',
            hash: 'elementos',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Criptografía',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Criptomonedas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Trading',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Limitaciones y control de <i>Blockchain</i>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia: 'BBVA. (2020). ¿Qué es la criptografía avanzada?',
      link: 'https://www.bbva.com/es/que-es-la-criptografia-avanzada/',
    },
    {
      referencia:
        'Bit2me Academy. (s. f.). Diferencias entre <i>Bitcoin</i> y <i>Ethereum</i>.',
      link: 'https://academy.bit2me.com/diferencias-entre-bitcoin-y-ethereum/',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2018). Proyecto de ley: “Por el cual se regula el uso de las monedas virtuales o criptomonedas y las formas de transacción con éstas en el territorio de Colombia y se dictan otras disposiciones”.',
      link: 'https://academy.bit2me.com/diferencias-entre-bitcoin-y-ethereum/',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2019). Proyecto de Ley 268 de 2019. Por la cual se regulan los Servicios de Intercambio de Criptoactivos ofrecidos a través de las Plataformas de Intercambio de Criptoactivos. Mayo 8 de 2019.',
    },
    {
      referencia:
        'Delgado, I. (2014). <i>Bitcoin</i>: la moneda virtual descentralizada. OpenMind BBVA.',
      link:
        'https://www.bbvaopenmind.com/economia/finanzas/bitcoin-la-moneda-virtual-descentralizada/',
    },
    {
      referencia:
        'Dwyer, G. (2014). <i>The Economics of Bitcoin and Similar Private Digital Currencies</i>. SSRN. ',
      link: 'https://ssrn.com/abstract=2434628',
    },
    {
      referencia:
        'Eckard, J. (2019). Almacenamiento para <i>Blockchain</i> y procesamiento moderno de bases de datos distribuidas. IBM Systems Blog para Latinoamérica. ',
      link:
        'https://www.ibm.com/blogs/systems/mx-es/2019/02/almacenamiento-para-blockchain-y-procesamiento-moderno-de-bases-de-datos-distribuidas/',
    },
    {
      referencia:
        'Espinosa, S. (2020). Guía de Referencia de <i>Blockchain</i> para la Adopción e Implementación de Proyectos en el Estado Colombiano. Ministerio de Tecnologías de la Información y las Comunicaciones [MinTIC]. ',
      link: 'https://gobiernodigital.mintic.gov.co/692/articles-161810_pdf.pdf',
    },
    {
      referencia:
        'Gupta, V. (2017). <i>The Promise of Blockchain Is a World Without Middlemen. Harvard Business Review.</i>',
      link:
        'https://hbr.org/2017/03/the-promise-of-blockchain-is-a-world-without-middlemen',
    },
    {
      referencia: 'IBM. (s. f.). ¿Qué es la tecnología de <i>Blockchain</i>?',
      link: 'https://www.ibm.com/co-es/topics/what-is-blockchain',
    },
    {
      referencia:
        'Medina, L. (2017) Criptografía y mecanismos de seguridad. Fundación Universitaria del Área Andina. ',
      link:
        'https://digitk.areandina.edu.co/bitstream/handle/areandina/1423/Criptograf%C3%ADa%20y%20mecanismos%20de%20seguridad.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Plus500 (s. f.-a). ¿Cuál es la diferencia entre <i>Ethereum</i> y <i>Bitcoin</i>? ',
      link:
        'https://www.plus500.com/es-ES/Instruments/ETHUSD/What-is-the-difference-between-Ethereum-and-Bitcoin~2',
    },
    {
      referencia:
        'Plus500 (s. f.-b). <i>Halving</i> de <i>Bitcoin</i> 2020: Todo lo que necesita saber.',
      link:
        'https://www.plus500.com/es-ES/Instruments/BTCUSD/Bitcoin-Halving-2020:-All-you-need-to-know~4#:~:text=Un%20Halving%20de%20Bitcoin%20ocurre,lugar%20durante%20mayo%20de%202020',
    },
    {
      referencia:
        'Plus500 (s. f.-c). ¿Qué es el <i>Trading</i> de Criptomonedas?',
      link:
        'https://www.plus500.com/es-ES/Trading/CryptoCurrencies/What-Is-Cryptocurrency-Trading~3',
    },
    {
      referencia:
        'Superintendencia de Sociedades. (2020). Oficio 100-237890 del 14 de diciembre de 2020. Asunto: Criptoactivos – su utilización en actos de comercio - aporte en especie al capital de una sociedad.',
      link:
        'https://www.supersociedades.gov.co/nuestra_entidad/normatividad/normatividad_conceptos_juridicos/OFICIO_100-237890_DE_2020.pdf',
    },
    {
      referencia:
        'Velasco, J. (2014). Breve historia de la criptografía. ElDiario.es.',
      link:
        'https://www.eldiario.es/turing/criptografia/breve-historia-criptografia_1_4878763.html',
    },
    {
      referencia:
        'Wild, J., Arnold, M. y Stafford, P. (2015) <i>Technology: Banks seek the key to blockchain. Financial Times</i>. ',
      link:
        'https://www.ft.com/content/eb1f8256-7b4b-11e5-a1fe-567b37f80b64?segid=0100320#axzz3qK4rcvqp.',
    },
  ],
  glosario: [
    {
      termino: '<i>Bitcoin</i>',
      significado:
        'Criptomoneda basada en la tecnología <i>Blockchain</i>. Se administra únicamente a través de carteras digitales, que pueden ser una aplicación móvil o de escritorio (Plus500, s. f.-a).',
    },
    {
      termino: '<em>Blockchain</em>',
      significado:
        'En español, cadena de bloques, es una tecnología que permite transacciones digitales mediante registros descentralizados, sin ningún tipo de intermediarios (Gupta, 2017).',
    },
    {
      termino: 'Criptografía',
      significado:
        'Es la disciplina encargada de mantener los datos seguros y que el intercambio de información sea perfectamente confiable. Se basa en el desarrollo de algoritmos cada vez más complejos, por lo tanto, la privacidad es completa (BBVA, 2020).',
    },
    {
      termino: 'Criptomonedas',
      significado:
        'Aplicación del <em>Blockchain</em>. Activo digital cuyas transacciones se realizan entre usuarios anónimos mediante una clave pública. Todo usuario maneja una clave privada (única por usuario) y una clave pública, que es la que se comparte con los demás usuarios de la red (Dwyer, 2014).',
    },
    {
      termino: 'Descentralización',
      significado:
        'Realizar transacciones directas, sin ningún tipo de intermediario, disminuyendo costos y aumentando la velocidad (Delgado, 2014).',
    },
    {
      termino: '<i>Hash</i>',
      significado:
        'Código alfanumérico que se obtiene al aplicar una función matemática a un conjunto de datos concatenados. Contiene toda la información relevante que se quiere encriptar.',
    },
    {
      termino: '<i>Nonce</i>>',
      significado:
        'Código alfanumérico aleatorio que identifica un bloque e introduce seguridad.',
    },
    {
      termino: '<i>Trading</i>',
      significado:
        'Tomar posición financiera de venta o de compra al precio de una criptomoneda frente al dólar (Plus500, s. f.-c).',
    },
  ],
  complementario: [
    {
      texto:
        'Espinosa, S. (2020). Guía de Referencia de <i>Blockchain</i> para la Adopción e Implementación de Proyectos en el Estado Colombiano. Ministerio de Tecnologías de la Información y las Comunicaciones [MinTIC].',
      tipo: 'Página web',
      link: 'https://gobiernodigital.mintic.gov.co/692/articles-161810_pdf.pdf',
    },
    {
      texto:
        'Rojo, M. (2019). <i>Blockchain</i>. Fundamentos De La Cadena De Bloques. Ediciones De La U.',
      tipo: 'Página web',
      link:
        'https://login.bdigital.sena.edu.co/login?url=http://www.ebooks7-24.com/?il=9093 ',
    },
    {
      texto:
        'Böhme, R., Christin, N., Edelman, B. y Moore, T. (2015). <i>Bitcoin: Economics, Technology, and Governance. The Journal of Economic Perspectives</i>, 29(2), p. 213-238.',
      tipo: 'Artículo científico',
      link:
        'https://login.bdigital.sena.edu.co/login?url=https://gateway.proquest.com/openurl?issn=0895-3309&spage=213&url_ver=Z39.88-2004&date=2015-04-01&genre=article&issue=2&res_dat=xri%3Apqm&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Aarticle&volume=29&rfr_id=info%3Axri%2Fsid%3Aprimo&jtitle=The%2BJournal%2Bof%2BEconomic%2BPerspectives&req_dat=xri%3Apqil%3Aclntid%3D31491',
    },
    {
      texto:
        '<i>CEU IAM Business School</i>. (2019). <i>Blockchain</i> y su aplicación en el ámbito financiero. [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=lkO168P39Z0&ab_channel=CEUIAMBusinessSchool ',
    },
    {
      texto:
        'Congreso de la República de Colombia. (2018). Proyecto de ley: “Por el cual se regula el uso de las monedas virtuales o criptomonedas y las formas de transacción con éstas en el territorio de Colombia y se dictan otras disposiciones”.',
      tipo: 'Proyecto de ley',
      link:
        'http://leyes.senado.gov.co/proyectos/images/documentos/Textos%20Radicados/proyectos%20de%20ley/2018%20-%202019/PL%20028-18%20Criptomonedas.pdf',
    },
    {
      texto:
        'Gomila, J. (2021) ¿Qué tan complicado es el problema matemático que se resuelve al minar un bloque en <i>Blockchain</i>? [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=FkHFG-8oNm4&list=RDCMUCMUxXNYrVCv6-bQakhomvBg&index=3',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jorge Enrique Haylock Calderín',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
