<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span 2
      h1 Criptografía
    .row.justify-content-center.align-items-center.fondo13
      .col-xxl-5.col-xl-5.col-lg-5.col-md-8.col-sm-10.col-11.py-5(data-aos="fade-down-left")
        p.mt-5 La criptografía se encarga de cifrar o codificar mensajes para evitar que su contenido pueda ser leído por un tercero no autorizado; es decir, el cometido principal de esta disciplina es la generación de códigos y algoritmos de cifrado que buscan ofuscar la información y protegerla de “ojos curiosos”.
        p.mt-5 También es considerada una ciencia que apunta hacia la seguridad de los datos y los documentos; para ello, utiliza códigos o claves que permiten almacenar información secreta que, sin embargo, pueda circular por medios públicos o privados y que solo la conocerán el emisor y el receptor, siempre y cuando sepan cómo traducir la información para entenderla o cómo cifrarla para que otros no la comprendan. (Medina, 2017)
      .col-xxl-5.col-xl-5.col-lg-5.col-md-5.col-sm-6.col-8.py-5(data-aos="fade-down-right")
        img(src='@/assets/curso/tema2/figura1.svg')
    p.text-center.my-5(data-aos="fade-down-right") Para comprender su evolución, es necesario ver todo lo que ha sucedido desde sus orígenes:    
    .row.justify-content-center(data-aos="fade-down-right")
      .col-xxl-8.col-md-8.col-sm-10.col-11
        LineaTiempoD
          .row(numero="1" titulo="Su nacimiento")
            .col-md-3
              figure
                img.ajustarimagen.mb-2(src='@/assets/curso/tema2/imagen1.jpg')
            .col-md-9.mb-4.mb-md-0
              p Nace desde hace más de 4000 años y es una palabra de origen griego, <i>“krypto”</i>, que significa oculto, y <i>“graphos”</i>, que  traducido significa escritura oculta, con una amplia misión de romper las codificaciones realizadas por terceros con el fin develar sus mensajes.

          .row(numero="2" titulo="Primeras apariciones")
            .col-md-3
              figure
                img.ajustarimagen.mb-2(src='@/assets/curso/tema2/imagen2.jpg')
            .col-md-9.mb-4.mb-md-0
              p Apareció inicialmente a través de jeroglíficos en Egipto. En la biblia, se utilizó un sistema de sustitución de letras llamado “atbash”. Los espartanos enrollaban un pergamino sobre una escítala que servía para ordenar las letras y decodificar el mensaje, con la particularidad de que el lector debía tener una escítala del mismo diámetro o tamaño para poder descifrar el mensaje, apareciendo la criptografía simétrica.

          .row(numero="3" titulo="Se difunde su uso")
            .col-md-3
              figure
                img.ajustarimagen.mb-3(src='@/assets/curso/tema2/imagen3.jpg')
            .col-md-9.mb-4.mb-md-0
              p En Roma, Julio César utilizó el cifrado de César, que consistía en el desplazamiento de la letra de cada palabra por una que se encontraba en posición fija en el abecedario, la cual debía ser reemplazada para comprender el mensaje. 
              p El mundo árabe conoció la criptografía en la Edad Media, llamada análisis de frecuencia, donde se analizaba el mensaje a través de la correlación, buscando patrones repetitivos, a través de lo cual se dió robustez a esta técnica.

          .row(numero="4" titulo="El primer tratado y su potencial para uso bélico")
            .col-md-3
              figure
                img.ajustarimagen.mb-3(src='@/assets/curso/tema2/imagen4.jpg')
            .col-md-9.mb-4.mb-md-0
              p En el Renacimiento, aparece Polygraphia, gracias a Johannes Trithemius, siendo publicado este tratado que incluye esteganografía y codificación. 
              p En la Segunda Guerra Mundial, un objetivo táctico era descifrar los mensajes enemigos, y es para esta época que aparece Antoine Rossignol, convirtiéndose en el criptógrafo más importante de Francia, y su generación de hijo y nieto, quienes trabajaron en el primer centro de criptografía de Francia, llamado Cabinet Noir. 

          .row(numero="5" titulo="Su modernización")
            .col-md-3
              figure
                img.ajustarimagen.mb-3(src='@/assets/curso/tema2/imagen5.jpg')
            .col-md-9.mb-4.mb-md-0
              p La explosión de la computación y su desarrollo, tras la Segunda Guerra Mundial, convirtió a los computadores en un instrumento clave dentro del cifrado y descifrado de mensajes; por tanto, por seguridad, la mayoría de países consideraron la criptografía como algo secreto y vinculado a tareas de inteligencia y espionaje. 

          .row(numero="6" titulo="Salvaguardar la información")
            .col-md-3
              figure
                img.ajustarimagen.mb-3(src='@/assets/curso/tema2/imagen6.jpg')
            .col-md-9.mb-4.mb-md-0
              p Desde mediados de los años 50 hasta mediados de los 70, la NSA acaparó y bloqueó cualquier tipo de publicación o estudio sobre criptografía en Estados Unidos; y para acercarse a los acontecimientos actuales, llega la tecnología y el cúmulo de información que genera cada ser humano desde que nace, por lo que se incurre en una gran gama de códigos o criptogramas para organizar la información, cifrarla o identificarla y almacenar la información para que terceros no la usen de manera malintencionada o, simplemente, se garantice la salvaguarda de la información. (Velasco, 2014)

      .col-xxl-2.col-md-2.col-sm-3.col-3
        img.mt-4(src='@/assets/curso/tema2/figura2.svg')

    .row.justify-content-center(data-aos="fade-down-right")
      .col-xxl-10
        p.my-5 Ya luego de conocer la historia desde su nacimiento, es bueno hacer unas aclaraciones sobre dos conceptos parecidos, pero que no significan lo mismo: la criptografía y el criptoanálisis.

    .row.mb-5.justify-content-center(data-aos="fade-down-left")
      .col-xxl-4.col-xl-4.col-lg-4.col-sm-6.col-10.col-md-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/icono1.svg')
          .tarjeta.color-acento-botones
            .p-4
              h2.text-center.text-dark Criptografía
              p.text-center.text-dark Se encarga de estudiar las técnicas del cifrado de la información.

      .col-xxl-4.col-xl-4.col-lg-4.col-sm-6.col-10.col-md-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/icono2.svg')
          .tarjeta.color-acento-botones
            .p-4
              h2.text-center.text-dark Criptoanálisis
              p.text-center.text-dark Se dedica a todo lo contrario, es decir, a descifrar o decodificar esa información.
    p.my-5(data-aos="fade-down-right") A continuación, se muestra lo que sucede cuando se envía un mensaje, este se cifra, y continúa su viaje como un criptograma, o sea que hace referencia al mensaje cifrado, es decir, que no es entendible por quien no conoce la clave para descifrarlo. 
    p.mb-5(data-aos="fade-down-right") En ese trayecto, el mensaje cifrado, o criptograma, puede sufrir dos eventos, el uno, que llegue al receptor y lo descifre, o que el mensaje sea interceptado y los intrusos lo desencripten y puedan leer el mensaje.
    .row.justify-content-center
      .col-xxl-8.fondo14
        .row.justify-content-center(data-aos="fade-down-right")
          .col-xxl-6.col-md-8.mb-5
            .titulo-sexto.mb-5.color-acento-contenido(data-aos="fade-left")
              p.text-small Figura 1
                span Ciclo del mensaje secreto
            img(src='@/assets/curso/tema2/figura3.svg')
    .titulo-segundo.mt-5.color-acento-contenido(data-aos="flip-up")
      h4 Tipos de criptografía y su uso

    p(data-aos="fade-down-right") Los tipos de criptografía se clasifican en 
      span.text-bold clásica
      span , dividida en transposición y sustitución, y 
      span.text-bold moderna
      span : asimétrica y simétrica, y esta última se divide en bloques y flujo. En el siguiente gráfico, se pueden identificar con mayor claridad.
    .row.fondo15.py-5
      .col-xxl-12  
        .titulo-sexto.mb-5.color-acento-contenido(data-aos="fade-left")
          p.text-small Figura 2 
            span Clasificación de la criptografía
        img(data-aos="fade-down-right")(src='@/assets/curso/tema2/figura4.svg')
    p.my-5(data-aos="fade-down-right") Para entender mejor la criptografía, es importante conocer algunos términos comunes:

    .row.mb-5(data-aos="fade-down-left")
      .col-xxl-3.col-xl-3.col-lg-4.col-md-6.col-xl.mb-4.mb-xl-0.mb-4
        .tarjeta-numerada.color-secundario.p-5.altoCuadro2
          .tarjeta-numerada__numero
            .h2 1
          p
            b Criptografía 
          p Arte de cifrar y descifrar información, usando técnicas que permitan intercambiar mensajes de forma segura, pudiendo solo ser leídos por los destinatarios elegidos, sin importar si el mensaje es a través de un medio inseguro o público.
      .col-xxl-3.col-xl-3.col-lg-4.col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.py-5.ps-5.pe-3.mb-4.altoCuadro2
          .tarjeta-numerada__numero
            .h2 2
          p 
            b Cifrado
          p Es el proceso mediante el cual la información es transformada a través de un algoritmo que cifra la misma, por lo cual se necesitaría de una clave que permita descifrar el algoritmo.
      .col-xxl-3.col-xl-3.col-lg-4.col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.mb-4.altoCuadro2
            .tarjeta-numerada__numero
              .h2 3
            p
              b Algoritmo o criptografía simétrica
            p Permite la encriptación y desencriptación de información mediante una llave o clave, siendo seguro y de fácil transmisión.
      .col-xxl-3.col-xl-3.col-lg-4.col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.py-5.ps-5.pe-3.mb-4.altoCuadro2
            .tarjeta-numerada__numero
              .h2 4
            p
              b Algoritmo o criptografía asimétrica
            p Permite la encriptación y desencriptación de información a través de diferentes llaves o claves. La información se encriptará con una clave pública y se desencriptará con una privada. Para hacerlas seguras, pueden tener muchos bits, lo que puede hacer los procesos lentos.
      .col-xxl-3.col-xl-3.col-lg-4.col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.py-5.ps-5.pe-3.mb-4.altoCuadro2
            .tarjeta-numerada__numero
              .h2 5
            p
              b Criptosistema
            p Es el procedimiento mediante un algoritmo con clave, transforma un mensaje en información comprensible, a menos que ya los receptores tengan la clave para desencriptar.
      .col-xxl-3.col-xl-3.col-lg-4.col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.mb-4.altoCuadro2
            .tarjeta-numerada__numero
              .h2 6
            p
              b Esteganografía
            p Procedimiento que permite esconder información para que pase inadvertida; puede estar a simple vista y aún así no poder percatarse de que existe un mensaje.
      .col-xxl-3.col-xl-3.col-lg-4.col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.py-5.ps-5.pe-3.mb-4.altoCuadro2
            .tarjeta-numerada__numero
              .h2 7
            p
              b Criptoanálisis
            p Es la oposición a la encriptación, es el estudio de métodos para poder descifrar o encontrar el sentido de información antes cifrada.
      .col-xxl-3.col-xl-3.col-lg-4.col-md-6.col-xl.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.mb-4.altoCuadro2
            .tarjeta-numerada__numero
              .h2 8
            p
              b Métodos criptográficos
            p Son los métodos para la encriptación de información.

    .row.justify-content-center.align-items-center(data-aos="fade-down-right")
      .col-xxl-6.col-xl-6.col-lg-6.col-md-10.col-sm-10.col-12
        p Dentro de los usos cotidianos que se le dan a la criptografía, se pueden encontrar los siguientes:
        .row
          .col-xxl-6.col-xl-6.col-sm.mb-5.mb-sm-0.mb-5.col-10.mt-3
            ul.lista-ul--color
              li 
                i.fas.fa-cube
                span Para firmas digitales.
              li
                i.fas.fa-cube
                span Para certificados digitales.
              li 
                i.fas.fa-cube
                span Para sistemas de autenticación.
              li 
                i.fas.fa-cube
                span Para el correo electrónico seguro.
        p.mb-5.mt-3 Como ya ha visto, el cifrado y el descifrado son procesos que transforman la información por medio de un algoritmo de cifrado, y para poder descifrarla, se requiere de la clave secreta del algoritmo.        
      .col-xxl-4.col-xl-4.col-lg-4.col-md-6.col-sm-8.col-8
        img(src='@/assets/curso/tema2/figura5.svg')

    p.my-5(data-aos="fade-down-right") Vea a continuación el siguiente video sobre los mecanismos de seguridad en la criptografía:
    figure.mb-5(data-aos="fade-down-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    separador


</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
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
