<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span 5
      h1 Limitaciones y control de <i>Blockchain</i>
    p.my-5(data-aos="fade-up-right") Con el imparable crecimiento de las criptomonedas, se ha convertido en una acción primordial para las entidades gubernamentales desarrollar e implementar leyes que regulen su uso e intercambio de manera segura, evitando prácticas ilegales, como el lavado de activos o estafas a los consumidores.
    .row.justify-content-center
      .col-xxl-3.col-xl-3.col-lg-3.col-md-4.col-sm-6.col-8(data-aos="fade-up-left")
        img.me-5.mb-5(src='@/assets/curso/tema5/imagen1.jpg')
      .col-xxl-7.col-xl-7.col-lg-7.col-md-6.col-sm-10.col-11
        .cajon.color-acento-contenido.fondo11.p-4.mb-4(data-aos="fade-left")
          p En Colombia, aún no se cuenta con una ley que regule estas prácticas; sin embargo, existe un proyecto de ley que está en curso y pendiente de revisión y aprobación por parte del Congreso de la República, donde se describen todos los pormenores en materia de regulación y limitación de las plataformas que realicen el intercambio de los criptoactivos (Congreso de la República, 2019).    
    p.mb-5(data-aos="fade-up-right") Vea a continuación los avances que se tienen al momento en materia de regulación y control:
    .row.justify-content-center
      .col-xxl-10.px-0.fondo27(data-aos="fade-up-left")
        h4.text-center.text-white.mb-0.py-4.px-5.fondo26 Aunque en Colombia aún no existe una ley que regule las operaciones con criptomonedas y las empresas que se dedican a esta práctica, algunas entidades se han dado a la tarea de emitir algunos conceptos que pueden servir de regulación en el mercado colombiano:
    .row.justify-content-center
      .col-xxl-10.px-0.fondo27
        .row.justify-content-center      
          .col-xxl-10
            .tabla-b.my-5.fondo31(data-aos="fade-up-right")
              .tabla-b__header.fondo28
                h3.mb-0.text-center.text-dark Superintendencia Financiera
              table
                tr
                  td.bordetabla.alinearCelda Mediante circular 29-2014: aseguró que las monedas virtuales no estaban reguladas por la ley ni estaban sujetas a control o vigilancia por esta entidad.
                  td Mediante circular 52-2017, señala de manera más restrictiva que “no se encuentran autorizadas para custodiar, invertir, intermediar ni operar con estos instrumentos, así como tampoco permitir el uso de sus plataformas para que se realicen operaciones con monedas virtuales”, argumentando la volatilidad e incertidumbre en las operaciones de estos criptoactivos.
                tr
                  th.fondo29.bordetabla 
                    h3.text-center.mb-0 DIAN
                  th.fondo30 
                    h3.text-center.mb-0 Superintendencia de Sociedades
                tr
                  td.bordetabla Mediante Concepto 20436 del 2017, señala que las actividades asociadas a los criptoactivos están gravadas a través de la renta.
                  td.alinearCelda Mediante oficio 100-237890 del 2020, indicó que los criptoactivos pueden ser aceptados como aportes en especie a una sociedad.
                tr
                  th.fondo29.bordetabla 
                    h3.text-center.mb-0 Consejo Técnico de Contaduría Pública
                  th.fondo30 
                    h3.text-center.mb-0 Banco de la República
                tr
                  td.bordetabla Publica el Concepto 977 de 2017, donde afirma que “los criptoactivos pueden ser asimilados a commodities de inventario o a un activo financiero”.
                  td Mediante Concepto 20348 del 2016, indicó que “los criptoactivos no deben ser considerados como divisas, dado que no cuentan con el respaldo de un Banco Central”.

    p.my-5(data-aos="fade-up-right") El <i>Blockchain</i>, o cadena de bloques, cumple con los criterios de transparencia y confiabilidad, por lo tanto, contiene todo el historial de las transacciones realizadas. Esta tecnología limita el riesgo de fraude, optimiza tareas, aumenta la velocidad de las transacciones, descentraliza las tareas, entre otras; toca esperar avances en legislación y normatividad, pero por lo pronto es una tecnología que llegó para quedarse.
    p.mb-5(data-aos="fade-up-left") Por último, y como ya se ha visto, además de las criptomonedas y los casos presentados, la tecnología <i>Blockchain</i> es usada con infinidad de aplicaciones y campos de acción; a continuación, se presentan otras aplicaciones actuales que le podrán servir de guía para su aplicación en el campo laboral:
    .row.justify-content-center
      .col-xxl-10.col-xl-10.col-lg-10.col-md-10.col-sm-11.col-12
        AcordionA.mb-5(data-aos="fade")(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Almacenamiento en la nube")
            .col-md-3.col-10.col-sm-8
              figure
                img.ms-5.mb-3(src='@/assets/curso/tema5/imagen2.png')
            .col-md-9.mb-4.mb-md-0
              p.ms-5 La tecnología <i>Blockchain</i>, como aplicación de almacenamiento en la nube, genera seguridad y descentralización, debido a que se puede guardar la información en nodos distintos de almacenamiento; por lo tanto, se convierte en un sistema robusto ante la caída de cualquier servidor por algún ataque cibernético.
          .row(titulo="Gestión de identidad")
            .col-md-3.col-10.col-sm-8
              figure
                img.ms-5.mb-3(src='@/assets/curso/tema5/imagen3.png')
            .col-md-9.mb-4.mb-md-0
              p.mb-4.ms-5 La seguridad para la identidad con el <i>Blockchain</i> abarca dos espacios:
              ul.lista-ul--color.ms-5
                li 
                  i.fas.fa-cube
                  span El primero, identidad digital con firmas electrónicas, reconocimiento facial, automatización, etc. 
                li
                  i.fas.fa-cube
                  span El segundo es la validación de datos, pin, y contraseñas (identidad soberana).
          .row(titulo="Registro de datos")
            .col-md-12.mb-4.mb-md-0.ps-5
              p.p-3.fondo33.ms-4 El <i>Blockchain</i> se puede utilizar para almacenar cualquier tipo de información, lo que genera un libro de registros distribuidos, aumentando la seguridad, diferencia importante con las bases de datos actuales, que son gestionadas por un tercero. 
              p.mb-4.ms-4 Algunos ejemplos de estas aplicaciones, tanto en el sector público como privado: clínicas y hospitales, para las historias clínicas de los pacientes y el registro de afiliados; finca raíz, para los registros de los propietarios, verificación del estado del terreno o del inmueble en registros públicos; protección de los derechos de autor, para cifrar y proteger los contenidos digitales que se generan y evitar la piratería; registros notariales, como nacimientos, matrimonios, divorcios, defunciones, entre otros, podrán ser un certificado legal a nivel internacional en tan solo unos años, inclusive, se podría pensar en crear un registro de antecedentes penales a nivel mundial con el uso del <i>Blockchain</i>.
          .row(titulo="Ejecución de contratos")
            .col-xxl-9.ps-4
              p.ms-5 Con el <i>Blockchain</i>, se han creado los <i>Smart Contracts</i>, capaces de ejecutarse y renovarse de forma automática, sin la necesidad de que alguno de los interesados intervenga.
              p.text-center.text-bold.my-4 <i>Smart Contratcs</i>
            .col-xxl-10.col-md-11.col-sm-11.col-10.ps-5
              figure
                img.ms-5(src='@/assets/curso/tema5/figura1.svg')
          .row(titulo="Cadena de suministros")
            .col-md-3.col-10.col-sm-8
              figure
                img.ms-5.mb-3(src='@/assets/curso/tema5/imagen4.png')
            .col-md-9.mb-4.mb-md-0
              p.ms-5 En el campo de la logística, el uso de <i>Blockchain</i> ha mejorado los niveles de confianza de los suministros, debido a que integra toda la hoja de ruta del producto a suministrar y la guía exacta del estado del paquete enviado.
          .row(titulo="Sistema de votación")
            .col-md-3.col-10.col-sm-8
              figure
                img.ms-5.mb-3(src='@/assets/curso/tema5/imagen5.png')
            .col-md-9.mb-4.mb-md-0
              p.ms-5 Con el sistema de voto electrónico que existe en la actualidad, al fusionarse con <i>Blockchain</i>, aportará más seguridad y manipulación de los resultados casi nula, debido a la encriptación de la cadena.
          .row(titulo="Internet de las cosas (IoT)")
            .col-md-3.col-10.col-sm-8
              figure
                img.ms-5.mb-3(src='@/assets/curso/tema5/imagen6.png')
            .col-md-9.mb-4.mb-md-0
              p.ms-5 El <i>Blockchain</i> permite el intercambio de datos entre diferentes dispositivos conectados, aumentando la seguridad de las transacciones, lo que permite ampliar el rango de comunicación de los actuales, que manejan un modelo centralizado de la información.
              
</template>
<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema5',
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
