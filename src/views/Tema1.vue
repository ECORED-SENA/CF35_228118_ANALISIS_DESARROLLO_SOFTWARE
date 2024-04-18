<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Realización de pruebas de #[em Software]

    .d-flex.flex-wrap.flex-lg-nowrap.align-items-center.fondo-color-sistema-i.p-4.mb-4
      figure.mb-4.mb-lg-0.position-relative.figura-deco-1(data-aos="fade-right")
        img.mx-auto(src="@/assets/curso/temas/2.png",style="max-width: 289px;")
      .p-4.p-lg-5.cont_1_1(data-aos="fade-left")
        p.mb-0 Para realizar las pruebas de #[em software], es necesario establecer qué tipos de pruebas serán requeridas por el producto. Esto se debe a que no es necesario utilizar todos los tipos de pruebas existentes, sino más bien aquellas que sean necesarias para cada caso específico. Por esta razón, es crucial que el QA o el líder de pruebas determine qué tipos de prueba se adaptan mejor al proyecto en evaluación. A continuación, se especifican y describen los tipos de pruebas que se pueden utilizar.
    
    .fondo-gradiente-1.posicion-1
      Separador

      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.1 Tipos de pruebas

      .row
        .col-lg-8
          p.mb-4 Las pruebas de #[em software] se pueden clasificar principalmente en dos categorías: pruebas funcionales y pruebas no funcionales. Considerando los diversos aspectos y componentes de un producto de #[em software], se requerirán distintos tipos de pruebas, como pruebas unitarias, pruebas de integración, pruebas de estrés, pruebas de rendimiento, pruebas de escalabilidad, entre otras. Cada uno de estos tipos de pruebas determina la calidad de la aplicación, desde el código fuente hasta la interacción y experiencia del usuario.
 
          .tarjeta.fondo-personalizado-1.p-3.mb-5.borde-8(data-aos="fade-down")
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/temas/3.svg").img65
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1(style="color: #00FFDF;") Pruebas y calidad de #[em software]
                    p.mb-0.text-small.text-white Les invitamos a explorar el video y  descubrir los diferentes tipos de pruebas y enriquecer su conocimiento en esta área clave del desarrollo de #[em software].
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=TLs-a1Cok-w" target="_blank")
                      span(style="color: #12263F") Abrir video
                      i.fas.fa-file-video(style="color: #12263F")

        .col-lg-4.order-first.order-lg-last(data-aos="fade")
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/119.png",style="max-width: 400px;")

      p.mb-4(data-aos="fade") Algunos de los tipos de pruebas más comunes se describen en los siguientes puntos.

      .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="zoom-in-out")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/temas/4.png")
          .col.align-self-end
            h3.mt-3.mb-0.me-2 Pruebas funcionales

      p.mb-5(data-aos="fade") Se realizan para verificar las características cruciales para el negocio, incluyendo la funcionalidad y la usabilidad del #[em software]. Estas pruebas aseguran que las funcionalidades y características del #[em software] funcionen y se comporten conforme a lo esperado, sin inconvenientes. Validan la aplicación completa de acuerdo con las especificaciones detalladas en el Documento de Requisitos del #[em Software] (SRS, por sus siglas en inglés). Dentro de este conjunto de pruebas se incluyen las pruebas unitarias, pruebas de regresión, pruebas de interfaz, entre otras.

      .row.justify-content-center.mb-5
        .col-lg-9
          .fondo-color-sistema-j.borde-20.p-4
            .row.align-items-center
              .col-md-6(data-aos="fade-right")
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/5.png",style="max-width: 474px;")
              .col-md-6(data-aos="fade-left")
                p.mb-0 IBM (2021) plantea que estas pruebas se basan en la ejecución y revisión de las funciones y en su interoperabilidad con sistemas específicos, se llevan a cabo en todos los niveles de prueba, buscan evaluar cada una de las opciones con las que cuenta el paquete informático, principalmente en el comportamiento externo del producto o aplicativo, también se las identifica como de tipo caja negra.
      
      .row.justify-content-center
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos="fade")
            p.mb-0 #[b Figura 1.] Tipos de pruebas funcionales
          .fondo-color-sistema-k.borde-20.p-4
            figure.mb-4.mb-lg-0(data-aos="zoom-in-up")
              img.mx-auto(src="@/assets/curso/temas/6.svg",style="max-width: 540px;",alt="El diagrama presenta un esquema de las Pruebas funcionales en el desarrollo de software, destacando su naturaleza cíclica e interconectada. Se detallan cinco tipos de pruebas: Prueba de interfaz de compatibilidad, Pruebas de aceptación (UAT), Pruebas de regresión, Prueba de interfaz de usuario (GUI), y Prueba de instalación. Cada una es crucial para asegurar diferentes aspectos de la funcionalidad del software, desde la compatibilidad hasta la satisfacción del usuario y la estabilidad después de actualizaciones o cambios")

    .fondo-personalizado-2.pos-1
      .fondo-personalizado-2__contenido
        .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="fade-right")
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/4.png")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Pruebas unitarias 

        .row.align-items-center.mb-5
          .col-lg-8
            p.mb-4(data-aos="fade") Estas pruebas se centran en validar elementos como componentes, unidades o piezas de forma individual e independiente dentro de un producto de #[em software], siguiendo el principio del Ciclo de Vida del Desarrollo de #[em Software] (SDLC, por sus siglas en inglés). Cualquier bloque de código, ya sea un procedimiento, función, método, constructor, clase o módulo, puede ser considerado una unidad y, por lo tanto, debe ser objeto de pruebas unitarias. Esto permite determinar su comportamiento y validar si los resultados obtenidos se alinean con los esperados. Las pruebas unitarias deben ser las primeras en realizarse durante la fase de desarrollo y deben ser implementadas por los desarrolladores.

            .p-4.borde-16.fondo-color-sistema-i
              .row.align-items-center
                .col-sm-2
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 72px;")
                .col-sm-10(data-aos="fade-down")
                  p.mb-0.fw-bold.text-white De acuerdo a Mera (2016) también se las conoce como #[em unit testing] son pequeños #[em tests] en los cuales se revisa que el comportamiento de un objeto y su lógica funcione adecuadamente.
          .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/8.png",style="max-width: 388px;")

    p.mb-4(data-aos="fade") Generalmente, se llevan a cabo durante la fase de desarrollo de las aplicaciones o #[em software]. Esta tarea es ejecutada por los programadores, aunque los aseguradores de calidad también pueden participar en su realización. Las razones para desarrollar este tipo de pruebas incluyen:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8
        .fondo-color-sistema-k.p-4.borde-20
          .row.align-items-center
            .col-lg-3.col-md-3
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/9.svg",style="max-width: 141px;")
            .col-lg-9.col-md-9
              ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
                li
                  i.fas.fa-circle
                  span Son rápidas de ejecutar, lo que permite realizarlas en gran cantidad.
                li 
                  i.fas.fa-circle
                  span Funcionan como documentación de apoyo para el proyecto.
                li 
                  i.fas.fa-circle
                  span Demuestran que la lógica del código funciona correctamente en todos los casos.
                li 
                  i.fas.fa-circle
                  span Facilitan a los programadores el entendimiento profundo del código base, permitiendo realizar cambios de manera oportuna.
                li 
                  i.fas.fa-circle
                  span Contribuyen a obtener un código de alta calidad.

    p.mb-5(data-aos="zoom-in-up") En algunos casos, las pruebas pueden realizarse de manera manual, pero es preferible utilizar herramientas que permitan ejecutar el servicio de la mejor manera posible. Existen muchas herramientas disponibles en el mercado, y estas varían en función del lenguaje de programación que se esté utilizando. A continuación, mencionaremos algunas de las más conocidas:

    .row.mb-5.seccion-tarjetas
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/11.png')

          h4.text-center XUnit.
          p Es una herramienta de pruebas unitarias para el #[em framework] .NET.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/12.png')

          h4.text-center Nunit.
          p Es una herramienta de pruebas de plataformas .NET.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-up")
        .tarjeta--boton.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/13.png')

          h4.text-center Junit.
          p Es una herramienta de pruebas de aplicaciones Java.

      .col-sm-6.col-lg-3(data-aos="fade-down")
        .tarjeta--boton.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/14.png')

          h4.text-center PhpUnit.
          p Es una herramienta de pruebas de programación PHP.

    p.mb-4(data-aos="fade-right") Para realizar las pruebas unitarias, se deben tener en cuenta los siguientes criterios:

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-8
        .fondo-color-sistema-k.p-4.borde-20
          .row.align-items-center
            .col-lg-3.col-md-3
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/15.png",style="max-width: 115px;")
            .col-lg-9.col-md-9
              ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
                li
                  span.dec-lista A.
                  span Se debe probar un sólo código a la vez.
                li 
                  span.dec-lista B.
                  span Hay que realizar pruebas frecuentemente mientras se programa.
                li 
                  span.dec-lista C.
                  span Se debe corregir los #[em bugs] identificados en las pruebas antes de continuar.
                li 
                  span.dec-lista D.
                  span Cualquier cambio que se realice también debe pasar el #[em test].
      
    .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="flip-up")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/4.png")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Pruebas de integración
    .row.align-items-center.mb-5
      .col-lg-4(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/16.png",style="max-width: 400px;")
      .col-lg-8(data-aos="fade-left")
        p.mb-4 Estas pruebas se centran en validar distintos módulos o componentes de un producto de #[em software] de tal forma que se verifique su funcionamiento como grupo funcional. Productos como aplicaciones de #[em software], sistemas de información o aplicaciones web están compuestos por diversos componentes, módulos y submódulos distribuidos en distintos niveles y capas, que colaboran y se coordinan para habilitar diferentes funcionalidades.

        .p-3.fondo-float-1.posicion-1.mb-4
          p.mb-0 #[b El objetivo de estas pruebas es asegurar que la integración entre estos componentes sea adecuada y detectar posibles problemas o errores relacionados con la sinergia y comunicación entre ellos.]
        
        .p-4.fondo-color-sistema-i.borde-16
          .row.align-items-center
            .col-md-2
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/17.png",style="max-width: 72px;")
            .col-md-10
              p.mb-0.text-white #[b Según Mera  (2016) #[em “Las pruebas de integración se encargan de probar las interfaces entre los componentes o módulos; por ejemplo, el componente validación de usuario con el sistema operativo, el sistema de archivos en integración con el hardware”]]

    p.mb-4(data-aos="fade-right") De acuerdo con lo anterior, es importante tener en cuenta los siguientes objetos típicos de prueba:

    .row.justify-content-center.mb-4(data-aos="flip-down")
      .col-lg-8
        .fondo-color-sistema-k.p-4.borde-20
          .row.align-items-center
            .col-lg-3.col-md-3
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/15.png",style="max-width: 115px;")
            .col-lg-9.col-md-9
              ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
                li
                  i.far.fa-check-square
                  span Bases de datos de subsistemas.
                li
                  i.far.fa-check-square
                  span Datos de configuración.
                li
                  i.far.fa-check-square
                  span Configuración del sistema.
                li
                  i.far.fa-check-square
                  span Infraestructura.
                li
                  i.far.fa-check-square
                  span Interfaces.

    .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="zoom-in-up")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/4.png")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Pruebas no funcionales
    
    p.mb-4(data-aos="fade-left") Estas pruebas, similares a las pruebas funcionales, se diferencian en que se realizan bajo condiciones de carga de rendimiento para evaluar aspectos como #[b la fiabilidad, usabilidad, escalabilidad, instalación, confiabilidad y seguridad del #[em software]]. Generalmente, se llevan a cabo mediante herramientas o soluciones automatizadas.

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-8
        .fondo-color-sistema-i.borde-16.p-3.ps-3
          .row.align-items-center
            .col-md-2
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/120.png",style="max-width: 74px;")
            .col-md-10
              p.mb-0.text-white #[b #[em Según Mera (2016) en este tipo de pruebas se comprueban los requisitos basados en la operación de un software. Para verificar la carga que resiste el producto software, identificando si su rendimiento es el adecuado o si es estable a nivel de contacto con el servidor.]]
    
    p.mb-5(data-aos="fade") Algunos aspectos, como el rendimiento de una aplicación, pueden ser complejos; sin embargo, esta prueba permite evaluar la calidad del #[em software] a probar. La calidad se basa principalmente en factores como el tiempo, la precisión, la estabilidad, la corrección y la durabilidad del producto bajo diversas circunstancias adversas. A partir de estos criterios de calidad, es posible explorar distintos tipos de pruebas no funcionales, tales como:

    .fondo-personalizado-3.pos-1
      .fondo-personalizado-3__contenido
        SlyderF.estilo-slyder(columnas="col-lg-6 col-xl-4",data-aos="flip-down")
          .tarjeta.fondo-color-sistema-i.p-4
            figure.mb-4
              img.mx-auto(src="@/assets/curso/temas/18.png",style="max-width: 124px;")
            p.mb-4.text-white #[b Pruebas de carga]
            p.mb-0.text-white Simulan la demanda esperada que puede tener una aplicación y mide el resultado.
          .tarjeta.fondo-color-sistema-i.p-4
            figure.mb-4
              img.mx-auto(src="@/assets/curso/temas/19.png",style="max-width: 124px;")
            p.mb-4.text-white #[b Pruebas de rendimiento]
            p.mb-0.text-white Se calcula la respuesta del programa con diferentes medidas de peticiones del usuario.
          .tarjeta.fondo-color-sistema-i.p-4
            figure.mb-4
              img.mx-auto(src="@/assets/curso/temas/20.png",style="max-width: 124px;")
            p.mb-4.text-white #[b Pruebas de estrés]
            p.mb-0.text-white Nos permite saber cuántos usuarios o peticiones puede soportar el programa, con esta prueba determinamos si el sistema es estable. 
          .tarjeta.fondo-color-sistema-i.p-4
            figure.mb-4
              img.mx-auto(src="@/assets/curso/temas/21.png",style="max-width: 124px;")
            p.mb-4.text-white #[b Pruebas de volumen]
            p.mb-0.text-white Consiste en probar el funcionamiento del programa con ciertos volúmenes de datos.
          .tarjeta.fondo-color-sistema-i.p-4
            figure.mb-4
              img.mx-auto(src="@/assets/curso/temas/22.png",style="max-width: 124px;")
            p.mb-4.text-white #[b Pruebas de usabilidad]
            p.mb-0.text-white Se centran en validar que tan fácil se utiliza el programa en cuanto a facilidad de aprendizaje, eficiencia, memorización, errores y satisfacción.
          .tarjeta.fondo-color-sistema-i.p-4
            figure.mb-4
              img.mx-auto(src="@/assets/curso/temas/121.png",style="max-width: 124px;")
            p.mb-4.text-white #[b Pruebas de robustez]
            p.mb-0.text-white Son las encargadas de verificar la capacidad del programa para soportar entradas o instrucciones incorrectas. Una de sus características principales es implementar mecanismos de #[em software] de detección de errores en el #[em hardware].

        .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="flip-up")
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/4.png")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Pruebas de rendimiento

        .row.align-items-center.mb-4
          .col-lg-8
            p.mb-4(data-aos="fade-right") Las pruebas de rendimiento son un tipo de pruebas no funcionales realizadas con el propósito de determinar la estabilidad, escalabilidad y velocidad de una funcionalidad específica en el producto de #[em software]. El objetivo de estas pruebas es evaluar el comportamiento de la aplicación considerando diferentes parámetros de referencia del sistema y de la red, como #[b la capacidad de la CPU, la velocidad de renderizado o carga de páginas, el manejo del tráfico, la concurrencia, el consumo de recursos del servidor], entre otros. Dentro de esta categoría, podemos distinguir las pruebas de carga y las pruebas de estrés.

            .p-3.fondo-color-sistema-i.borde-16(data-aos="fade-left")
              .row.align-items-center
                .col-md-2
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/24.png",style="max-width: 72px;")
                .col-md-10
                  p.mb-0.text-white #[b #[em Según IBM (2021) estas pruebas sirven para evaluar lo rápido que el programa realiza una tarea en condiciones específicas de trabajo, también evalúa la escalabilidad, fiabilidad y uso de los recursos.]]

          .col-lg-4.order-first.order-lg-last(data-aos="fade-up")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/25.png",style="max-width: 400px;")

        p.mb-4(data-aos="fade") El mismo autor expresa que los objetivos de estas pruebas son:

        .tarjeta--container.row.mb-5(data-aos="zoom-in-up")
          .col-md.tarjeta.fondo-color-sistema-i.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img.mx-auto(src='@/assets/curso/temas/26.png',style="max-width: 118px;")
            
            h3.text-center.text-white Identificar y localizar problemas de rendimiento.
            p.text-white Es permitir encontrar un fallo en el rendimiento, y también ayudar a localizar en que parte está ese problema para poder solucionarlo.
          .col-md.tarjeta.fondo-color-sistema-m.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img.mx-auto(src='@/assets/curso/temas/27.png',style="max-width: 118px;")
              
            h3.text-center Verificar el cumplimiento de los SLA (Acuerdos de Nivel de Servicio).

            p Se utiliza para medir los tiempos de respuesta del #[em software] en condiciones y tiempos específicos.
          .col-md.tarjeta.fondo-color-sistema-i.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img.mx-auto(src='@/assets/curso/temas/28.png',style="max-width: 118px;")
              
            h3.text-center.text-white Localizar cuellos de botella.

            p.text-white Ayudar a detallar en qué lugar se generan estos cuellos de botellas si se debe a problemas de #[em hardware] como CPU, memoria, o es el ancho de banda.

        .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="fade-right")
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/4.png")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Ventajas y desventajas de los tipos de pruebas.

    p.mb-4(data-aos="fade-right") Aplicar los distintos tipos de pruebas puede asegurar que el #[em software] funcione conforme a lo esperado en todo momento, garantizando así su calidad. Por lo tanto, es esencial, para su aplicación, identificar las ventajas y desventajas de cada uno, con el fin de determinar las diferencias entre ellos. Podemos observar las ventajas de estos tipos de pruebas en el siguiente recurso.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta no-border-radius fondo-color-sistema-i" data-aos="fade")
      .row.contenedor-cuerpo-acordion-a.align-items-center(titulo="Pruebas de rendimiento")
        .col-md-6.mb-4.mb-md-0
          ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
            li
              i.far.fa-check-square
              span Evalúa la velocidad y escalabilidad de la aplicación.
            li
              i.far.fa-check-square
              span Determina los cuellos de botella para las mejoras de rendimiento.
            li
              i.far.fa-check-square
              span Detecta errores que se pasan por alto en las pruebas funcionales.
            li
              i.far.fa-check-square
              span Mejoras de características y optimización del sistema.

            li
              i.far.fa-check-square
              span Garantiza la fiabilidad de la aplicación web bajo una gran carga.
      
        .col-md-6
          figure
            img.mx-auto(src="@/assets/curso/temas/29.png",style="max-width: 400px;")
      .row.contenedor-cuerpo-acordion-a.align-items-center(titulo="Pruebas funcionales")
        .col-md-6.mb-4.mb-md-0
          ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
            li
              i.far.fa-check-square
              span Se asegura de que la aplicación esté libre de defectos.
            li
              i.far.fa-check-square
              span Garantiza el comportamiento requerido de las funcionalidades.
            li
              i.far.fa-check-square
              span Verifica que la arquitectura sea la correcta con la seguridad requerida.
            li
              i.far.fa-check-square
              span Mejora las funcionalidades generales y la calidad.
        .col-md-6
          figure
            img.mx-auto(src="@/assets/curso/temas/30.png",style="max-width: 400px;")
      .row.contenedor-cuerpo-acordion-a.align-items-center(titulo="Pruebas de integración")
        .col-md-6.mb-4.mb-md-0
          ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
            li
              i.far.fa-check-square
              span Asegura de que en la aplicación todos los módulos se encuentren bien integrados y funcionen juntos según lo requerido.

            li
              i.far.fa-check-square
              span Detecta conflictos y problemas interconectados para solucionarlos antes de crear un problema más grande. 
            li
              i.far.fa-check-square
              span Verifica la fiabilidad, estabilidad y funcionalidad entre módulos diferentes.
       
        .col-md-6
          figure
            img.mx-auto(src="@/assets/curso/temas/31.png",style="max-width: 400px;")
      .row.contenedor-cuerpo-acordion-a.align-items-center(titulo="Pruebas unitarias")
        .col-md-6.mb-4.mb-md-0
          ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
            li
              i.far.fa-check-square
              span Detecta errores en las nuevas funcionalidades desarrolladas de manera temprana.

            li
              i.far.fa-check-square
              span Detecta problemas desde el inicio, esto permite reducir los costos de las pruebas.
            li
              i.far.fa-check-square
              span Con una mejor refactorización del código mejora la calidad del código.
            li
              i.far.fa-check-square
              span Permite una buena documentación y simplifica la integración.

       
        .col-md-6
          figure
            img.mx-auto(src="@/assets/curso/temas/32.png",style="max-width: 400px;")

    .fondo-personalizado-4.pos-1
      .fondo-personalizado-4__contenido
        .cont-titulo-decorativo.p-2.mt-5.mb-5(data-aos="fade-right")
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/4.png")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Desventajas de los tipos de pruebas

        .row.align-items-center.justify-content-center.mb-5(data-aos="fade-left")
          .col-md-5.col-sm-6.col-lg-3.order-last
            .fondo-color-sistema-k.borde-8.p-2
              figure
                img.mx-auto(src="@/assets/curso/temas/34.svg",style="max-width: 94px;")
          .col-lg-9.mb-4.mb-lg-0
            p.mb-0 Todos los tipos de pruebas mejoran la experiencia del usuario, las funcionalidades y garantizan la calidad del #[em software]. Esto significa que, más que desventajas, lo que encontramos son ventajas en su aplicación. Sin embargo, el tiempo y el costo asociados a la realización de pruebas de #[em software] podrían considerarse como desventajas. Llevar a cabo pruebas demanda recursos y esfuerzos, y existe el riesgo de obtener resultados inexactos. No obstante, omitir las pruebas en las aplicaciones podría acarrear problemas serios al producto.

        .cont-titulo-decorativo.p-2.mt-5.mb-5
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/4.png")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Documentos de caso de pruebas

        .row.align-items-center.justify-content-center.mb-5.pb-4
          .col-md-5.col-sm-6.col-lg-3.order-first.order-lg-last(data-aos="fade-right")
            .mb-4.mb-lg-0.fondo-color-sistema-k.borde-8.p-2
              figure
                img.mx-auto(src="@/assets/curso/temas/35.svg",style="max-width: 94px;")
          .col-lg-9(data-aos="fade-left")
            p.mb-0 Los productos derivados del proceso de desarrollo de #[em software] son conocidos como artefactos; entre ellos se incluyen el código fuente, los defectos identificados, el plan de pruebas, los casos de prueba y los scripts de prueba. El aseguramiento de la calidad del #[em software] (SQA, por sus siglas en inglés) involucra artefactos específicos que se generan en las distintas fases del proceso de SQA, los cuales se detallan a continuación:

    .row.justify-content-center.mb-4
      .col-lg-4.col-md-6.mb-4(data-aos="fade-right")
        .tarjeta-personalizada-1.tarjeta-personalizada-1--color-1.h-100
          .figura-flecha.mb-4.me-4
            h4.figura-flecha__titulo.mb-0 Planificación
            figure.figura-flecha__fig
              img.mx-auto(src="@/assets/curso/temas/36.png",style="max-width: 228px;")
          p.px-3.pb-4.text-white En esta etapa se realiza el plan de pruebas como documento que describe un enfoque sistemático para probar un sistema, así como el informe de resultados de pruebas que organiza y presenta un análisis resumido de los resultados de las pruebas para su auditoría y evaluación.
      .col-lg-4.col-md-6.mb-4(data-aos="fade-down")
        .tarjeta-personalizada-1.tarjeta-personalizada-1--color-2.h-100
          .figura-flecha.mb-4.me-4.ps-3
            h4.figura-flecha__titulo.mb-0 Construcción
            figure.figura-flecha__fig
              img.mx-auto(src="@/assets/curso/temas/36.png",style="max-width: 228px;")
          p.px-3.pb-4.text-white En esta etapa se encuentran los casos y script de prueba como conjunto de condiciones con las cuales un tester debe determinar si un sistema funciona según lo requerido.
      .col-lg-4.col-md-6.mb-4(data-aos="fade-left")
        .tarjeta-personalizada-1.tarjeta-personalizada-1--color-1.h-100
          .figura-flecha.mb-4.me-4
            h4.figura-flecha__titulo.mb-0 Ejecución
            figure.figura-flecha__fig
              img.mx-auto(src="@/assets/curso/temas/36.png",style="max-width: 228px;")
          p.px-3.pb-4.text-white En esta etapa se obtiene el resultado de la ejecución de pruebas, recopilando la información relacionada con los resultados de la ejecución de cada #[em script] de prueba.

    .row.mb-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-4 En el diseño de las pruebas de #[em software], es crucial identificar y describir los casos de prueba. Para documentar un caso de prueba, es necesario comprender que este incluye un conjunto de variables o condiciones bajo las cuales un probador determina si un sistema funciona de acuerdo con lo esperado. Asimismo, es importante destacar que la documentación de un caso de prueba se convierte en una tarea manejable si se dispone de la información necesaria para su elaboración. Al momento de probar un #[em software], la documentación de casos de prueba es de gran utilidad, ya que se transforma en una herramienta esencial en el proceso de registro, seguimiento y control.
        p.mb-0 A continuación, se nombran los elementos principales que debe tener un caso de prueba.
      .col-lg-4(data-aos="fade-left")
        .fondo-color-sistema-k.borde-8
          figure
            img.mx-auto(src="@/assets/curso/temas/39.svg",style="max-width: 183px;")

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-up")
      p.mb-0 #[b Tabla 1.] Elementos de un caso de prueba

    .fondo-personalizado-5.pos-1
      .fondo-personalizado-5__contenido
        .tabla-a.color-acento-contenido.mb-5.bg-white(data-aos="flip-up")
          table
            thead
              tr
                th Elemento 
                th Caso de prueba
            tbody
              tr
                td Identificador
                td Identificador	Puede ser alfanumérico o numérico.
              tr
                td Nombre
                td Nombre	Nombre del caso de prueba de manera concisa.
              tr
                td Descripción 
                td Objetivo del caso de prueba, también describe que probara, en ciertas ocasiones se incluye el ambiente de pruebas.
              tr
                td Número de orden Ejecución
                td Orden en la cual se ejecuta el caso de prueba, en la situación de que se tengan múltiples casos de prueba.
              tr
                td Requerimiento asociado
                td Si se plantea un caso de prueba se debe saber a qué requerimiento va asociado para mantener la trazabilidad.
              tr
                td Precondición
                td Estado en la cual se debe encontrar el sistema antes de comenzar la prueba.
              tr
                td Postcondición
                td El estado en que debe encontrarse el sistema luego de ejecutar la prueba.
              tr
                td Resultado esperado
                td Objetivo que debe ser alcanzado posterior a ejecutarse la prueba.

        p(data-aos="fade") Identificar, describir y documentar casos de prueba facilita el trabajo cuando es necesario evaluar y comparar las modificaciones a los requerimientos inicialmente definidos por el cliente a lo largo del tiempo. Este seguimiento permite verificar que los resultados obtenidos estén acordes con lo requerido o solicitado, logrando así la satisfacción del cliente. Esto convierte a los casos de prueba en un aliado principal al momento de garantizar la calidad del #[em software].

        .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="flip-up")
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/4.png")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Ejecución de las pruebas

        .row.align-items-center.mb-4.pb-4(data-aos="fade")
          .col-lg-8
            p.mb-0 La ejecución de pruebas comienza con la creación de los datos de prueba necesarios para llevar a cabo los casos de prueba establecidos. Esta ejecución puede ser tanto automatizada como manual; en ambos casos, es fundamental registrar y documentar los fallos detectados en el sistema, así como sus correcciones posteriores. En la siguiente figura se ilustra el flujo de actividades relacionadas con la ejecución de pruebas.
          .col-lg-4
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/40.png",style="max-width: 400px;")

    .titulo-sexto.color-acento-contenido(data-aos="flip-up")
      p.mb-0 #[b Figura 2.] Diagrama Actividades
    
    .fondo-color-sistema-n.borde-18.p-lg-5.p-md-4.p-3.mb-5(data-aos="fade-right")
      figure
        img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 1030px;",alt="La figura muestra un flujo de trabajo para la gestión de pruebas en el desarrollo de software, comenzando con inicio y concluyendo con fin. Se inicia con la especificación de casos de prueba que alimenta un plan de pruebas, seguido de planificar calendario de ejecución, que conduce a verificar entorno de pruebas. Luego se procede a ingresar datos de prueba, seguido de evaluar criterios de entrada, que lleva a ejecutar pruebas. Paralelamente, cualquier incidencia reportada retroalimenta el proceso de ingresar datos de prueba. Después de ejecutar las pruebas, se pueden gestionar incidencias que a su vez pueden afectar la ejecución de las pruebas. Finalmente, se genera un informe de pruebas, que completa el ciclo.")

    .fondo-personalizado-6.pos-1
      .fondo-personalizado-6__contenido
        p.mb-5(data-aos="fade-left") El diagrama de actividades mencionado anteriormente detalla el flujo que debe considerarse al momento de ejecutar las pruebas de #[em software]. Por esta razón, a continuación se describen cada una de las actividades implicadas.

        .row.justify-content-center(data-aos="fade")
          .col-lg-4.col-md-6.mb-4
            .d-flex.w-100.flex-column.h-100
              .p-1.px-5(style="min-height:53px;display:flex;justify-content: center;align-items:center;background-color: #3A1D71;border-top-left-radius: 8px;border-top-right-radius: 8px;")
                p.mb-0.text-white.text-center #[b Planificar calendario detallado de ejecución:]
              .fondo-color-sistema-k.p-3.h-100
                ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
                  li
                    i.far.fa-check-circle
                    span Definir el calendario que especifique la ejecución de los casos de prueba, teniendo en cuenta el plan y los casos de prueba.
          .col-lg-4.col-md-6.mb-4
            .d-flex.w-100.flex-column.h-100
              .p-1.px-5(style="min-height:53px;display:flex;justify-content: center;align-items:center;background-color: #6D18B9;border-top-left-radius: 8px;border-top-right-radius: 8px;")
                p.mb-0.text-white.text-center #[b Verificar entorno de pruebas:]
              .fondo-color-sistema-k.p-3.h-100
                ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
                  li
                    i.far.fa-check-circle
                    span Verificar que el ambiente de pruebas tenga un funcionamiento correcto.
          .col-lg-4.col-md-6.mb-4
            .d-flex.w-100.flex-column.h-100
              .p-1.px-5(style="min-height:53px;display:flex;justify-content: center;align-items:center;background-color: #3A1D71;border-top-left-radius: 8px;border-top-right-radius: 8px;")
                p.mb-0.text-white.text-center #[b Integrar los datos de pruebas:]
              .fondo-color-sistema-k.p-3.h-100
                ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
                  li
                    i.far.fa-check-circle
                    span Realizar una recolección de los datos de prueba a utilizar en la ejecución de pruebas.
          .col-lg-4.col-md-6.mb-4
            .d-flex.w-100.flex-column.h-100
              .p-1.px-5(style="min-height:53px;display:flex;justify-content: center;align-items:center;background-color: #6D18B9;border-top-left-radius: 8px;border-top-right-radius: 8px;")
                p.mb-0.text-white.text-center #[b Evaluar criterios de entrada:]
              .fondo-color-sistema-k.p-3.h-100
                ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
                  li
                    i.far.fa-check-circle
                    span Analizar los criterios de entrada contenidos en el plan de pruebas, de tal forma que se pueda verificar la ejecución de las pruebas.

          .col-lg-4.col-md-6.mb-4
            .d-flex.w-100.flex-column.h-100
              .p-1.px-5(style="min-height:53px;display:flex;justify-content: center;align-items:center;background-color: #3A1D71;border-top-left-radius: 8px;border-top-right-radius: 8px;")
                p.mb-0.text-white.text-center #[b Ejecutar las pruebas:]
              .fondo-color-sistema-k.p-3.h-100
                ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
                  li
                    i.far.fa-check-circle
                    span Se incluyen las siguientes actividades:
                  li
                    i.far.fa-check-circle
                    span Ejecutar casos y #[em script] de prueba.
                  li
                    i.far.fa-check-circle
                    span Analizar y registrar los resultados.

        Separador

        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.2 #[em Agile Testing]

        .row.align-items-center.mb-5
          .col-lg-5(data-aos="fade-right")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/42.png",style="max-width: 429px;")
          .col-lg-7(data-aos="fade-left")
            p.mb-5 Las metodologías ágiles proporcionan un conjunto de directrices y principios diseñados para agilizar y priorizar la entrega de productos sobre la documentación exhaustiva, simplificando los procesos e involucrando al cliente final desde las etapas iniciales del proyecto. Es importante destacar que una metodología ágil se compone de iteraciones o #[em sprints], cada uno de duración relativamente corta, generalmente de dos a cuatro semanas. Al finalizar cada iteración, se disponen de funcionalidades del #[em software] que pueden ser entregadas y utilizadas por el cliente.
            p.mb-0 Recordando las metodologías ágiles, se puede especificar que las pruebas ágiles (#[em Agile Testing]) son una práctica que se lleva a cabo en cada iteración. Existen dos tipos de planificaciones: la planificación de #[b lanzamiento/entrega], que se refiere a las entregas frecuentes al cliente, es decir, la puesta en producción de nuevas versiones del producto; y la planificación de #[b sprint/iteración], que indica que un proyecto se ejecuta en bloques temporales cortos y fijos. Sin embargo, estas planificaciones pueden coincidir en un mismo momento, es decir, puede haber una sola planificación que incluya actividades tanto de lanzamiento como de #[em sprint], tal como se muestra en la siguiente figura:

        .row.justify-content-center.mb-5(data-aos="zoom-in-up")
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 3.] Actividades #[em Sprints Reléase]
            .fondo-color-sistema-n.borde-18.p-3.p-md-4.pt-4.pb-4
              figure
                img.mx-auto.d-none.d-lg-block(src="@/assets/curso/temas/43.png",style="max-width: 820px;",alt="La figura muestra un diagrama que representa la estructura de los sprints en un marco de trabajo Agile. Cada sprint está dividido en dos semanas y sigue un flujo de trabajo consistente. Comienza con la fase de Requisitos, seguida por la fase de Diseño/Implementación, luego viene la fase de Agile Testing, y termina con la fase de Release/Entrega. El diagrama repite esta estructura para Sprint 1, Sprint 2, y así sucesivamente hasta Sprint n, indicando que es un proceso iterativo y escalable que se aplica a través de múltiples sprints.")
                img.mx-auto.d-lg-none(src="@/assets/curso/temas/44.png",style="max-width: 270px;",alt="La figura muestra un diagrama que representa la estructura de los sprints en un marco de trabajo Agile. Cada sprint está dividido en dos semanas y sigue un flujo de trabajo consistente. Comienza con la fase de Requisitos, seguida por la fase de Diseño/Implementación, luego viene la fase de Agile Testing, y termina con la fase de Release/Entrega. El diagrama repite esta estructura para Sprint 1, Sprint 2, y así sucesivamente hasta Sprint n, indicando que es un proceso iterativo y escalable que se aplica a través de múltiples sprints.")

    .row.align-items-center.mb-5
      .col-lg-7(data-aos="fade-down")
        p.mb-4 Por otro lado, es importante considerar que la metodología de desarrollo de #[em software] tradicional, conocida como cascada, emplea diferentes tipos de pruebas de #[em software] que evalúan tanto los requerimientos funcionales como los no funcionales de manera secuencial. Sin embargo, en las metodologías ágiles, y específicamente en las pruebas ágiles, también se contemplan diversos tipos de pruebas. La diferencia radica en que en las metodologías ágiles se utilizan #[em sprints] o iteraciones cortas y hay una interacción continua entre los equipos de desarrollo, diseño y pruebas.

        .fondo-color-sistema-i.borde-13.p-3
          .row.align-items-center
            .col-lg-2.col-md-2
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/45.png",style="max-width: 75px;")
            .col-lg-10.col-md-10
              p.mb-0.text-white Las pruebas ágiles se basan en principios que se alinean con el desarrollo ágil de #[em software]. Además, existen ciertos cuadrantes que se deben tener en cuenta al momento de planificarlas.

      .col-lg-5(data-aos="fade-up")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/46.png",style="max-width: 505px;")

    p.pt-5.mb-0(data-aos="fade") A continuación, se describen tanto los principios como los cuadrantes:

    .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="flip-up")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/4.png")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Principios de las pruebas ágiles (#[em Agile Testing])

    p.mb-5(data-aos="fade") El #[em Agile Testing] se fundamenta en los siguientes principios, aplicables a un desarrollo de #[em software] exitoso:

    .fondo-gradiente-1
      TabsB.color-acento-botones.mb-5(data-aos="flip-up")
        .p-3.fondo-personalizado-7(titulo="<h4>Integración continua</h4>" :icono="require('@/assets/curso/temas/136.png')")
          .row.justify-content-center.mb-5.mt-4
            .col-lg-11
              .row.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-4.fw-bold Integración continua
                  p.mb-0 Los equipos de diseño y desarrollo ejecutan pruebas continuamente, puesto que es una forma de asegurar el avance continuo del producto.
                .col-lg-6.order-last.order-lg-first
                  figure
                    img.mx-auto(src="@/assets/curso/temas/48.png",style="max-width: 400px;")
        .p-3.fondo-personalizado-7(:icono="require('@/assets/curso/temas/136.png')" titulo="<h4>Entrega continua</h4>")
          .row.justify-content-center.mb-5.mt-4
            .col-lg-11
              .row.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-4.fw-bold Entrega continua
                  p.mb-0 Se soporta en la integración continua, en este punto los desarrolladores realizan un control y la cantidad de veces que se realiza la entrega continua.
                .col-lg-6
                  figure
                    img.mx-auto(src="@/assets/curso/temas/49.png",style="max-width: 400px;")
        .p-3.fondo-personalizado-7(:icono="require('@/assets/curso/temas/136.png')" titulo="<h4>Elaborar menos documentación</h4>")
          .row.justify-content-center.mb-5.mt-4
            .col-lg-11
              .row.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-4.fw-bold Elaborar menos documentación
                  p.mb-0 Los participantes de los equipos en metodologías ágiles pueden crear listas y tomar notas para centrarse en probar el #[em software], lo que permite no enfocarse en detalles secundarios que tomarían mucho tiempo.
                .col-lg-6.order-last.order-lg-first
                  figure
                    img.mx-auto(src="@/assets/curso/temas/50.png",style="max-width: 400px;")
        .p-3.fondo-personalizado-7(:icono="require('@/assets/curso/temas/136.png')" titulo="<h4>Responder con velocidad a la retroalimentación</h4>")
          .row.justify-content-center.mb-5.mt-4
            .col-lg-11
              .row.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-4.fw-bold Responder con velocidad a la retroalimentación
                  p.mb-0 Los involucrados en el negocio del producto están estrechamente conectados con las interacciones del producto, además el tiempo de respuesta se reduce debido a la realimentación continua en cada parte de la interacción.
                .col-lg-6
                  figure
                    img.mx-auto(src="@/assets/curso/temas/51.png",style="max-width: 400px;")
        .p-3.fondo-personalizado-7(:icono="require('@/assets/curso/temas/136.png')" titulo="<h4>Proporcionar retroalimentación constante</h4>")
          .row.justify-content-center.mb-5.mt-4
            .col-lg-11
              .row.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-4.fw-bold Proporcionar retroalimentación constante
                  p.mb-0 En las pruebas ágiles la retroalimentación es continua, de modo que el diseño del producto logre los propósitos del negocio requeridos.
                .col-lg-6.order-last.order-lg-first
                  figure
                    img.mx-auto(src="@/assets/curso/temas/52.png",style="max-width: 400px;")

      .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="zoom-in-up")
        .row
          .col-auto.pe-0
            figure
              img(src="@/assets/curso/temas/4.png")
          .col.align-self-end
            h3.mt-3.mb-0.me-2 Cuadrantes de las pruebas ágiles #[em (Agile Testing)]

      .row.align-items-center.mb-5(data-aos="fade")
        .col-lg-8
          p.mb-4 Para planificar las pruebas ágiles, podemos basarnos en los cuadrantes de #[em Agile Testing], que proporcionan una biblioteca de tipos de pruebas aplicables para satisfacer los requerimientos. Estos cuatro cuadrantes ofrecen una clasificación útil para la planificación de las pruebas ágiles, asegurando que se consideren los métodos y recursos necesarios para lograr productos de #[em software] de alta calidad.
          p.mb-0 Las pruebas definidas por los cuadrantes se centran en brindar apoyo al equipo de desarrollo a lo largo del proceso de creación del producto, ya que guían el desarrollo de la funcionalidad. Posteriormente, facilitan la introducción de nuevo código y la refactorización, asegurando que no se produzcan resultados inesperados en el comportamiento del sistema. En la siguiente figura, se pueden observar los cuadrantes de las pruebas ágiles, los cuales se organizan en torno a dos ejes principales: #[b las pruebas que apoyan al equipo y las tecnologías que facilitan el proceso.]
        .col-lg-4.order-first.order-lg-last
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/53.png",style="max-width: 400px;")

      .row.justify-content-center.pb-5(data-aos="fade")
        .col-lg-8
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 4.] Cuadrantes pruebas ágiles
          figure
            img.mx-auto(src="@/assets/curso/temas/54.svg",style="max-width: 800px;",alt="La figura es un diagrama que clasifica las pruebas de #[em software] en cuatro cuadrantes basados en si son más técnicas o dirigidas al negocio y si son manuales o automatizadas. Incluye pruebas funcionales, exploratorias, unitarias y de componentes, así como pruebas de rendimiento, carga y seguridad. Además, menciona la crítica del producto y las herramientas utilizadas en las pruebas. Este diagrama ayuda a los equipos a seleccionar y organizar las pruebas durante el ciclo de desarrollo del software.")

    p.mt-5.mb-4(data-aos="fade") A continuación, se realizará una exploración de los diferentes cuadrantes expuestos:

    .slider-personalizado-1.py-5.mb-5(data-aos="flip-up")
      img.imgf-1(src="@/assets/curso/temas/55.png")
      img.imgf-2(src="@/assets/curso/temas/56.png")
      img.imgf-3(src="@/assets/curso/temas/57.png")
      .slider-personalizado-1__contenido.p-3.pe-lg-5.pt-5
        SlyderA(tipo="b")
          .row.justify-content-center
            .col-lg-10
              .row.align-items-center
                .col-lg-6
                  h4.mb-4 Pruebas de cara al negocio #[em (Business Facing)]

                  p.mb-0 Son pruebas del Q2 y Q3, pruebas funcionales y pruebas UAT, se enfoca en realizar pruebas manuales y criticando al producto con las pruebas de aceptación.

                .col-lg-6.order-first.order-lg-last
                  .fondo-color-sistema-m.borde-9.p-2.py-5.mb-4.mb-lg-0
                    figure
                      img.mx-auto(src='@/assets/curso/temas/59.svg',style="max-width: 470px;")
          .row.justify-content-center
            .col-lg-10
              .row.align-items-center
                .col-lg-6
                  h4.mb-4 Pruebas de cara a la tecnología #[em (Technology Facing)]

                  p.mb-0 Pueden ser automatizadas y utilizando herramientas, incluye el Q1 y Q4.

                .col-lg-6.order-first.order-lg-last
                  .fondo-color-sistema-m.borde-9.p-2.py-5.mb-4.mb-lg-0
                    figure
                      img.mx-auto(src='@/assets/curso/temas/60.svg',style="max-width: 470px;")
          .row.justify-content-center
            .col-lg-10
              .row.align-items-center
                .col-lg-6
                  h4.mb-4 Pruebas soportando la programación o soporte del equipo #[em (Supporting the Team)]

                  p.mb-0 Comprenden pruebas automatizadas y manuales del cuadrante Q2 y Q1 donde se realizan pruebas unitarias y de componentes y pruebas funcionales con prototipos y simuladores.

                .col-lg-6.order-first.order-lg-last
                  .fondo-color-sistema-m.borde-9.p-2.py-5.mb-4.mb-lg-0
                    figure
                      img.mx-auto(src='@/assets/curso/temas/61.svg',style="max-width: 300px;")
          .row.justify-content-center
            .col-lg-10
              .row.align-items-center
                .col-lg-6
                  h4.mb-4 Pruebas de críticas al producto #[em (Critique the Product)]

                  p.mb-0 Estas pruebas pueden tener un carácter positivo, puesto que a partir de ellas se pueden sugerir o realizar mejoras. Cuando se ejecutan estas pruebas, la idea es simular lo más que se pueda un ambiente real en el cual serán ejecutadas, así mismo estas pruebas frecuentemente son realizadas por los usuarios finales como pruebas de aceptación (UAT).

                .col-lg-6.order-first.order-lg-last
                  .fondo-color-sistema-m.borde-9.p-2.py-5.mb-4.mb-lg-0
                    figure
                      img.mx-auto(src='@/assets/curso/temas/62.svg',style="max-width: 300px;")
          .row.justify-content-center
            .col-lg-10
              .row.align-items-center
                .col-lg-6
                  h4.mb-4 El primer cuadrante (Q1)

                  ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
                    li 
                      span El primer cuadrante (Q1) contiene los siguientes tipos de pruebas:
                    li 
                      i.fas.fa-cog
                      span Pruebas unitarias.
                    li
                      i.fas.fa-cog
                      span Pruebas de componente.

                .col-lg-6.order-first.order-lg-last
                  .fondo-color-sistema-m.borde-9.p-2.py-5.mb-4.mb-lg-0
                    figure
                      img.mx-auto(src='@/assets/curso/temas/63.svg',style="max-width: 295px;")
          .row.justify-content-center
            .col-lg-10
              .row.align-items-center
                .col-lg-6
                  h4.mb-4 El segundo cuadrante (Q2)

                  ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
                    li 
                      span El segundo cuadrante (Q2) definen las funcionalidades que el cliente solicita:
                    li 
                      i.fas.fa-cog
                      span Pruebas funcionales.
                    li
                      i.fas.fa-cog
                      span Pruebas de historias.
                    li
                      i.fas.fa-cog
                      span Pruebas de Prototipos y simulaciones.

                .col-lg-6.order-first.order-lg-last
                  .fondo-color-sistema-m.borde-9.p-2.py-5.mb-4.mb-lg-0
                    figure
                      img.mx-auto(src='@/assets/curso/temas/64.svg',style="max-width: 280px;")
          .row.justify-content-center
            .col-lg-10
              .row.align-items-center
                .col-lg-6
                  h4.mb-4 El tercer cuadrante (Q3)

                  ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
                    li 
                      span El tercer cuadrante (Q3) contiene los siguientes tipos de pruebas:
                    li 
                      i.fas.fa-cog
                      span Pruebas exploratorias.
                    li
                      i.fas.fa-cog
                      span Pruebas de usabilidad.
                    li
                      i.fas.fa-cog
                      span Pruebas de escenarios.
                    li
                      i.fas.fa-cog
                      span Pruebas de aceptación de usuario.

                .col-lg-6.order-first.order-lg-last
                  .fondo-color-sistema-m.borde-9.p-2.py-5.mb-4.mb-lg-0
                    figure
                      img.mx-auto(src='@/assets/curso/temas/65.svg',style="max-width: 345px;")
          .row.justify-content-center
            .col-lg-10
              .row.align-items-center
                .col-lg-6
                  h4.mb-4 El cuarto cuadrante (Q4)

                  ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
                    li 
                      span El cuarto cuadrante (Q4) contiene pruebas técnicas. Relacionadas con los requerimientos no funcionales, por lo que validan el cumplimiento de estos, analizando la seguridad, el desempeño y la robustez.

                    li 
                      i.fas.fa-cog
                      span Pruebas de rendimiento y de estrés.
                    li
                      i.fas.fa-cog
                      span Pruebas de seguridad.
                    li
                      i.fas.fa-cog
                      span Pruebas de robustez. 

                .col-lg-6.order-first.order-lg-last
                  .fondo-color-sistema-m.borde-9.p-2.py-5.mb-4.mb-lg-0
                    figure
                      img.mx-auto(src='@/assets/curso/temas/66.svg',style="max-width: 322px;")


    .fondo-gradiente-1.posicion-1
      p.mb-5.pt-5(data-aos="fade") Ahora, se describen algunas recomendaciones para tener en cuenta al momento de trabajar con pruebas de #[em software] ágiles #[em (Agil Testing)].

      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta no-border-radius fondo-color-sistema-i" data-aos="zoom-in-up")
        .row.contenedor-cuerpo-acordion-a.align-items-center(titulo="Gestión de pruebas por <em>sprint</em>")
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
              li
                i.fas.fa-cog
                span Integrar pruebas unitarias, funcionales y de carga en la planificación desde el principio. 
              li
                i.fas.fa-cog
                span Identificar y rectificar problemas de forma temprana, antes que se conviertan en problemas complejos que puedan influir el proyecto.
        
          .col-md-6
            figure
              img.mx-auto(src="@/assets/curso/temas/67.png",style="max-width: 400px;")
        .row.contenedor-cuerpo-acordion-a.align-items-center(titulo="Integración de analistas en desarrollo")
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
              li
                i.fas.fa-cog
                span Los #[em testers] tienen el conocimiento para asegurar que se entregue un producto de calidad y que cumpla los requerimientos del cliente. 
              li
                i.fas.fa-cog
                span Al integrar a los #[em testers] al equipo de desarrollo se logra compartir el conocimiento.
        
          .col-md-6
            figure
              img.mx-auto(src="@/assets/curso/temas/68.png",style="max-width: 400px;")
        .row.contenedor-cuerpo-acordion-a.align-items-center(titulo="Revisión de pruebas unitarias por <em>testers</em>")
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
              li
                i.fas.fa-cog
                span Los desarrolladores suelen deliberar de forma distinta que los #[em testers].  
              li
                i.fas.fa-cog
                span Para mejorar las pruebas unitarias, se debe permitir que los analistas de pruebas revisen las pruebas unitarias y realicen sugerencias.
        
          .col-md-6
            figure
              img.mx-auto(src="@/assets/curso/temas/69.png",style="max-width: 400px;")
        .row.contenedor-cuerpo-acordion-a.align-items-center(titulo="Pruebas de carga diarias")
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
              li
                i.fas.fa-cog
                span Las pruebas de estrés son cada vez más críticas para el éxito, considerando que el #[em software] de hoy se diseña para implementaciones masivas que puedan escalar. 
              li
                i.fas.fa-cog
                span Deben incorporarse pruebas de estrés en todas las construcciones de #[em software] a diario.
        
          .col-md-6
            figure
              img.mx-auto(src="@/assets/curso/temas/70.png",style="max-width: 400px;")
        .row.contenedor-cuerpo-acordion-a.align-items-center(titulo="Automatización de pruebas de <em>software</em>")
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
              li
                i.fas.fa-cog
                span Hacer uso de herramientas de automatización de pruebas. De esta forma será más eficiente y eliminará inexactitudes.
              li
                i.fas.fa-cog
                span La automatización de pruebas permitirá ejecutar con mayor eficiencia las pruebas de regresión cada vez que se incorpore actualizaciones.
        
          .col-md-6
            figure
              img.mx-auto(src="@/assets/curso/temas/71.png",style="max-width: 400px;")

    .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="fade-left")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/4.png")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 #[em Test Driven Development (TDD)]
    .fondo-gradiente-1.posicion-3
      .row.align-items-center.mb-4
        .col-lg-8(data-aos="fade-left")
          p.mb-0 Es una técnica de desarrollo que permite crear pruebas antes del código de producción, es decir, antes de la implementación final. La esencia del TDD (Desarrollo Guiado por Pruebas) consiste en elaborar una prueba antes de proceder con la implementación, de tal manera que el código desarrollado permita que la prueba se ejecute satisfactoriamente. Además, esta técnica se complementa con la refactorización. Generalmente, se tienen requerimientos que se expresan en historias de usuario como criterios de aceptación o pueden ser descritos como casos de uso. Posteriormente, estos requerimientos se traducen en pruebas automatizadas que, a su vez, orientan el desarrollo del código siguiendo buenas prácticas.
        .col-lg-4.order-first.order-lg-last(data-aos="fade-right")
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/72.png",style="max-width: 400px;")

      .titulo-sexto.color-acento-contenido(data-aos="fade")
        p.mb-0 #[b Figura 5.]  Flujo del TDD

      .fondo-color-sistema-q.p-2.p-lg-4.borde-24.mb-4
        .row
          .col-lg-7.mb-4.mb-lg-0(data-aos="fade-up")
            .fondo-color-sistema-k.p-2.p-lg-4.borde-16.h-100.d-flex.align-items-center
              figure
                img.mx-auto(src="@/assets/curso/temas/73.svg",style="max-width: 650px;",alt="La figura muestra el ciclo de Desarrollo Guiado por Pruebas. Inicia con la fase RED, donde se escribe una prueba que no pasa. Sigue con la fase GREEN, en la cual se modifica el código para que la prueba pase. El último paso es REFACTOR, donde se optimiza el código eliminando redundancias. Estos pasos forman un ciclo continuo que se repite a lo largo del proceso de desarrollo para mejorar la calidad del software. El TDD está en el centro del diagrama, indicando que es el enfoque principal del ciclo.")
          .col-lg-5(data-aos="fade-down")
            .fondo-color-sistema-k.px-3.py-4.borde-16
              .tarjeta.color-secundario.p-3.mb-4
                p.h4.mb-0.text-center El Desarrollo Guiado por Pruebas (TDD, por sus siglas en inglés) se fundamenta en tres pasos esenciales:
              .tarjeta.p-3.bg-white.mb-4
                p.mb-0 #[span.fw-bold(style="color: #FF0000;") #[em Red:]] este paso se denomina así porque implica la creación de una prueba que inicialmente falla, lo cual se refleja con letras rojas en la consola al ejecutarla.
              .tarjeta.p-3.bg-white.mb-4
                p.mb-0 #[span.fw-bold(style="color: #11480B;") #[em Green:]] el objetivo de este paso es modificar el código para que la prueba anteriormente fallida ahora pase exitosamente. Se llama #[em Green]  porque, al pasar la prueba, los resultados suelen mostrarse en letras verdes en la consola.
              .tarjeta.p-3.bg-white
                p.mb-0 #[span.fw-bold(style="color: #8D00B6;") #[em Refactor:]] una vez que la prueba ha sido superada, se procede a revisar y mejorar el código para optimizarlo, limpiarlo o aplicar mejores prácticas, sin alterar su funcionalidad.

      p.mb-5(data-aos="fade-left") En la siguiente tabla podemos verificar cada uno de los pasos guiados por las pruebas TDD donde se explica cada uno de los pasos con sus ejemplos.

      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        p.mb-0 #[b Tabla 2.] Flujo del TDD

      .tabla-a.color-acento-contenido.mb-5.bg-white(data-aos="zoom-in-up")
        table
          thead
            tr
              th Paso
              th Pasos
              th Ejemplo
          tbody
            tr
              td Red
              td 1. Lo primero es que el cliente escriba una historia de usuario.       
              td Supóngase que el cliente solicita que se desarrolle una aplicación con operaciones matemáticas sencillas que sume y reste.
            tr
              td Red
              td 2. Los criterios de aceptación de esta historia se escriben con el cliente, deben estar bien detallados.     
              td Se define con el cliente que el criterio de aceptación está relacionado con: si se introduce en la aplicación dos números y se suma o resta, entonces la aplicación visualiza el resultado en pantalla.
            tr
              td Red
              td 3. Se debe seleccionar el criterio de aceptación más sencillo y se traduce en una prueba unitaria.     
              td De acuerdo a este criterio, se empieza a especificar o definir el funcionamiento del algoritmo para la suma y la resta y se luego se convierte el criterio de aceptación en una prueba específica, por ejemplo, un algoritmo que si se introduce los números 3 y 8 devuelve 11. Ejemplo de cómo sería la clase para calcular:  public void testSuma() { assertEquals(8, Operaciones.suma(3,8)); }
            tr
              td Red
              td 4. Se verifica que la prueba falla.    
              td RED	4. Se verifica que la prueba falla. Si se intenta pasar este test resultara en error, debido a que la clase Operaciones todavía no existe.
            tr
              td Green
              td 5. Se escribe el código que hace pasar la prueba.   
              td Posteriormente el siguiente paso es escribir el código de la clase, en este momento ya se sabe cómo se va a comportar. public class Operaciones { public static int suma (int a, int b) { int c = a + b; return c; } }
            tr
              td Green
              td 6. Se ejecutan todas las pruebas automatizadas.  
              td Posteriormente se ejecuta la prueba y en este momento se tiene el código funcionado con la prueba pasada.
            tr
              td Refactor
              td 7. Se ejecutan todas las pruebas automatizadas.  
              td Cuando esté todo funcionando, se pasa a refactorizar y a eliminar código duplicado.
            tr
              td Refactor
              td 8. Se refactoriza y se limpia el código.
              td Es necesario pasar todos los test después de refactorizar.

    .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="fade")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/4.png")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 #[em Acceptance Test Driven Development (ATDD)]

    p.mb-4(data-aos="fade-up") El Desarrollo Guiado por Pruebas de Aceptación (ATDD, por sus siglas en inglés) es una metodología de desarrollo que enfatiza la comunicación entre los clientes empresariales, los desarrolladores y los #[em tester]. Antes de que los desarrolladores empiecen a escribir código, ATDD incorpora las pruebas de aceptación, poniendo especial énfasis en la redacción de estas pruebas. El proceso de ATDD se desarrolla a través de los siguientes pasos:
    
    .fondo-gradiente-4
      .row.align-items-center.mb-5.justify-content-center
        .col-lg-6(data-aos="fade-right")
          .titulo-sexto.color-acento-contenido(data-aos="fade")
            p.mb-0 #[b Figura 6.] #[em ATDD]

          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/74.svg",style="max-width: 610px;",alt="El diagrama representa el flujo de trabajo de ATDD, iniciando con la historia de usuario, pasando por la especificación y automatización de pruebas de aceptación, luego implementando el código con TDD y utilizando el lenguaje de programación. Este proceso es iterativo, indicado por la frase que señala la repetición del ciclo. ATDD, ubicado en el centro, destaca su rol como eje central del proceso.")


      .fondo-personalizado-8.mb-4
        img.imgf-1(src="@/assets/curso/temas/55.png")
        img.imgf-2(src="@/assets/curso/temas/56.png")
        img.imgf-3(src="@/assets/curso/temas/123.png")
        .fondo-personalizado-8__contenido.p-4.pb-5
          PasosB.pasos-personalizado-1
            .row.mb-5(titulo="")
              .col-md-6.mb-4.mb-md-0.ps-lg-5
                h3.mb-4.d-inline-block.bg-white.p-1(style="color: #273A89;") Seleccionar la historia de usuario:
                p.mb-0.text-white En este punto, se asume que se ha realizado una priorización para determinar cuál es la próxima historia de usuario a abordar.
            
              .col-md-6
                figure
                  img.mx-auto(src="@/assets/curso/temas/122.png",style="max-width: 295px;")
            .row.mb-5(titulo="")
              .col-md-6.mb-4.mb-md-0.ps-lg-5
                h3.mb-4.d-inline-block.bg-white.p-1(style="color: #273A89;") Escribir la prueba de aceptación:
                p.mb-0.text-white En esta etapa, todos los involucrados deben participar de manera colaborativa para definir las pruebas que validen la correcta implementación de la historia.
            
              .col-md-6
                figure
                  img.mx-auto(src="@/assets/curso/temas/125.png",style="max-width: 295px;")
            .row.mb-5(titulo="")
              .col-md-6.mb-4.mb-md-0.ps-lg-5
                h3.mb-4.d-inline-block.bg-white.p-1(style="color: #273A89;") Implementar la historia de usuario - Automatizar las pruebas:
                p.mb-0.text-white Existen varias maneras de llevar a cabo este paso, pero lo crucial es que, a partir de las pruebas de aceptación definidas anteriormente, se obtengan pruebas ejecutables. Estas pruebas permitirán verificar el progreso de la implementación de la funcionalidad.
            
              .col-md-6
                figure
                  img.mx-auto(src="@/assets/curso/temas/126.png",style="max-width: 295px;")
            .row.mb-5(titulo="")
              .col-md-6.mb-4.mb-md-0.ps-lg-5
                h3.mb-4.d-inline-block.bg-white.p-1(style="color: #273A89;") Implementar el código:
                p.mb-0.text-white Aunque hay diversas formas de realizar este paso, una de ellas es mediante el uso de TDD (Desarrollo Guiado por Pruebas), que asegura que el código cumpla con los requisitos establecidos en las pruebas de aceptación.
            
              .col-md-6
                figure
                  img.mx-auto(src="@/assets/curso/temas/127.png",style="max-width: 295px;")
            .row.mb-5(titulo="")
              .col-md-6.mb-4.mb-md-0.ps-lg-5
                h3.mb-4.d-inline-block.bg-white.p-1(style="color: #273A89;") Realizar pequeños cambios/Refactorización:
                p.mb-0.text-white Este paso es fundamental tanto en ATDD como en TDD. Se trata de una práctica iterativa que concluye cuando los requerimientos del cliente han sido plenamente satisfechos, optimizando y limpiando el código sin alterar su funcionalidad.
            
              .col-md-6
                figure
                  img.mx-auto(src="@/assets/curso/temas/128.png",style="max-width: 295px;")

    
    .fondo-gradiente-1
      .row.align-items-center.mb-4
        .col-lg-4
          figure.mb-4.mb-lg-0
            img.mx-auto(src="@/assets/curso/temas/75.png",style="max-width: 400px;")
        .col-lg-8
          p.mb-4(data-aos="fade-up") De acuerdo con lo expuesto anteriormente, se inicia desde un desarrollo al cual los programadores han implementado TDD. Si este proceso se ha llevado a cabo de manera adecuada, deberían haber logrado un código limpio y refactorizado, que además ha sido validado mediante pruebas unitarias. Así, el código resultante es de alta calidad; sin embargo, surge la pregunta: #[b ¿ocurre lo mismo con la aplicación en su totalidad?]
          p.mb-0(data-aos="fade-down") ATDD no constituye simplemente una técnica de desarrollo o una buena práctica, sino que representa un enfoque más amplio. Se trata de una metodología de trabajo diseñada para el desarrollo de #[em software], la cual tiene como objetivo verificar si los procedimientos adoptados durante el desarrollo son los más adecuados para alcanzar los objetivos deseados. Mientras que TDD se enfoca únicamente en confirmar que lo desarrollado esté codificado de forma correcta y libre de errores, lo cual representa una visión limitada centrada exclusivamente en la calidad del código y no en la aplicación como un todo.

      p.mb-4(data-aos="fade") Al igual que ocurre en TDD, ATDD consta de una serie de pasos secuenciales que se presentan en la siguiente figura:

      .titulo-sexto.color-acento-contenido(data-aos="fade")
        p.mb-0 #[b Figura 7.] ATDD

      .pb-5
        .p-4.borde-24
          figure
            img.mx-auto(src="@/assets/curso/temas/76.svg",style="max-width: 1008px;",alt="La figura muestra un diagrama de flujo para ATDD, que inicia con el desglose de requisitos en historias, su priorización y aceptación colaborativa. Luego, se establecen y automatizan los criterios de aceptación en tests, continuando con la automatización de tests unitarios y de integración. El ciclo concluye con la verificación de los tests de aceptación para producir una versión entregable del producto, reflejando un proceso iterativo y colaborativo en el desarrollo de software.")

    .cont-titulo-decorativo.p-2.mt-5.mb-4
      .row
        .col-auto.pe-0
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/temas/4.png")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 #[em Behaviour Driven Development (BDD)]

    p.mb-4(data-aos="fade") El Desarrollo Dirigido por Comportamiento (BDD, por sus siglas en inglés) fue propuesto inicialmente por Dan North como una síntesis y refinamiento de prácticas en ingeniería de #[em software], destinadas a asistir a los equipos en la generación y entrega rápida de #[em software] de mayor calidad. El proceso de BDD es similar al de TDD  y sigue los siguientes pasos:

    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Figura 8.] Imagen BDD

    .fondo-gradiente-6
      .fondo-gradiente-contenido
        .row.mb-5
          .col-lg-6.mb-4.mb-lg-0
            .fondo-personalizado-9.p-4
              figure
                img.mx-auto(src="@/assets/curso/temas/77.svg",style="max-width: 525px;",alt="El diagrama describe la interacción entre BDD y TDD en el desarrollo de software, donde se comienza redactando una especificación funcional que no se cumple, seguido de la creación de un test que falla en TDD. Después, se escribe el código necesario para pasar el test y se procede a la refactorización del mismo. Este ciclo iterativo enfatiza la importancia de la definición de comportamientos y pruebas previas a la implementación efectiva del código.")
          .col-lg-6

            figure.mb-4(data-aos="fade-right")
              img.mx-auto(src="@/assets/curso/temas/78.png",style="max-width: 610px;")

            ol.lista-tipo-1.margen.lista-ol--cuadro(data-aos="fade-left")
              li
                .lista-ol--cuadro__vineta
                  span 1
                span Escribir un escenario.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                span Ejecutar el escenario que falla.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                span Escribir la prueba que corresponde a las especificaciones del escenario.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                span Escribir el código más simple para pasar la prueba y el escenario.
              li 
                .lista-ol--cuadro__vineta
                  span 5
                span Refactorizar para eliminar la duplicación.

        p.mb-5(data-aos="fade") BDD, basado en la técnica de TDD, aborda ciertas limitaciones de esta última. Un problema fundamental de TDD surge cuando el #[em software] supera correctamente una prueba pero no cumple con la funcionalidad esperada. Pasar una prueba no garantiza necesariamente que el #[em software] realice lo que el cliente anticipa.

        .row.justify-content-center.mb-5
            .col-lg-4.col-md-6.mb-4(data-aos="fade-right")
              .d-flex.w-100.flex-column.h-100
                .p-1.px-4(style="min-height:53px;display:flex;justify-content: start;align-items:center;background-color: #3A1D71;border-top-left-radius: 8px;border-top-right-radius: 8px;")
                  p.mb-0.text-white.text-left #[b Ejemplo:]
                .fondo-color-sistema-k.p-3.h-100
                  ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
                    li
                      i.far.fa-check-circle
                      span Inicialmente, se define la característica o funcionalidad que se desea implementar, basándose en una historia de usuario.
            .col-lg-4.col-md-6.mb-4(data-aos="fade-left")
              .d-flex.w-100.flex-column.h-100
                .p-1.px-4(style="min-height:53px;display:flex;justify-content: start;align-items:center;background-color: #7914D3;border-top-left-radius: 8px;border-top-right-radius: 8px;")
                  p.mb-0.text-white.text-center #[b Característica:]
                .fondo-color-sistema-k.p-3.h-100
                  ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
                    li
                      i.far.fa-check-circle
                      span Un usuario desea acceder a una plataforma web universitaria para descargar sus apuntes.

        p.mb-5 A continuación, se presentan dos escenarios derivados de la historia de usuario especificada
        
        .slider-personalizado-1.py-5.mb-5(data-aos="flip-up")
          img.imgf-1(src="@/assets/curso/temas/55.png")
          img.imgf-2(src="@/assets/curso/temas/56.png")
          img.imgf-3(src="@/assets/curso/temas/57.png")
          .slider-personalizado-1__contenido.p-3.pe-lg-5.pt-5
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-lg-6
                  .pt-lg-5
                    h4.mb-4.titulo-item-slyder El desarrollo dirigido por comportamiento (BDD)
                    p.mb-4 El objetivo de BDD es que las historias de usuario dirijan el desarrollo del proyecto #[em software]. Ademas, BDD permite comprobar que el #[em software] implementado cumple con la funcionalidad requerida.
                    ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
                      li
                        i.fas.fa-cog
                        span #[b Un ejemplo muy sencillo es el siguiente:] primero definimos la característica o funcionalidad a implementar en la historia de usuario.
                      li
                        i.fas.fa-cog
                        span #[b Característica:] un usuario quiere acceder a una plataforma web universitaria para descargar sus apuntes.
                .col-lg-5.order-first.order-lg-last
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/79.png",style="max-width: 491px;")
              .row.justify-content-center.align-items-center
                .col-lg-6
                  .pt-lg-5
                    h4.mb-4.titulo-item-slyder Primer escenario

                    ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
                      li
                        i.fas.fa-cog
                        span El usuario entra correctamente.
                      li
                        i.fas.fa-cog
                        span Tiene un email y una contraseña.
                      li
                        i.fas.fa-cog
                        span Verifica que el nombre de usuario existe.
                      li
                        i.fas.fa-cog
                        span Verifica que la contraseña es correcta.
                      li
                        i.fas.fa-cog
                        span El usuario puede acceder a su cuenta, su información y puede descargar sus apuntes.
                .col-lg-5.order-first.order-lg-last
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/80.png",style="max-width: 415px;")
              .row.justify-content-center.align-items-center
                .col-lg-6
                  .pt-lg-5
                    h4.mb-4.titulo-item-slyder Segundo escenario

                    ul.lista-ul.lista-tipo-1.fa-ul.mb-0.ms-0
                      li
                        i.fas.fa-cog
                        span El usuario no recuerda la contraseña.
                      li
                        i.fas.fa-cog
                        span Tiene un email.
                      li
                        i.fas.fa-cog
                        span Cuando el usuario hace clic en: "No recuerdo la contraseña".
                      li
                        i.fas.fa-cog
                        span Luego el usuario inserta su email.
                      li
                        i.fas.fa-cog
                        span Posteriormente el email existe.
                      li
                        i.fas.fa-cog
                        span Se envía un correo de verificación.
                      li
                        i.fas.fa-cog
                        span Y el usuario debe validar el enlace.
                      li
                        i.fas.fa-cog
                        span Y el usuario debe insertar nueva contraseña.
                      li
                        i.fas.fa-cog
                        span El usuario tiene que volver a entrar con su nueva contraseña.
                      li
                        i.fas.fa-cog
                        span Se ejecuta primer escenario.


                .col-lg-5.order-first.order-lg-last
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/81.png",style="max-width: 415px;")
              .row.justify-content-center.align-items-center
                .col-lg-6
                  .pt-lg-5
                    h4.mb-4.titulo-item-slyder #[em Frameworks] de BDD por lenguaje
                    p.mb-0 Una vez definida, BDD utiliza herramientas para convertir esta historia de usuario en código. Para ello se utilizan "contenedores" o #[em frameworks]; hay tantos contenedores como lenguajes de programación. Normalmente están disponibles para la mayoría de los lenguajes de programación. A continuación, se muestran algunos:

                .col-lg-5.order-first.order-lg-last
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/82.png",style="max-width: 415px;")

        .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="fade-left")
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/4.png")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 #[em Testing] exploratorio
        
        .row.mb-4
          .col-lg-4(data-aos="fade-right")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/83.png",style="max-width: 400px;")
          .col-lg-8(data-aos="fade-left")
            .fondo-color-sistema-m.p-4.borde-8.mb-4
              p.mb-4 Las pruebas exploratorias han captado significativamente la atención dentro de la comunidad de pruebas de #[em software]. Este método de pruebas se caracteriza por una interacción simultánea entre el testeo, el aprendizaje y el diseño de nuevas pruebas.
            p.mb-0 En la práctica, casi todos los #[em testers] realizan pruebas exploratorias, ya sea de manera consciente o no. Un ejemplo claro de esto son las pruebas de regresión de errores. Para confirmar la corrección de un error, el #[em tester] podría iniciar siguiendo los pasos detallados en el informe de errores. Sin embargo, una vez que el programa supera esta prueba inicial, es probable que el #[em tester] lleve a cabo pruebas adicionales para asegurarse de que el error ha sido completamente resuelto.

        .fondo-personalizado-1.borde-8.p-2.mb-4(data-aos="flip-up")
          .row.align-items-center
            .col-md-1
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/84.png",style="max-width: 82px;")
            .col-md-10
              p.mb-0.text-white El #[em testing] exploratorio integra el diseño, la ejecución y el aprendizaje sobre la aplicación en prueba, fomentando un proceso de exploración y comprensión profunda del producto. A diferencia de otros enfoques, no se basa en un guion o #[em script] de pruebas preestablecido, lo que lo hace particularmente valioso en metodologías ágiles.

        p.mb-4(data-aos="fade-left") Después de observar el proceso exploratorio del #[em software], se han identificado las siguientes pruebas exploratorias:

        .pb-5
          .row.justify-content-center(data-aos="flip-up")
            .col-lg-7
              ImagenInfografica.imagen-infografica-personalizada-1.color-acento-botones
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/85.svg')

                .tarjeta.borde-9.p-3(x="51%" y="13%" numero="+")
                  .h5.mb-4.d-inline-block.p-2.text-white(style="background-color: #3A1D71;") Exploración del producto
                  p.mb-5 Para conocer a fondo cómo cumplir con los requisitos hay que registrar los objetivos, las funciones, los tipos de datos que se procesan y las zonas de inestabilidad del producto.
                .tarjeta.borde-9.p-3(x="72%" y="41%" numero="+")
                  .h5.mb-4.d-inline-block.p-2.text-white(style="background-color: #3A1D71;") Diseño de pruebas
                  p.mb-5 Crear diferentes estrategias para observar y evaluar por completo el producto.
                .tarjeta.borde-9.p-3(x="63%" y="74%" numero="+")
                  .h5.mb-4.d-inline-block.p-2.text-white(style="background-color: #3A1D71;") Ejecución de pruebas
                  p.mb-5 Explorar el producto para poder formular una hipótesis de cómo funciona y cuáles pueden ser sus puntos débiles.
                .tarjeta.borde-9.p-3(x="36%" y="74%" numero="+")
                  .h5.mb-4.d-inline-block.p-2.text-white(style="background-color: #3A1D71;") Heurística
                  p.mb-5 Reglas generales que ayudarán a cómo probar correctamente el producto.
                .tarjeta.borde-9.p-3(x="28%" y="40%" numero="+")
                  .h5.mb-4.d-inline-block.p-2.text-white(style="background-color: #3A1D71;") Resultados revisables
                  p.mb-5 Cuando se finalicen las pruebas exploratorias, el tester debe ser capaz de explicar cualquier aspecto del programa y mostrar cómo se cumplen los requisitos indicados en el procedimiento.

    .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="fade")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/4.png")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Automatización de pruebas de regresión

    .row.mb-4
      .col-lg-6(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/86.png",style="max-width: 613px;")
      .col-lg-6(data-aos="fade-rigth")
        p.mb-4 Las pruebas de regresión garantizan que los cambios realizados en una aplicación o sistema no introduzcan errores en las funcionalidades existentes. Sin embargo, realizadas de manera manual, estas pruebas pueden ser muy consumidoras de tiempo, llegando a ser más costosas que las pruebas de las nuevas funcionalidades que se están evaluando. Además, la intervención manual incrementa la susceptibilidad a errores debido al factor humano.

    .fondo-personalizado-1.borde-8
      .fondo-personalizado-1__contenido
        .p-3.mb-5(data-aos="flip-up")
          .row.align-items-center
            .col-lg-1.col-md-2
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/87.png",style="max-width: 78px;")
            .col-lg-11.col-md-10
              p.mb-0.text-white Estas pruebas se realizan siguiendo flujos completos, lo que implica ejecutarlas considerando todas las opciones disponibles según la lógica de negocio. Es crucial incluir en las pruebas las partes del código que han sido modificadas, para asegurar que los cambios no afecten negativamente la interacción con el entorno en el que el #[em software] opera.


    .row.mb-4(data-aos="fade")
      .col-lg-7
        p.mb-4 Es esencial seleccionar cuidadosamente los flujos a probar, optimizando el proceso para evitar fallos costosos en producción. A pesar de que las pruebas de regresión pueden ser lentas, su automatización permite que sean tanto asertivas como rápidas. Además, la disponibilidad de scripts de pruebas facilita que cualquier persona, sin necesidad de un equipo de #[em testers] especializados, pueda ejecutarlas. Esto es particularmente útil para aplicaciones que han estado en producción durante largo tiempo, ya que reduce el riesgo asociado a la falta de conocimiento sobre los flujos de trabajo por parte del equipo.

        .fondo-color-sistema-m.borde-13.p-3.mb-5
          .row.align-items-center
            .col-md-2
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/88.png",style="max-width: 84px;")
            .col-md-10
              p.mb-0 Este tipo de pruebas, ya sean lanzadas por los desarrolladores o los #[em testers], son susceptibles de automatización. Para su implementación, se utilizan herramientas comunes a las pruebas unitarias y de sistemas. Sin embargo, también se dispone de:

      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/89.png",style="max-width: 505px;")

    
    .row.justify-content-center
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.cust-tar-bot-1.color-1.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/129.png', alt='Texto que describa la imagen')

          p.fw-bold Herramientas especializadas de código abierto diseñadas específicamente para facilitar y optimizar este proceso:
          p Winrunner, VTest, Canoo, AdventNet y QEngine.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.cust-tar-bot-1.color-1.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/130.png', alt='Texto que describa la imagen')

          p.fw-bold Otras herramientas comerciales para aplicar este tipo de pruebas son:
          p HP UFT, Seapine QA Wizart Pro, IBM Rational Test Workbench, SmartBear Test Complete, SOASTA, Ranorex UI y OpKey.

    .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="fade")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/4.png")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 #[em Pruebas de exploratorias, usabilidad y aceptación]

    .row.mb-4
      .col-lg-7
        p.mb-0 Las pruebas de usabilidad y las pruebas de aceptación del usuario, aunque pueden presentar semejanzas en términos de resultados y objetivos, difieren significativamente en su enfoque. Las pruebas de usabilidad se centran en identificar errores o deficiencias en el sistema que puedan afectar la experiencia del usuario, con el objetivo de mejorar el producto. En contraste, las pruebas de aceptación del usuario buscan demostrar que el sistema cumple con los requisitos y expectativas establecidos, señalando así que el producto está listo para su lanzamiento. Por lo tanto, mientras las pruebas de usabilidad se enfocan en perfeccionar la interacción del usuario con el producto, las pruebas de aceptación del usuario se orientan a validar la completitud y adecuación funcional del sistema. Lo invitamos a explorar el siguiente video y conocer más sobre este tipo de pruebas:
      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/135.png",style="max-width: 505px;")

    figure.mb-5(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/CB3Bt4SFnCc?si=qCFzafs_ljfZx3Vf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video. Pruebas de exploratorias, usabilidad y aceptación
    
    .fondo-gradiente-6.posicion-1
      .fondo-gradiente-contenido
        .cont-titulo-decorativo.p-2.mt-5.mb-4(data-aos="fade-left")
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/4.png")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Pruebas desempeño, carga y seguridad

        p.mb-4(data-aos="fade") Concluir la programación de una aplicación marca un momento de éxito; con el paso del tiempo, tener un producto terminado representa un logro significativo. Sin embargo, este hito también señala el momento crucial para probar diversos aspectos del #[em software], con el fin de asegurar su correcto funcionamiento y controlar su calidad. Factores como el desempeño, la seguridad y la capacidad de carga son elementos críticos que deben evaluarse en todo producto de #[em software] desarrollado, los cuales se describen a continuación.

        h4.mb-4(data-aos="fade-left").titdec-per-1.p-1.pt-3.px-3 Pruebas de desempeño

        .row.align-items-center.mb-4
          .col-lg-5(data-aos="fade-right")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/91.png",style="max-width: 505px;")
          .col-lg-7(data-aos="fade-left")
            .fondo-color-sistema-m.borde-12.p-4
              p.mb-0 Las pruebas de desempeño evalúan cómo se comporta un sistema en términos de estabilidad y rapidez de respuesta bajo ciertas condiciones, como la carga de trabajo, la concurrencia, el ancho de banda, y las características específicas de equipos o servidores, tales como la RAM y la CPU. Además, estas pruebas permiten identificar, medir, investigar, validar o verificar otros aspectos de calidad, incluyendo la seguridad, la escalabilidad y el consumo de recursos. Constituyen un estándar en la ejecución, diseño y arquitectura de un producto de #[em software]. Entre las pruebas de desempeño más importantes se encuentra la prueba de carga, la cual se detallará a continuación.

        h4.mb-4(data-aos="fade-left").titdec-per-1.p-1.pt-3.px-3 Pruebas de carga

        .row.mb-5(data-aos="flip-up")
          .col-lg-6
            p.mb-4 Las pruebas de carga se enfocan en determinar o validar las características de rendimiento de un sistema o aplicación bajo prueba al enfrentarse a distintos volúmenes de cargas de trabajo previstos durante las operaciones de producción. Estas pruebas son cruciales para comprender cómo se comportará la aplicación en condiciones reales y garantizar que pueda manejar el tráfico esperado sin degradar su rendimiento (Meier et al., 2007).

            p.mb-0 Para ilustrar mejor el concepto de las pruebas de carga, se presenta el siguiente video tutorial:

          .col-lg-6.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/92.png",style="max-width: 610px;")

        figure.mb-5(data-aos="zoom-in-up")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/cQfsW7i0fi4?si=72NqZag0sGfifmUy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
          figcaption Video. Prueba de carga

    h4.mb-4(data-aos="fade").titdec-per-1.p-1.pt-3.px-3 Pruebas de seguridad

    .row.mb-4
      .col-lg-5
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/93.png",style="max-width: 504px;")
      .col-lg-7
        .fondo-color-sistema-m.p-4.borde-12
          p.mb-0 Las pruebas de seguridad comprenden un conjunto de actividades ejecutadas con el objetivo de identificar fallas y vulnerabilidades, buscando minimizar el impacto de ataques, el acceso no autorizado a información sensible y la pérdida de datos. Estas pruebas son esenciales porque los productos de #[em software] deben garantizar constantemente la confidencialidad, disponibilidad e integridad de los datos y funcionalidades que gestionan. La pérdida o corrupción de esta información puede tener consecuencias críticas en el ámbito empresarial. Por tanto, es crucial que estas pruebas se realicen de manera continuada a lo largo de todas las fases del proyecto, asegurando la protección efectiva contra amenazas emergentes.

    p.mb-4 A continuación, se presenta el siguiente video tutorial de instalación del #[em software] OWASP para realizar una prueba de seguridad:

    figure.mb-5(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/R7LCpIWshvY?si=HHxvax729zC7En--" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video. Prueba de seguridad


    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.3 Elaboración de informe de resultados


    p.mb-4 Una vez ejecutadas las pruebas se deben analizar los resultados y los fallos detectados, teniendo en cuenta el reporte de defectos, directrices para detectarlos y el informe de resultados de pruebas. Para ello se puede realizar lo descrito a continuación:

    .fondo-gradiente-7.posicion-1.mb-4
      .fondo-gradiente-contenido
        .row.justify-content-center 
          .col-lg-10(data-aos="zoom-in-up")
            PasosA.color-sistema-i.mb-5.pasos-a-personalizado-1(tipo="n")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  p.mb-0.text-start Analizar el impacto del defecto.
                .col-md-6
                  figure
                    img.mx-auto(src='@/assets/curso/temas/94.png',style="max-width: 295px;")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img.mx-auto(src='@/assets/curso/temas/95.png',style="max-width: 287px;")
                .col-md-6
                  p.mb-0.text-start Investigar el problema, en qué condiciones se produce este fallo.
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  p.mb-0.text-start Analizar la severidad, si es alta o baja.
                .col-md-6
                  figure
                    img.mx-auto(src='@/assets/curso/temas/96.png',style="max-width: 295px;")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img.mx-auto(src='@/assets/curso/temas/97.png',style="max-width: 287px;")
                .col-md-6
                  p.mb-0.text-start Variar los pasos realizados, se pueden ejecutar en orden diferente para observar si existe alguna variante en el resultado esperado.
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  p.mb-0.text-start Variar opciones de configuración, si estamos probando una aplicación web se puede probar con diferentes navegadores.
                .col-md-6
                  figure
                    img.mx-auto(src='@/assets/curso/temas/98.png',style="max-width: 295px;")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img.mx-auto(src='@/assets/curso/temas/99.png',style="max-width: 287px;")
                .col-md-6
                  p.mb-0.text-start Determinar condiciones específicas bajo las cuales se reproduce el defecto, si estamos probando entradas de datos entonces probar con diferentes datos.

        p.mb-4(data-aos="fade") El informe de resultados incluye la detección de incidencias o errores de #[em software], puesto que es aquí donde se evalúan y corrigen problemas, por lo tanto, a continuación, se describe la gestión de incidencias y su ciclo de vida.

        h4.mb-4(data-aos="fade-left").titdec-per-1.p-1.pt-3.px-3 Incidencias detectadas

        .row(data-aos="flip-up")
          .col-lg-5
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/100.png",style="max-width: 505px;")
          .col-lg-7
            .fondo-color-sistema-m.p-4.borde-12
              p.mb-0 La gestión de incidencias desempeña un papel crucial en el proceso de aseguramiento de la calidad del #[em software], ya que es en esta etapa donde se identifican y abordan los errores #[em (bugs)]. El objetivo principal de tratar las incidencias detectadas es generar las correcciones necesarias para minimizar la posibilidad de que estos errores se repitan. Este proceso asegura que el #[em software] no solo cumpla con los estándares de calidad requeridos, sino que también mejore continuamente, incrementando su fiabilidad y eficiencia.

    h4.mb-4(data-aos="fade").titdec-per-1.p-1.pt-3.px-3 Ciclo de vida de una incidencia
    p.mb-5 Un sistema de gestión de incidentes debe manejar los errores de #[em software], teniendo en cuenta el siguiente proceso:

    .fondo-gradiente-7.posicion-2
      .fondo-gradiente-contenido

        .row.justify-content-center.mb-5
          .col-lg-7.order-first.order-lg-last.mb-5.mb-lg-0(data-aos="fade-right")
            ImagenInfografica.imagen-infografica-personalizada-1.color-acento-botones.imgin-22
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/temas/102.svg')

              .tarjeta.borde-9.p-3(x="5%" y="36%" numero="+")
                .h5.mb-4.d-inline-block.p-2(style="background-color: #3A1D71;color: white;") Nuevo
                p.mb-5 Durante las pruebas de #[em software] los errores de #[em software] deben ser identificados y registrados por el tester de #[em software] siendo ese instante donde se reporta el error.
              .tarjeta.borde-9.p-3(x="23%" y="36%" numero="+")
                .h5.mb-4.d-inline-block.p-2(style="background-color: #3A1D71;color: white;") Abierto
                p.mb-5 El equipo de desarrollo adquiere el incidente y empieza a analizarlo.
              .tarjeta.borde-9.p-3(x="38%" y="36%" numero="+")
                .h5.mb-4.d-inline-block.p-2(style="background-color: #3A1D71;color: white;") Asignado
                p.mb-5 El incidente es asignado al desarrollador.
              .tarjeta.borde-9.p-3(x="58%" y="5%" numero="+")
                .h5.mb-4.d-inline-block.p-2(style="background-color: #3A1D71;color: white;") Diferido
                p.mb-5 Si el incidente aplica y es de bajo impacto.
              .tarjeta.borde-9.p-3(x="28%" y="94%" numero="+")
                .h5.mb-4.d-inline-block.p-2(style="background-color: #3A1D71;color: white;") Reabierto
                p.mb-5 Cuando el incidente es corregido y es retornado al equipo de #[em #[b testers]] de #[em software].
              .tarjeta.borde-9.p-3(x="76%" y="36%" numero="+")
                .h5.mb-4.d-inline-block.p-2(style="background-color: #3A1D71;color: white;") Verificado
                p.mb-5 Si la prueba es positiva.
              .tarjeta.borde-9.p-3(x="93%" y="36%" numero="+")
                .h5.mb-4.d-inline-block.p-2(style="background-color: #3A1D71;color: white;") Cerrado
                p.mb-5 Posterior a una verificación por parte del equipo de #[em testing].

        p.mb-4.pt-5(data-aos="fade-left") El proceso mencionado se adecúa a proyectos de #[em software] en fase de desarrollo, pero no así en ambientes de producción.

        h4.mb-4(data-aos="zoom-in-up").titdec-per-1.p-1.pt-3.px-3 Redacción del reporte de Incidencias
        p.mb-4 El propósito del informe de incidentes es documentar cada incidente, por lo tanto, se debe seguir un procedimiento para gestionar de forma sistémica y ordenada las incidencias de producto halladas a lo largo de la ejecución de los casos de prueba. Este procedimiento tiene las siguientes actividades:

        .row.justify-content-center.mb-4
          .col-lg-4.col-md-6.mb-4(data-aos="fade-up")
            .tarjeta-personalizada-2.color-1
              .tarjeta-personalizada-2__contenido.px-4.pb-2
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/137.png",style="max-width: 125px;")
                span.abs-num-dec-1 1
                p.mb-5.text-white Verificar con las áreas correspondientes las incidencias.
          .col-lg-4.col-md-6.mb-4(data-aos="fade-down")
            .tarjeta-personalizada-2.color-1
              .tarjeta-personalizada-2__contenido.px-4.pb-2
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/138.png",style="max-width: 125px;")
                span.abs-num-dec-1 2
                p.mb-5.text-white Verificar que el estado de las incidencias este actualizado.
          .col-lg-4.col-md-6.mb-4(data-aos="fade-up")
            .tarjeta-personalizada-2.color-1
              .tarjeta-personalizada-2__contenido.px-4.pb-2
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/139.png",style="max-width: 125px;")
                span.abs-num-dec-1 3
                p.mb-5.text-white Realizar repruebas y regresión, es decir generar otra vez la ejecución de los casos de prueba necesarios.

        p.mb-4(data-aos="fade") Por otra parte, para estructurar el informe de incidentes se requiere tener en cuenta los siguientes puntos:

        .row.justify-content-center.mb-5(data-aos="fade-left")
          .col-lg-10
            .fondo-color-sistema-k.p-4.px-lg-5.borde-20
              .row.align-items-center.justify-content-between
                .col-md-2
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/104.png",style="max-width: 156px;")
                .col-md-10.col-lg-9
                  ul.lista-ul.lista-tipo-1.margen-2.fa-ul.mb-0.ms-0
                    li
                      i.fas.fa-cube
                      span Identificador.
                    li
                      i.fas.fa-cube
                      span Resumen y descripción del incidente.
                    li
                      i.fas.fa-cube
                      span Descripción de datos (fecha/hora, entradas, resultados esperados).
                    li
                      i.fas.fa-cube
                      span Impacto que los incidentes tendrán con respecto a las pruebas.


    h4.mb-4.titdec-per-1.p-1.pt-3.px-3 Reporte de defectos
    p.mb-4(data-aos="zoom-in-up") Cuando se confirma la existencia de un defecto, se elabora un reporte. Este documento detalla los fallos identificados durante el proceso de pruebas, subrayando la importancia de que cada defecto detectado cuente con un reporte individual. Esto facilita la trazabilidad y su corrección posterior. A continuación, se describe la estructura típica de un reporte de defectos.

    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/105.png",style="max-width: 610px;")
      .col-lg-3(data-aos="fade-left")
        ol.lista-tipo-1.margen.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 1
            span Identificador.
          li 
            .lista-ol--cuadro__vineta
              span 2
            span Título.
          li 
            .lista-ol--cuadro__vineta
              span 3
            span Reportado por.
          li 
            .lista-ol--cuadro__vineta
              span 4
            span Asignado a.
          li 
            .lista-ol--cuadro__vineta
              span 5
            span Fecha de creación.
          li 
            .lista-ol--cuadro__vineta
              span 6
            span Severidad.
          li 
            .lista-ol--cuadro__vineta
              span 7
            span Nombre de la aplicación.
          li 
            .lista-ol--cuadro__vineta
              span 8
            span Descripción.
          li 
            .lista-ol--cuadro__vineta
              span 9
            span Método de reproducción.
          li 
            .lista-ol--cuadro__vineta
              span 10
            span Información adicional. 

    h4.mb-4.titdec-per-1.p-1.pt-3.px-3 Informe de resultados de pruebas

    .row.align-items-center(data-aos="flip-up")
      .col-lg-8
        .fondo-color-sistema-k.borde-12.p-4.mb-4
          p.mb-4 El informe de resultados de pruebas presenta y organiza un análisis conciso de los resultados obtenidos en las pruebas, así como las principales métricas utilizadas para la evaluación y verificación. Por tanto, la responsabilidad de este documento recae en el gerente de pruebas. Este informe debe incluir los siguientes puntos:

          ol.lista-tipo-1.margen.lista-ol--cuadro
            li
              .lista-ol--cuadro__vineta(style="background-color: #3A1D71 !important;")
                span A
              span Alcance de las pruebas, es decir lo que es necesario incluir y no incluir.
            li 
              .lista-ol--cuadro__vineta(style="background-color: #3A1D71 !important;")
                span B
              span Resumen de pruebas.
            ul.ms-5
              li 
                i.fas.fa-cube(style="color: #273A89;position: relative;top:3px;margin-right: 0.3rem;")
                span Casos de prueba planificados.
              li 
                i.fas.fa-cube(style="color: #273A89;position: relative;top:3px;margin-right: 0.3rem;")
                span Casos de prueba ejecutados.
              li
                i.fas.fa-cube(style="color: #273A89;position: relative;top:3px;margin-right: 0.3rem;")
                span Casos de prueba exitosos.
              li 
                i.fas.fa-cube(style="color: #273A89;position: relative;top:3px;margin-right: 0.3rem;")
                span Casos de prueba fallidos.
              li
                i.fas.fa-cube(style="color: #273A89;position: relative;top:3px;margin-right: 0.3rem;")
                span Casos de prueba bloqueados.
            li 
              .lista-ol--cuadro__vineta(style="background-color: #3A1D71 !important;")
                span C
              span Listado de defectos detectados.
            li 
              .lista-ol--cuadro__vineta(style="background-color: #3A1D71 !important;")
                span D
              span Conclusiones.

      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/131.png",style="max-width: 400px;")


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
