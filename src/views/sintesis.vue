<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.my-5 En el siguiente gráfico, podrá observar una síntesis de los fundamentos del <i>Blockchain</i> y su aplicación en el ámbito financiero:

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-up-right")
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="alt")
      .col-auto(data-aos="fade")
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Sintesis',
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
