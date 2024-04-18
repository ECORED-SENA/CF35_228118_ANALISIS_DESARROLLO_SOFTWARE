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
        figure.my-4.my-lg-0
          img.mx-auto(src="@/assets/curso/temas/1.png",style="max-width: 400px;")


    .position-relative
      .fondo-personalizado-11
        img.img-1(src="@/assets/curso/temas/img-1.png",style="max-width: 89px;")
        img.img-2(src="@/assets/curso/temas/img-2.svg",style="max-width: 120px;")
        img.img-3(src="@/assets/curso/temas/img-2.svg",style="max-width: 120px;")

      .position-relative
        .row.align-items-center.p-4.p-lg-0
          .col-lg-3
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/140.png",style="max-width: 303px;")
          .col-lg-9
            p.mb-0.pe-lg-5 Para aplicar pruebas de #[em software] eficazmente, se deben estudiar los diferentes elementos que las componen. Así, se profundizará en los tipos de pruebas funcionales y no funcionales, las pruebas ágiles y la elaboración de informes de resultados. Cabe destacar que, en el contexto del desarrollo de aplicaciones web, verificar la óptima calidad del producto sin errores es esencial, haciendo que las pruebas de #[em software] sean un pilar fundamental en el proceso de desarrollo.

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
