<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.tarjeta--blanca.h-100.d-flex.align-items-center(data-aos="fade-up-left")
          figure
            img.tamano(src="@/assets/curso/iconosAct/completar-espacios.svg", alt="Arrastrar y pegar")
      .col-12.col-md-8.col-lg-9(data-aos="fade-up-left")
        .titulo-segundo
          h2 El <i>Blockchain</i> y la criptografía
        p.mb-4(data-aos="fade-up-right") Facilitar al aprendiz la identificación de conceptos claves de los fundamentos generales de <i>Blockchain</i> y criptografía.
        .tarjeta.tarjeta--azul.p-3(data-aos="fade-up-right")
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Completar espacios.
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad01/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    .row.mb-5.justify-content-center.align-items-center
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.tarjeta--blanca.h-100.d-flex.align-items-center(data-aos="fade-up-left")
          figure
            img.tamano(src="@/assets/curso/iconosAct/seleccion-multiple.svg", alt="Seleccion multiple")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo(data-aos="fade-up-left")
          h2 ¿Qué tanto conoces ahora de <i>Blockchain</i>?
        p.mb-4 Emparejar conceptos relacionados con <i>Blockchain</i> para su apropiación y aplicación en su vida laboral.
        .tarjeta.tarjeta--azul.p-3(data-aos="fade-up-right")
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Selección múltiple.
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad02/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

</template>
<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Actividad',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass"></style>
