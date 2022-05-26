<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span 4
      h1 Trading
    p.my-5(data-aos="fade-left") El trading en criptoactivos es la acción de tomar posición financiera de venta o de compra al precio de una criptomoneda frente al dólar (Criptomoneda-dólar) o frente a otra criptomoneda (Criptomoneda-Criptomoneda) (Plus500, s. f.-c).
    .row.justify-content-center(data-aos="fade-right")
      .col-xxl-5.col-xl-5.col-lg-5.col-md-7.col-sm-9.col-11
        p Las criptomonedas se pueden negociar por el método de intercambio digital (comprando-vendiendo en un mercado de intercambio de criptomonedas) o mediante derivados financieros (Contratos por Diferencia CFD), en los que existe menor desembolso de capital y permiten especular en el precio del activo digital.
        p Existen diversas casas de intercambio en la red facilitando carteras virtuales con las que se puede comprar y vender criptomonedas. El riesgo es que estas carteras pueden ser hackeadas y perder todo el dinero invertido. <i>Coinbase</i> y <i>Kraken</i> son carteras digitales que permiten comprar <i>Bitcoin</i>, <i>Ethereum</i>, <i>BitcoinCash</i> o <i>Litecoin</i>. 
        p Por otra parte, si se quiere invertir en criptomonedas alternativas con una valoración menor en el mercado (<i>Altcoins</i>), se deben utilizar <i>Bitcoins</i> o <i>Ethereums</i> y enviarlos a otras plataformas de <i>trading</i> de criptoactivos, como <i>Binance</i> o <i>Kucoin</i>, donde se pueden hacer intercambios con <i>Altcoins</i>.
      .col-xxl-7.col-xl-7.col-lg-7.col-md-5.col-sm-8.col-10
        img(src='@/assets/curso/tema4/imagen1.jpg')
    .row.justify-content-center.mt-5.mb-5(data-aos="fade-left")
      .col-xxl-4.col-xl-4.col-lg-4.col-md-6.col-sm-6.col-8
        h3.mb-0.text-center.py-4.fondo17.text-white Aplicaciones
    .row.aling-items-start.fondo24
      .col-xxl-6.ms-0.ps-0(data-aos="fade-right")
        img(src='@/assets/curso/tema4/imagen2.png')
      .col-xxl-5(data-aos="fade-left")
        p.mt-4 En los últimos tiempos, desde que se creó el <i>Bitcoin</i>, el <i>trading</i> de criptomonedas ha empezado a tomar cada vez más fuerza. 
        p Estas operaciones se pueden realizar a través de plataformas especializadas, y como el sistema es completamente descentralizado, no existe un banco central que regule su circulación, por lo tanto, en muchos países no son consideradas como una moneda legal.
        p Los contratos por diferencias CFD permiten especular sobre los precios de las criptomonedas, sin tener que ser el dueño de las criptodivisas; se pueden hacer operaciones de compra o negociar en largo (sube el precio) o vender y negociar en corto (baja el precio).
      p.text-white.text-center.mb-0.p-3.fondo23.px-5 Estos productos se mueven a través del apalancamiento, lo que supone inversión en grupo para tomar posición en el mercado solo con disponer de una mínima parte de la oferta total. Con este mecanismo, se pueden maximizar las ganancias, pero también las pérdidas.
    .row.justify-content-center.mb-5.fondo25.ampliarfondo.py-5
      .col-xxl-7.col-xl-7.col-lg-7.col-md-9.col-sm-10.col-11(data-aos="fade-left")
        p.ms-4 Otra forma de <i>trading</i> son los spreads, que hacen referencia a la diferencia entre el precio de compra y venta de las criptodivisas; al igual que en los mercados financieros tradicionales, se abre con una posición en el mercado: posición larga, cuando se opera con el precio de compra, y posición corta, cuando se opera con el precio de venta.
        p.ms-4 El mercado de las criptomonedas está sujeto a las acciones de oferta y demanda; cada criptomoneda tiene su propio valor y aceptación en el mercado, esto se debe principalmente a sus mejoras en diversas áreas, por ejemplo: avances o innovación en su fase de desarrollo, acuerdos en la aceptación de estas como medios de pago en diferentes empresas, amplio rango de acción en intercambio con otras monedas, entre otras. Todo ello permite que el interés por unas criptomonedas o <i>tokens</i> sea más interesante que por otras, por lo tanto, aumentaría la demanda y a su vez el precio.
        .row.justify-content-center.my-5(data-aos="fade-left")
          .col-xxl-12.col-xl-12.ms-5
            .cajon.color-acento-contenido.fondo11.p-4.mb-4
              p El <i>trading</i> a corto plazo (<i>spread</i> corto) se da cuando se compra a un valor y, a las pocas horas, se vende a un valor más alto; mientras que el <i>trading</i> a largo plazo (<i>spread</i> largo) está basado en comprar criptomonedas y, después de analizar ciertas variables, se puede predecir que su precio subirá en semanas, meses o años.
      .col-xxl-5.col-xl-5.col-lg-5.col-md-6.col-sm-8.col-8(data-aos="fade-right")
        img.me-5.mb-5(src='@/assets/curso/tema4/imagen3.png')
    separador

</template>
<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema4',
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
