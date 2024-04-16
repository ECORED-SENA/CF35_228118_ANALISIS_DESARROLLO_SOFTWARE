<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4 En este componente formativo, denominado "Aplicación de pruebas de #[em software]", se estudiarán los diferentes elementos necesarios para la realización de pruebas. Por lo tanto, se abordarán las siguientes áreas de aprendizaje: tipos de pruebas funcionales y no funcionales, pruebas ágiles (#[em Agile Testing]) y la elaboración de informes de resultados.
    .row.align-items-center.mb-4
      .col-lg-8
        p.mb-4 Es importante resaltar que, en el desarrollo de aplicaciones web, uno de los principales desafíos es asegurar que la calidad del producto sea óptima y libre de errores. En este contexto, las pruebas de #[em software] constituyen un componente fundamental del proceso de aseguramiento de la calidad y la adopción de buenas prácticas.
        .fondo-personalizado-1.p-3.borde-12
          .row.align-items-center
            .col-lg-2
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/38.png",style="max-width: 85px;")
            .col-lg-10
              p.mb-0.text-white Las pruebas de #[em software] engloban el conjunto de actividades realizadas para identificar posibles fallos de funcionamiento, configuración o usabilidad en programas o aplicaciones, mediante la evaluación de su comportamiento. La complejidad e interoperabilidad de los sistemas informáticos, programas y aplicaciones han aumentado significativamente, lo que a su vez ha incrementado las posibilidades de defectos.
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/1.png",style="max-width: 400px;")
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
