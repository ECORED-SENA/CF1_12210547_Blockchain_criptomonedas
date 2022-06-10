<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span 
          i.fas.fa-info
      h1 Introducción
    p.my-5(data-aos="fade-up-right") La transformación digital ha irrumpido en cada rincón del planeta y se hizo más notoria, dando continuidad a los nuevos modos de vida que se volvieron el cotidiano de todos con la aparición de la pandemia en el año 2020. Lo invitamos a ver el siguiente video que lo introducirá a la temática a abordar:
    figure.mb-5(data-aos="fade-up-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/jmbwveqVjOM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
