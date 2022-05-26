<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span 3
      h1 Criptomonedas
    .row.justify-content-center(data-aos="fade-right")
      .col-xxl-9.ponerencima
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/imagen1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las criptomonedas son una de las muchas aplicaciones del <i>Blockchain</i>, se caracterizan por ser un activo digital cuyas transacciones se realizan entre usuarios anónimos mediante una clave pública.
            p.mb-0 Todo usuario maneja una clave privada (única por usuario) y una clave pública, que es la que se comparte con los demás usuarios de la red (Dwyer, 2014).
    .row.fondo16.pt-5
      .col-xxl-12.pt-5
        p.my-5.text-center.pt-5(data-aos="fade-right") Existen varios tipos de criptomonedas, entre las que se destacan el <i>Bitcoin</i> y el <i>Ethereum</i>.
        .row.justify-content-center
          .col-xxl-8.col-xl-8.col-lg-8.col-md-10.col-sm-10.col-10(data-aos="fade-left")
            img(src='@/assets/curso/tema3/imagen2.png')
        .row.justify-content-center(data-aos="fade-right")
          .col-xxl-10.col-lg-10.col-md-10.col-10
            p.my-5 De acuerdo con el Committee on Payments and Market Infrastructures, las criptomonedas no son iguales, estas se asemejan porque son digitales y no requieren intermediación para su transacción, pero existen muchos tipos de criptomonedas, tal como se pueden clasificar de acuerdo con la flor del dinero. Existen diferencias marcadas de una criptomoneda a otra, por ejemplo: el tipo de emisor, mecanismo de transferencia, accesibilidad, forma, etc.
    .titulo-sexto.mb-5.color-acento-contenido(data-aos="fade-left")
      p.text-small Figura 3
        span Flor del dinero: Taxonomía
    .row.justify-content-center(data-aos="fade-right")
      .col-xxl-8.col-xl-8.col-lg-8.col-md-10.col-sm-10.col-11
        img(src='@/assets/curso/tema3/figura1.svg')
    .row.justify-content-center(data-aos="fade-left")
      .col-xxl-8.col-xl-8.col-lg-8.col-md-10.col-sm-10.col-11
        h3.mb-0.text-center.py-4.fondo17.text-white La tecnología Blockchain se basa en tres elementos esenciales, que son: 

    .row.my-5.fondo18
      .col-xxl-12.alinear(data-aos="fade-right")
        img.ajustarcubo(src='@/assets/curso/tema3/cubito.svg')
        .titulo-segundo.ms-4.subrayadotec
          h4.mb-0 Tecnología de libro mayor distribuido, registros inalterables y contratos  inteligentes 
      .col-xxl-7(data-aos="fade-left")
        p.mt-5.ms-5 Estos elementos se basan en el principio de transparencia, debido a que todos los participantes de la red tienen acceso al libro de transacciones, nadie puede alterarlas o cambiarlas, y toda esta información se almacena en la cadena de bloques y se ejecuta automáticamente, mejorando la velocidad en las transacciones (IBM, s. f.).
        p.ms-5 Las criptomonedas están basadas en la tecnología <i>Blockchain</i>; actualmente, existen varios tipos de criptomonedas, sin embargo, las más conocidas son el <i>Bitcoin</i> y el <i>Ethereum</i>. Estas se administran únicamente a través de carteras digitales que pueden ser una aplicación móvil o de escritorio.
        p.ms-5 La gran diferencia entre <i>Bitcoin</i> y <i>Ethereum</i> es la forma en que se realiza el minado. En <i>Ethereum</i>, un minero puede cobrar por confirmar la transacción, además de no existir un límite para la emisión de <i>Ethereum</i>, como sí existe en <i>Bitcoin</i> (21 millones) (Plus500, s. f.-a).
      .col-xxl-5.pe-5(data-aos="fade-right")
        img.me-5(src='@/assets/curso/tema3/cubos.svg')

      .titulo-sexto.my-5.color-acento-contenido(data-aos="fade-left")
        p.text-small Tabla 3 
          span Comparativa entre <i>Bitcoin</i> y <i>Ethereum</i>

      .tabla-b.color-acento-contenido.mb-5(data-aos="fade-right")
        table
          caption Nota. Adaptada de <i>Bit2me Academy</i> (s. f.).
          tr.fondoencabezado
            td.text-bold.text-dark.columna1.justify-content-center Características
            td.text-bold.text-dark.columna2.alinear.justify-content-center
              img.ajustarcripto(src='@/assets/curso/tema3/bit.svg')
              span.mt-3.text-bold.ms-3 <i>Bitcoin</i>
            td.text-bold.text-dark.columna3
              img.ajustarimg.centrar(src='@/assets/curso/tema3/eth.svg')
          tr
            td.bordetabla.columna1 Creador
            td.bordetabla.columna2 Satoshi Nakamoto
            td.columna3 Vitalik Buterin 
          tr
            td.bordetabla Financiación
            td.bordetabla Sin financiación
            td ICO en 2014, 18 millones de $ recaudados.
          tr
            td.bordetabla Nivel de descentralización
            td.bordetabla Alto
            td Medio (muchas decisiones dependen de un pequeño grupo de personas)
          tr
            td.bordetabla Precio moneda
            td.bordetabla Alto, su precio se consolida por una política deflacionaria, aceptación y confianza.
            td Medio, su precio fluctúa debido a la emisión inflacionaria y la presión al alza del <i>Bitcoin</i>.
          tr
            td.bordetabla  Emisión total de monedas
            td.bordetabla  Limitada (aprox. 21 millones de monedas).
            td Ilimitada (la emisión total no está limitada, la emisión anual de momento se mantiene en 18 millones, ETH 2.0 la llevará a 2 millones anuales).
          tr
            td.bordetabla  Minería
            td.bordetabla  Algoritmo de Prueba de Trabajo (PoW) con SHA-256
            td Actualmente, algoritmo PoW con <i>Ethash (Keccak)</i>; con ETH 2.0, el algoritmo cambiará a <i>Proof of Stake</i> (PoS).
          tr
            td.bordetabla  Escalabilidad
            td.bordetabla  Actualmente, 6-8 transacciones por segundo. Con LN y otros canales de pago, las transacciones son casi instantáneas.
            td Entre 16-20 transacciones por segundo. Con el cambio a ETH 2.0, se podrá llegar teóricamente hasta las 100.000 transacciones por segundo.
          tr
            td.bordetabla  <i>Smart Contracts</i>
            td.bordetabla  Limitado. De momento no hay soporte <i>Turing</i> Completo.
            td Avanzado. Soporte para <i>Turing</i> Completo y un lenguaje de programación flexible para facilitar la codificación.

    .row
      .col-xxl-12.alinear(data-aos="fade-right")
        img.ajustarcubo(src='@/assets/curso/tema3/cubito.svg')
        .titulo-segundo.ms-4.subrayadotoken
          h2.mb-0 Token
    .row.justify-content-center
      .col-xxl-7(data-aos="fade-right")
        p Los <i>tokens</i> son la parte esencial de las transacciones digitales, están fundamentados en <i>Blockchain</i> y criptografía, y su función depende del valor que la entidad emisora establezca; sus usos son variados, desde poder ingresar a un juego en línea, hasta el pago por contratar algún trabajo específico.
        p Unos de los <i>tokens</i> más representativos son los NFT o <i>tokens</i> no fungibles, los cuales son productos digitales únicos, que no se consumen una vez se usan y no es posible sustituirlos por otros <i>tokens</i>. Estos también utilizan la tecnología <i>Blockchain</i>, pero la diferencia entre los <i>tokens</i> y las criptomonedas radica en su sustitución; una criptomoneda puede ser sustituida por otra equivalente, los <i>tokens</i> no pueden ser sustituidos, por lo que reciben la denominación de “no fungibles”. 
        p La principal diferencia entre un <i>token</i> y una criptomoneda es que las criptomonedas utilizan su propia cadena de bloques, mientras que los <i>tokens</i> utilizan la cadena de bloques de otra criptomoneda para operar.
      .col-xxl-5(data-aos="fade-right")
        img(src='@/assets/curso/tema3/figura2.svg')
    .row.my-5(data-aos="fade-left")
      .col-xxl-12.alinear
        img.ajustarcubo(src='@/assets/curso/tema3/cubito.svg')
        .titulo-segundo.ms-4.subrayadominado
          h2.mb-0 Minado de bloques
    p.mb-5(data-aos="fade-right") Es un proceso que permite crear nuevos <i>Bitcoins</i> cada vez que alguien los envía o recibe. En este caso, los mineros procesan bloques de transacciones, lo cual es realizado por un sistema de hardware especializado (computadores de alta capacidad de procesamiento), mediante resolución de problemas complejos matemáticos.

    .row.justify-content-center.align-items-center.ampliarfondo.fondo19
      .col-xxl-7.col-xl-7.col-lg-7.col-md-10.col-sm-10.col-11(data-aos="fade-right")
        p.text-white.ms-5.mt-5 Un bloque de transacciones o cadena de bloques se va creando cada vez que los mineros descifran el algoritmo matemático y envían su respuesta; esa información se almacena en un bloque para el receptor y la información que este receptor genera también quedará en el récord de la transacción, y así sucesivamente, hasta dar por finalizada la operación, la cual quedará con toda la información generada en cada una de las transacciones realizadas. 
        p.text-white.ms-5.mb-5 Los mineros deben validar que la solución del algoritmo matemático sea correcta, para evitar duplicaciones y lograr una red más segura; por lo tanto, cada nodo de minería Bitcoin rechazará todo aquello que no se ajuste a las normas de los sistemas a minar. 
      .col-xxl-5.col-xl-5.col-lg-5.col-md-7.col-sm-8.col-9(data-aos="fade-left")
        img.my-5(src='@/assets/curso/tema3/figura3.svg')

    TabsC.color-acento-contenido.my-5(data-aos="fade-right")
      .py-3.py-md-4.fondo21(titulo="El <i>hash</i>")
        .row.justify-content-center
          .col-xxl-12.col-xl-12.col-lg-12.col-12.col-md-12.mb-4.mb-md-0.my-5.mx-4
            p Es un código alfanumérico que se obtiene al aplicar una función matemática (función hash) a un conjunto de datos concatenados. Este hash contiene toda la información relevante que se quiere encriptar; por lo general, contiene el número de bloque, las transacciones y la firma digital de la persona que valida la transacción.
            p Sin embargo, aunque esto permite en cada bloque tener un hash único y diferente, se deben introducir otras dos piezas fundamentales para aumentar la seguridad de la cadena: 
        
          .col-xxl-5.col-xl-5.col-lg-5.col-5.col-md-5.mx-4.mb-5.fondo20
            img(src='@/assets/curso/tema3/figura4.svg')
            p.text-center.text-bold.mt-4 Hash previo
            p.text-center En la concatenación, al integrar el hash de cada bloque, se debe introducir el hash del bloque previo; de esta forma, se va generando una pila o un libro con toda la información; de este modo, si alguien llegase a alterar la información de un bloque, todos los hashes posteriores, incluyendo el <i>hash</i> modificado, pasarán a ser inválidos (se propaga el error a todos los bloques siguientes de la cadena).
          .col-xxl-5.col-xl-5.col-lg-5.col-5.col-md-5.mx-4.mb-5.fondo20
            img(src='@/assets/curso/tema3/figura5.svg')
            p.text-center.text-bold.mt-4 Nonce
            p.text-center Código alfanumérico aleatorio. Un hash no solo identifica un bloque, sino que además debe introducir seguridad; por lo tanto, si solo se concatena el bloque, la transacción, la firma y el <i>hash</i> del nuevo bloque, la desencriptación por medio de la función matemática siempre sería la misma; de esta forma, se debe introducir un código aleatorio, que sería el Nonce.
      .py-3.py-md-4.fondo21(titulo="Capacidad de rechazar transacciones y bloques inválidos")
        .row.justify-content-center.align-items-center
          .col-xxl-8.col-xl-8.col-lg-8.col-11.col-md-10.mb-4.mb-md-0.my-5
            p Cuando a cada nodo le llega una transacción, automáticamente se verifica que las operaciones involucradas sean correctas, es decir, coherentes y consistentes.
            p Para que las transacciones sean aceptadas, deben tener hashes válidos; si por algún motivo dentro de la red existe un usuario que lograse introducir un bloque malicioso, al siguiente usuario que le toca proponer un código y este no resultase malicioso, entonces la nueva versión obviará el bloque malicioso introducido.
          .col-xxl-3.col-xl-3.col-lg-3.col-6.col-md-4.col-sm-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/figura6.svg')        
      .py-3.py-md-4.fondo21(titulo="Protocolos de consenso, descentralización y teoría de juegos")
        .row
          .col-md-5.mb-4.mb-md-0
            p.ms-3 Los protocolos de consenso permiten distribuir los registros entre los diferentes usuarios de la red, asegurando que la información recibida y compartida es cierta. Además, cada usuario de la red, para operar, requiere de un sistema computacional denominado PoW (Prueba de trabajo) y una PoS (prueba de participación). Esta última será evaluada por toda la red, es decir, se puntúa cómo ha sido el desempeño del usuario en la red; en caso de actuar en forma inadecuada, podría ser expulsado, y muy posiblemente sería difícil incorporarse a otra red de minado de bloques.
            p.ms-3 Sin embargo, las recompensas a los mineros de bloques se ven limitadas por un proceso denominado <i>halving</i>, que consiste en reducir, aproximadamente cada 4 años, la creación de <i>Bitcoins</i> a la mitad. Esta operación se detendrá cuando la suma total de los <i>Bitcoins</i> generados llegue a los 21 millones. Lograda esta cifra, los mineros serán recompensados por las numerosas y pequeñas tasas de transacciones.       
          .col-md-7
            .tabla-a.color-primario.mb-5 
              table
                caption Fuente: Plus500, 2022.
                thead.fondo17
                  tr
                    th.text-center.text-white Event
                    th.text-center.text-white Date
                    th
                      h4.text-center.text-white Block 
                      span.text-small.text-white event after 
                      span.text-small.text-white every 210,000
                    th
                      h4.text-center.text-white Mining 
                      h4.text-white reward 
                      span.text-small.text-white (BTC)
                    th
                      h4.text-center.text-white BTC 
                      h4.text-white mined 
                      span.text-small.text-white (%)
                tbody
                  tr
                    td Bitcoin is Launched
                    td 03/01/2009
                    td 0
                    td 50
                    td 50
                  tr
                    td Halving 1
                    td 28/11/2012
                    td 210,000
                    td 25
                    td 75
                  tr
                    td Halving 2
                    td 09/17/2016
                    td 420,000
                    td 12.5
                    td 87.5
                  tr
                    td.text-bold Halving 3
                    td.text-bold May 2020
                    td.text-bold 630,000
                    td.text-bold 6.25
                    td.text-bold 93.75
                  tr
                    td Halving 4
                    td 2024
                    td 840,000
                    td 3.125
                    td 96.875     
                  tr
                    td Halving 5
                    td 2028
                    td 1,050,000
                    td 1.5625
                    td 98.4375
                  tr
                    td Halving 6
                    td 2032
                    td 1,260,000
                    td 0.78125
                    td 99.21875

</template>
<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema3',
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
