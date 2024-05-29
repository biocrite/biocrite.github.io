# Koala Mundia
*Codo a codo 4.0 / Node.js / Comisión 24.126*

*Primer cuatrimestre de 2024*

Primera entrega para el curso de Full Stack - Desarollo Web (Javascript/Node.js) dictado por Gabriel Múñoz.

## Criterios de Evaluación

* [x] El sitio web debe poseer al menos 4 páginas HTML o 4 secciones si se trata de un sitio One Page.
  * El sitio incluye las siguientes páginas:
    * 🏠 Inicio
    * 📸 Galería
    * 🐨 Diversión
      * ✨ Koala Curiosidades ✨
      * ✨ Koala Nombre ✨
      * ✨ Koala TV ✨
    * 🫂 Quiénes Somos
    * 💬 Contacto
      * Confirmación de Formulario Enviado
    * Política de Privacidad
    * Términos de Uso
  * El header y el footer están almacenados en `/wrapper`

* [x] El sitio web debe incluir un formulario de contacto, con al menos 5 campos que incluya (un checkbox o radiobutton), un select y una imagen, con validación realizada mediante JavaScript para que los campos sean obligatorios.
  * El formulario de contacto (`/pages/contacto.html`) incluye 6 campos y 2 botones de imagen:
    * nombre `[text]`
    * apellido `[text]`
    * mail `[email]`
    * origen `[select]`
    * mensaje `[textarea]`
    * koalamor `[checkbox]`
    * botón de enviar `[image]`
    * botón de borrar `[image]`
  * La validación se realiza mediante la funcion `valideishan()` en `/js/contacto.js`

* [x] Tener al menos una página totalmente responsive con mínimo 3 puntos de corte con media querys para 3 tamaños de dispositivos (PC escritorio, Tablet, Celular). Para el diseño debe usarse CSS.
  * La disposición del menú (horizontal / hamburguesa) se decide mediante `@media` query en `/css/wrapper.css`
  * También hay tres puntos de corte mediante `@media` query para la galería en `/css/galeria.css`
    * *celular*: disposición vertical (una foto por fila, texto debajo)
    * *tablet*: disposición semi-vertical (una foto por fila y texto al lado)
    * *PC escritorio*: disposición semi-horizontal, (tres fotos por fila, texto debajo)

* [x] Utilizar al menos una animación, transformación o una transición.
  * Animación
    * Se usó un fade-in de los elementos del `main` en `/css/wrapper.css`
    * Se usó un fade-in más lento de los `figure` en `/css/pages.css`
  * Transformación
    * Se usó `transform: scale()` para hacer que las imágenes en `figure` se agranden al pasar el ratón encima

* [x] Poseer una estructura HTML maquetada con Flexbox o Grid.
  * Algunos de los usos de flexbox incluyen
    * La estructura general de las páginas
    * El dimmer / lightbox que aparece al hacer click en ciertas imágenes del sitio (como en la galería)
    * Dentro de la galería para la disposición de cada `<figure>`
    * El formulario de contacto
    * La caja `.boxy` de las págines de diversión

* [x] Se considerará la presentación general del proyecto, la legibilidad del mismo, la navegación sin llegar a puntos de no retorno, la optimización de imagenes para la web y el uso de favicon.
  * La página es legible y presentable
  * La navegación está funcionando bien con menú hamburguesa para diapositivos con pantallas más pequeñas
  * Hay un favicon enlazado a cada página mediante `/js/main.js`

* [x] El trabajo práctico deberá subirse a un servidor online y compartirse mediante un repositorio de Git. (Mandatorio)
  * Repositorio: <https://github.com/biocrite/biocrite.github.io>

* [x] La página deberá subirse a un servidor on-line para poder ser navegada por el Docente. Ejemplo: Netlify o similar. (Mandatorio)
  * GitPages: <https://biocrite.github.io>

* [x] El sitio web debe estar estructurado utilizando etiquetas semánticas HTML correctamente. Debe pasar la validación de <https://validator.w3.org/> sin errores. (Mandatorio)
  * Se usaron las siguientes etiquetas semánticas:
    * `<header>`
      * `<nav>`
    * `<main>`
      * `<section>`
      * `<h1>, <h2>, <p>`
      * `<a>`
      * `<ul>, <ol>, <li>`
      * `<figure>`
        * `<figcaption>`
      * `<form>`
    * `<footer>`
  * El sitio web pasó la validación de W3.org

* [x] Utilizar iframes y/o iconos de FontAwesome y/o fuentes locales o bien de Google Fonts. Es optativo incluir algún elemento de Bootstrap.
  * Se usó un iframe en `/pages/koala-tv.html`
  * Se usaron fuentes de Google en `/css/wrapper.css` y `/css/contacto.css`
