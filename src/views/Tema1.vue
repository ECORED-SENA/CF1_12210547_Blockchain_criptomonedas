<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    //- Muestras
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span 1
      h1 <i>Blockchain</i>
    p.my-5 La tecnología Blockchain es la digitalización de las transacciones comerciales soportada en un sistema entrelazado que, desde un criterio de consolidado o bloque, se inicia con un hash o valor único que lo identifica criptográficamente; por tanto, los bloques siguientes estarán identificados de la misma manera, pero vinculados, porque el bloque subsiguiente tiene una referencia al bloque anterior, lo cual garantiza que están entrelazados. Así, las operaciones comerciales que se realizan se comunican a todos los nodos de la red. De esta manera, se constituye la cadena de bloque o Blockchain, lo cual genera un ledger o libro contable público compartido también en todos los nodos de la red.
    .row.justify-content-around.fondo1.py-5
      .col-xxl-5
        img(src='@/assets/curso/tema1/figura1.svg')
      .col-xxl-4
        p Para acceder a cada bloque, es necesario contar con los mensajes o claves correspondientes, a los cuales solo accederán los autorizados, haciendo uso del anonimizado; estas operaciones son confirmadas cuando hacen parte de un bloque añadido, el cual debió ser minado o, en términos técnicos, calcular su hash, lo cual genera un nivel de dificultad por el alto consumo de recursos informáticos que debe reajustarse periódicamente, adaptándose a la capacidad de la red, siendo complejo su cálculo al momento en que la potencia de los computadores conectados aumenta, lo que impide alterar la información contenida en uno o varios bloques, porque necesariamente debe modificarse su criptografía y esto rompe el ciclo o encadenamiento de los bloques, lo que en consecuencia genera una ruptura de la cadena y repararla es prácticamente imposible debido a su cualidad de inalterabilidad de la información y la trazabilidad que vincula.
    p.my-5.text-center A continuación, lo invitamos a ver el siguiente video, con el fin de ampliar el concepto de Blockchain:
    .row.justify-content-center
      .col-xxl-6.col-lg-9.col-md-11.col-sm-12.col-12
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2
              img(src="@/assets/curso/tema1/iconollamadoaccion.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white.text-bold Conoce qué es Blockchain en menos de 3 minutos.
                .col-sm-auto
                  a.boton.color-acento-botones(href='https://www.youtube.com/watch?v=70asKwy15Ds' target="_blank")
                    span.text-dark Ver video
                    i.fas.fa-play
    p.my-5 Con lo ya visto, sería un desacierto profundizar en Blockchain sin conocer su origen; por esa razón, inicie conociendo parte de la historia de su nacimiento:
    .row.justify-content-center.align-items-start
      .col-xxl-10.col-lg-10
        LineaTiempoB.color-secundario.mb-5(:datos="datosLineaTiempoB")
    separador
    .titulo-segundo.color-acento-contenido.my-5
      h2 1.1 Características

    .row.mb-5
      .col-xxl-4.col-xl-4.col-lg-4.col-md-6.col-xl.mb-4.mb-xl-0.mb-4
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-secundario.p-5.altoCuadro
          .tarjeta-numerada__numero
            .h2 1
          p
            b Inmutable 
          p Los registros almacenados en ella no se pueden alterar, ya que toda la red tiene una copia del 100% de los registros y se pueden validar por consenso.
      .col-xxl-4.col-xl-4.col-lg-4.col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.py-5.ps-5.pe-3.mb-4.altoCuadro
          .tarjeta-numerada__numero
            .h2 2
          p 
            b Seguridad mejorada
          p Dado que todos los nodos de la red tienen una copia de los registros, no hay forma de cambiarlos y no es posible emitir una nueva versión de un registro ya existente que cumpla con los criterios de validación por la red de nodos. No se requiere una autoridad central validadora.
      .col-xxl-4.col-xl-4.col-lg-4.col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.mb-4.altoCuadro
            .tarjeta-numerada__numero
              .h2 3
            p
              b Registros distribuidos
            p Se reduce dramáticamente la necesidad de una alta capacidad de cómputo, excepto en la minería de un criptoactivo.
      .col-xxl-4.col-xl-4.col-lg-4.col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.py-5.ps-5.pe-3.mb-4.altoCuadro
            .tarjeta-numerada__numero
              .h2 4
            p
              b Eliminación de intermediarios
            p Las transacciones son entre los participantes de la red. Por ejemplo, la autenticación de un título universitario sucede entre quien lo consulta y el dueño del título, o de un usuario mediante autorización del titular. 
      .col-xxl-4.col-xl-4.col-lg-4.col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.py-5.ps-5.pe-3.mb-4.altoCuadro
            .tarjeta-numerada__numero
              .h2 5
            p
              b Transparencia y trazabilidad de la información
            p Es posible ir hasta el origen de la primera transacción realizada sobre un elemento o documento, de manera que se puede conocer con claridad el histórico de la cadena de información contenida en un bloque.
      .col-xxl-4.col-xl-4.col-lg-4.col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.mb-4.altoCuadro
            .tarjeta-numerada__numero
              .h2 6
            p
              b Anonimato
            p Se puede gozar de total anonimato, dependiendo de la necesidad puntual de la aplicación.     
    p.text-center.mb-5 Para profundizar en las características de la tecnología Blockchain, lo invitamos a ver el siguiente video:

    .row.justify-content-center
      .col-xxl-6.col-lg-9.col-md-11.col-sm-12.col-12
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2.ps-1
              img(src="@/assets/curso/tema1/iconollamadoaccion.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white.text-bold.mb-0 ¿Qué es y cómo funciona <i>Blockchain</i>?
                  p.text-white Conoce más sobre el <i>Blockchain</i> y su estructura.
                .col-sm-auto
                  a.boton.color-acento-botones(href='https://www.youtube.com/watch?v=C5NZnD12yjg' target="_blank")
                    span.text-dark Ver video
                    i.fas.fa-play
    
    separador
    .titulo-segundo.color-acento-contenido.my-5
      h2 1.1 Arquitectura
    p Las transacciones de <i>Blockchain</i> ocurren dentro de una red <i>peer-to-peer</i> de computadoras distribuidas globalmente (nodos).
    p Cada nodo conserva una copia de la cadena de bloques y contribuye al funcionamiento y la seguridad de la red sin la intermediación de un tercero. Conozca más sobre su arquitectura:

    .row
      .col-xxl-12.fondo2
        .row.justify-content-center.align-items-center
          .col-xxl-4.col-xl-4.col-lg-4.col-md-10.col-sm-10.col-12.pt-4
            h4.text-white.mt-5.mb-4 arquitectura <i>Blockchain</i>
            p.text-white.mb-4 Como tecnología de contabilidad distribuida (DLT), la cadena de bloques está diseñada intencionalmente para ser altamente resistente a modificaciones y fraudes (como el doble gasto).
            .row.justify-content-center.align-items-center
              .col-xxl-11
                p.text-white.bordeBlanco Para precisar la arquitectura de <i>Blockchain</i>, a continuación, se muestra cómo es el esquema de funcionamiento del sistema financiero buscando adaptarse a esta tecnología, pero continúa con sus participantes visibles, cómo la información solo queda registrada para las partes interesadas y cómo se hace posible realizarla gracias a la participación del intermediario financiero. 
          .col-xxl-6.col-xl-6.col-lg-6.col-md-6.col-sm-8.col-8
            img.mb-5(src="@/assets/curso/tema1/figura2.svg")
    .row
      .col-xxl-12.fondo3
        .row.justify-content-center
          .col-xxl-10.pt-5
            p.text-center.mt-5 Esto es cierto porque la cadena de bloques de <i>Bitcoin</i>, como base de datos de registros, no se puede alterar ni manipular sin una cantidad poco práctica de electricidad y poder computacional, lo que significa que la red puede hacer cumplir el concepto de documentos digitales “originales”, haciendo que cada <i>Bitcoin</i> sea una forma de moneda digital muy única y no copiable.
            h5.text-center.my-5 Flujo de una transacción <i>Blockchain</i>

        .row.justify-content-center.px-5.my-5
          .col-xxl-2.col-xl-2.col-md-4.col-sm-4.col-6
            img.mb-5(src="@/assets/curso/tema1/flujo1.svg")
            span.text-bold.text-center A 
            span.text-center quiere enviar 
            br 
            span.text-center dinero a 
            span.text-bold.text-center B.
          .col-xxl-2.col-xl-2.col-md-4.col-sm-4.col-6
            img.mb-5(src="@/assets/curso/tema1/flujo2.svg")
            p.text-center La transacción se representa en línea como un “bloque”.
          .col-xxl-2.col-xl-2.col-md-4.col-sm-4.col-6
            img.mb-5(src="@/assets/curso/tema1/flujo3.svg")
            p.text-center El bloque se transmite a todas las partes de la red.
          .col-xxl-2.col-xl-2.col-md-4.col-sm-4.col-6
            img.mb-5(src="@/assets/curso/tema1/flujo4.svg")
            p.text-center Los de la red aprueban que la transacción es válida. 
          .col-xxl-2.col-xl-2.col-md-4.col-sm-4.col-6
            img.mb-5(src="@/assets/curso/tema1/flujo5.svg")
            p.text-center.mb-5 Luego, el bloque se puede agregar a la cadena, lo que proporciona un registro indeleble y transparente de las transacciones. 
          .col-xxl-2.col-xl-2.col-md-4.col-sm-4.col-6
            img.mb-5.figurasize.ms-5(src="@/assets/curso/tema1/flujo6.svg")
            p.text-center El dinero se mueve de 
              span.text-bold A 
              span hasta 
              span.text-bold B.
          .col-xxl-9
            p.fondoblanco.text-center En la gráfica, 
              span.text-bold A 
              span quiere enviar dinero a 
              span.text-bold B
              span , el bloque se transmite a todas las partes de la red, los miembros de la red aprueban que la transacción es válida, el bloque se añade a la cadena para proporcionar un registro indeleble y transparente de las transacciones, y al final el dinero llega a 
              span.text-bold B.
    .row
      .col-xxl-12.fondo4.ampliarfondo
        p.m-5 Se puede evidenciar cómo se modifica el esquema tradicional para dar paso a la estructura por cadena de bloques, que funciona a través de claves personalizadas, las cuales permiten realizar una transacción, siendo al final verificada y aprobada verificando la firma del propietario siguiente y aportando la clave inicial, sin la cual no será posible continuar en la cadena, siendo este paso recurrente para todos los participantes hasta finalizar y cerrar.

        .row.justify-content-center
          .col-xxl-8
            img.mb-5(src="@/assets/curso/tema1/figura3.svg")
        p.m-5.text-center Tenga presentes los siguientes conceptos sobre componentes centrales de la arquitectura <i>Blockchain</i>:
        SlyderF.mb-5.mx-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.fondo5.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/nodo.png' alt='AvatarTop')
            h2.text-center Nodo
            p.text-center Usuario o computadora con acceso a la arquitectura de la cadena de bloques (cada uno tiene una copia del libro mayor de la cadena de bloques).
          .tarjeta.fondo5.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/transaccion.png' alt='AvatarTop')
            h2.text-center Transacción
            p.text-center El proceso de distribución de la información a través de toda la red de computadoras en la cadena de bloques.
          .tarjeta.fondo5.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/bloques.png' alt='AvatarTop')
            h2.text-center Bloques
            p.text-center Una estructura de datos que está ahí para mantener las transacciones y se distribuye a todas las computadoras (nodos) de la red.

          .tarjeta.fondo5.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/cadena.png' alt='AvatarTop')
            h2.text-center Cadena
            p.text-center La serie de bloques colocados en un orden específico.
            br
            br
          .tarjeta.fondo5.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/mineros.png' alt='AvatarTop')
            h2.text-center Mineros
            p.text-center Los nodos dentro de la red P2P realizan el proceso de verificación antes de realizar cambios en la estructura de la cadena de bloques.
          .tarjeta.fondo5.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/consenso.png' alt='AvatarTop')
            h2.text-center Consenso
            p.text-center Los protocolos de <i>Blockchain</i> de los que depende cada operación.
            br
            br

        p.text-center.my-5 Para ampliar la información acerca de la estructura de <i>Blockchain</i>, a continuación, se aporta el siguiente video:

    .row.justify-content-center
      .col-xxl-6.col-lg-9.col-md-11.col-sm-12.col-12
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2.ps-1
              img(src="@/assets/curso/tema1/iconollamadoaccion.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white.text-bold.mb-0  ¿Cómo es la Arquitectura del <i>Blockchain</i>.
                  p.text-white Conoce más sobre cómo está compuesto el <i>Blockchain</i>.
                .col-sm-auto
                  a.boton.color-acento-botones(href='https://www.youtube.com/watch?v=VbFuietSVhk' target="_blank")
                    span.text-dark Ver video
                    i.fas.fa-play

    h4.my-5 Tipos de <i>Blockchain</i>
    p.mb-5 De lo que se ha desarrollado hasta este momento sobre el Blockchain, hay cuatro tipos principales de redes, cada una adecuada para diferentes propósitos.
    p.mb-5 A continuación, se encuentran los diferentes tipos y las características que los diferencian:

    TabsB.color-acento-contenido.mb-5.fondo6
      .py-4.py-md-5(titulo="Público" :icono="require('@/assets/curso/tema1/icopublico.svg')")
        .row
          .col-xxl-8.col-xl-8.col-lg-8.col-md-6.mb-4.mb-md-0
            h4.ms-5 <i>Blockchain</i> público
            p.ms-5 Las cadenas públicas o abiertas se caracterizan porque cualquier interviniente puede participar y es suficiente con que resuelva los acertijos para ser aceptado y poder transar en ellas. Cualquiera puede leer un <i>Blockchain</i> público, enviarle transacciones o participar en el proceso de consenso. Se los considera “sin permiso”. 
            p.ms-5 Todas las transacciones son públicas y los usuarios pueden mantenerse anónimos en algunas aplicaciones. <i>Bitcoin</i> y <i>Ethereum</i> son ejemplos destacados de <i>Blockchain</i> públicos.
        
          .col-xxl-3.col-xl-3.col-lg-3.col-md-6
            figure
              img(src='@/assets/curso/tema1/publico.svg', alt='Blockchain público')
      .py-4.py-md-5(titulo="Privado" :icono="require('@/assets/curso/tema1/icoprivado.svg')")
        .row
          .col-xxl-8.col-xl-8.col-lg-8.col-md-6
            h4.ms-5 <i>Blockchain</i> privado
            p.ms-5 Las cadenas privadas o cerradas tienen sus particularidades y, para hacer parte de ellas, debe ser aceptado previamente. Los <i>Blockchain</i> privados son controlados por una única organización o consorcio que determina quién puede leerlos, presentar transacciones en ellos y participar en el proceso de consenso. 
            p.ms-5 Dado que están 100% centralizados, los <i>Blockchain</i> privados son además útiles como entornos de prueba.
          .col-xxl-3.col-xl-3.col-lg-3.col-md-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/privado.svg', alt='Blockchain privado') 
      .py-4.py-md-5(titulo="Híbrido" :icono="require('@/assets/curso/tema1/icohibrido.svg')")
        .row
          .col-xxl-8.col-xl-8.col-lg-8.col-md-8.mb-4.mb-md-0
            h4.ms-5 <i>Blockchain</i> híbrido
            p.ms-5 Son operados por una sola empresa, que le otorga acceso a cualquier usuario que satisfaga los criterios preestablecidos. Aunque no esté verdaderamente descentralizado, este tipo de Blockchain autorizado es atractivo para los casos de uso business-to-business (negocios dirigidos a empresas) y aplicaciones de gobierno. 
            p.ms-5 No obstante, es importante tener en cuenta que los híbridos son los que combinan redes privadas y públicas. A su vez, pueden tener operaciones en modo privado que eventualmente se registran en la red pública.
        
          .col-xxl-3.col-xl-3.col-lg-3.col-md-3
            figure
              img(src='@/assets/curso/tema1/hibrido.svg', alt='Blockchain híbrido')

      .py-4.py-md-5(titulo="Federado" :icono="require('@/assets/curso/tema1/icofederado.svg')")
        .row
          .col-xxl-8.col-xl-8.col-lg-8.col-md-8
            h4.ms-5 <i>Blockchain</i> federado
            p.ms-5 En los <i>Blockchain</i> federados, el proceso de consenso es controlado por un grupo preseleccionado, un grupo de empresas o instituciones, por ejemplo, el derecho a leer el <i>Blockchain</i> y enviarle transacciones puede ser público o restringido a los participantes. 
            p.ms-5 Los <i>Blockchain</i> de consorcio se consideran “<i>Blockchain</i> autorizados”.
          .col-xxl-3.col-xl-3.col-lg-3.col-md-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/federado.svg')
    .row.fondo7.ampliarfondo2
      .col-xxl-12
        .row.justify-content-center
          .col-xxl-5.col-xl-4.col-lg-4.col-md-5
            img.margenimg(src='@/assets/curso/tema1/cubos.svg')
          .col-xxl-6.col-xl-7.col-lg-8.col-md-9.col-sm-9.col-12.pt-5
            p.mt-5.text-white.ms-5 A su vez, según cada tipología, es posible destacar sus principales características:
            .row.mx-4
              .col-xxl-6.col-sm.mb-5.mb-sm-0.my-5.col-10
                h4.text-white.mb-5 Pública
                ul.lista-ul--color
                  li 
                    i.fas.fa-cube
                    span.text-white Empoderamiento del usuario. 
                  li
                    i.fas.fa-cube
                      span.text-white Inmutabilidad.
                  li 
                    i.fas.fa-cube
                      span.text-white Estructura verdaderamente descentralizada.
                  li 
                    i.fas.fa-cube
                    span.text-white Mayor transparencia.
                  li 
                    i.fas.fa-cube
                    span.text-white Ofrece anonimato.

              .col-xxl-6.col-xl-6.col-sm.mb-5.mb-sm-0.my-5.col-10
                h4.text-white.mb-5 Privada
                ul.lista-ul--color
                  li 
                    i.fas.fa-cube
                    span.text-white Preserva la privacidad.
                  li
                    i.fas.fa-cube
                      span.text-white Rendimiento más rápido.
                  li 
                    i.fas.fa-cube
                      span.text-white No ofrece anonimato.
                  li 
                    i.fas.fa-cube
                    span.text-white Energéticamente eficiente.
                  li 
                    i.fas.fa-cube
                    span.text-white Red menos volátil.
                  li 
                    i.fas.fa-cube
                    span.text-white Empoderamiento organizacional.

            .row.mx-4
              .col-xxl-6.col-xl-6.col-sm.mb-5.mb-sm-0.my-5.pb-4.col-10
                h4.text-white.mb-5 Federada
                ul.lista-ul--color
                  li 
                    i.fas.fa-cube
                    span.text-white Ahorra muchos costos.
                  li
                    i.fas.fa-cube
                      span.text-white Energéticamente eficiente.
                  li 
                    i.fas.fa-cube
                      span.text-white Ofrece tarifas de transacción más bajas. 
                  li 
                    i.fas.fa-cube
                    span.text-white Altamente escalable.
                  li 
                    i.fas.fa-cube
                    span.text-white Regulaciones de red.
                  li 
                    i.fas.fa-cube
                    span.text-white Rendimiento extremadamente más rápido.
                  li 
                    i.fas.fa-cube
                    span.text-white Sin acceso criminal.
                  li 
                    i.fas.fa-cube
                    span.text-white Autoridad distribuida.

              .col-xxl-6.col-xl-6.col-sm.mb-5.mb-sm-0.my-5.pb-5.col-10
                h4.text-white.mb-5 Híbrida
                ul.lista-ul--color
                  li 
                    i.fas.fa-cube
                    span.text-white Adecuado para las organizaciones.
                  li
                    i.fas.fa-cube
                      span.text-white Relativamente más rápido.
                  li 
                    i.fas.fa-cube
                      span.text-white Las tasas de transacción son bajas.
                  li 
                    i.fas.fa-cube
                    span.text-white Entorno de confianza.
                  li 
                    i.fas.fa-cube
                    span.text-white No se requiere tener un activo nativo.
                  li 
                    i.fas.fa-cube
                    span.text-white.mb-5 Descentralización variable.

    p.my-5 Por último, observe el siguiente cuadro, donde verá las diferencias entre cadenas de bloques:
    .titulo-sexto.color-acento-contenido
      p.text-small Tabla 1 
        span Diferencias entre cadenas de bloques cerrada y abierta, a partir de características comunes 
    .tabla-b.color-acento-contenido.mb-5
      table
        caption Nota. Adaptación de Noriega (2021).
        tr.fondoencabezado
          td.text-bold.text-dark.columna1 Centralización
          td.text-bold.text-dark.columna2 No propietario o administrador
          td.text-bold.text-dark.columna3 Tiene algún grado de administración o control externo
        tr
          td.bordetabla.columna1 Acceso
          td.bordetabla.columna2 Cualquiera puede unirse.
          td.columna3 Solo los participantes preadmitidos se pueden unir a la red. 
        tr
          td.bordetabla Nivel de confianza
          td.bordetabla Los miembros de la red no están sujetos a confiar en los otros.
          td Requiere un mayor grado de confianza entre los integrantes (porque la colaboración entre ellos puede alterar el registro).
        tr
          td.bordetabla Apertura
          td.bordetabla El libro es abierto y transparente, compartido entre todos los miembros de la red.
          td Son posibles diferentes grados de apertura y transparencia en el registro en el libro.
        tr
          td.bordetabla Seguridad
          td.bordetabla Se consigue a través de una amplia distribución en una red de gran escala.
          td Se distribuye entre el control de acceso en conjunto con DLT en redes de menor alcance.
        tr
          td.bordetabla  Velocidad
          td.bordetabla  El lento procesamiento de las transacciones restringe su volumen.
          td Mayor procesamiento de transacciones permite un mayor volumen de estas.
        tr
          td.bordetabla  Identidad
          td.bordetabla  Identidad del usuario oculta o protegida por seudónimos.
          td El administrador verifica la identidad de los intervinientes.
        tr
          td.bordetabla  Consenso
          td.bordetabla  Requiere PoW como consenso.
          td Es posible una variedad de mecanismos de consenso (típicamente más fáciles y de menos costos que PoW).
        tr
          td.bordetabla  Activo
          td.bordetabla  Típicamente criptomonedas, pero admiten la presentación de tokens que pueden equivaler a cualquier activo.
          td Cualquier activo
        tr
          td.bordetabla  Propiedad legal
          td.bordetabla  Preocupaciones legales por la ausencia de propiedad, porque no hay entidades legales en control del libro.
          td Mayor claridad legal sobre la propiedad porque el propietario o administrador por lo general es una entidad legal.
        tr
          td.bordetabla  Ejemplos
          td.bordetabla  <i>BitCoin, Ethereum</i>
          td <i>R3’s Corda, Hyperledger Fabric.</i>

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
    datosLineaTiempoB: [
      {
        titulo: '1990',
        texto:
          'El científico informático Stuart Haber y el físico W. Scott Stornetta aplicaron técnicas criptográficas en una cadena de bloques como una forma de proteger los documentos digitales contra la manipulación de datos.',
        icono: require('@/assets/curso/tema1/1990.svg'),
      },
      {
        titulo: '2008-2010',
        texto:
          'En este lapso de tiempo, Satoshi Nakamoto presenta el <i>Bitcoin</i>, se da lugar a la primera compra de <i>Bitcoin</i> (10.000 BTC) y se utiliza por primera vez como medio de pago.',
        icono: require('@/assets/curso/tema1/2008-2010.svg'),
      },
      {
        titulo: '2013-2015',
        texto:
          'Se presenta <i>Ethereum</i>. Ya para esta fecha, el mercado de los <i>Bitcoins</i> supera los mil millones de dólares. También se presentan los contratos inteligentes. Aunque la tecnología <i>Blockchain</i> es más antigua que <i>Bitcoin</i>, es un componente subyacente central de la mayoría de las redes de criptomonedas, que actúa como un libro mayor digital descentralizado, distribuido y público, que es responsable de mantener un registro permanente (cadena de bloques) de todas las transacciones previamente confirmadas.',
        icono: require('@/assets/curso/tema1/2013-2015.svg'),
      },
      {
        titulo: '2016-2018',
        texto:
          'En este periodo, Linux Foundation presenta <i>Hyperledger</i>, para mejorar el desarrollo de <i>Blockchain</i>.</br></br>También sucede el primer gran fallo de ciberseguridad, con un ataque a <i>Ethereum</i> que le hizo perder un tercio de su criptomoneda Nativa (<i>Ether</i>). </br></br>A partir de estos años, naciones como Japón y Suiza comienzan a aceptar las criptomonedas.',
        icono: require('@/assets/curso/tema1/2016-2018.svg'),
      },
      {
        titulo: '2019',
        texto:
          'Un gigante se suma al juego; Facebook (ahora, Meta) anuncia su criptomoneda “Libra”. </br></br>En Colombia, a través del Conpes 3975, se define la Política de Transformación Digital e Inteligencia Artificial, para aprovechar las oportunidades tecnológicas y enfrentar los retos relacionados con la Cuarta Revolución Industrial (4RI).',
        icono: require('@/assets/curso/tema1/2019.svg'),
      },
      {
        titulo: '2020',
        texto:
          'Se publica una primera versión de los lineamientos de <i>Blockchain</i> para el Estado colombiano, denominada “Guía para el uso y la implementación de tecnología de registros distribuidos (<i>DLT/Blockchain</i>) en el sector público”, documento en el que se desarrollaron bases teóricas y se evidenciaron algunos ejemplos implementados en el sector público en países como Emiratos Árabes Unidos, Estonia, China, Unión Europea, Canadá y Estados Unidos, para su adopción e implementación en proyectos con tecnología <i>Blockchain</i>.',
        icono: require('@/assets/curso/tema1/2020.svg'),
      },
      {
        titulo: 'Actualidad',
        texto:
          'La tecnología <i>Blockchain</i> continúa evolucionando, representada por un mayor número de criptomonedas, así como las empresas y gobiernos que aprovechan esta tecnología para mejorar su eficiencia y seguridad.</br></br> Aunque el futuro es incierto, es evidente que la cadena de bloques es una de las tecnologías más prometedoras de nuestro tiempo.',
        icono: require('@/assets/curso/tema1/actualidad.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
