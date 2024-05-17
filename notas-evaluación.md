# Info
**Nombre del sitio:** Koala Mundia

**Fecha de entrega:** 26 de mayo

**Temática:** Koalas

# Criteria de Evaluación

    [ ] (__/10) El sitio web debe poseer al menos 4 páginas HTML o 4 secciones si se trata de un sitio One Page.
        - el sitio incluye las siguientes páginas: 
            - 🏠 Inicio
            - 📸 Galería
            - 🐨 Diversión
                - ✨ Koala Curiosidades ✨
                - ✨ Koala Nombre ✨
                - ✨ Koala TV ✨
            - 🫂 Quiénes Somos
            - 💬 Contacto
                - Confirmación de Formulario Enviado
            - Política de Privacidad
            - Términos de Uso
        - el header y el footer también están almacenados en documentos de HTML separados para poder usarlos canónicamente

    [ ] (__/15) El sitio web debe incluir un formulario de contacto, con al menos 5 campos que incluya (un checkbox o radiobutton), un select y una imagen, con validación realizada mediante JavaScript para que los campos sean obligatorios.
        - el formulario de contacto incluye 6 campos y 2 botones de imagen:
            - nombre [texto], 
            - apellido [texto], 
            - mail [mail], 
            - origen [select], 
            - mensaje [textarea], 
            - koalamor [checkbox]
            - botón de enviar [image]
            - botón de borrar [image]

    [x] (__/15)Tener al menos una página totalmente responsive con mínimo 3 puntos de corte con media querys para 3 tamaños de dispositivos (PC escritorio, Tablet, Celular). Para el diseño debe usarse CSS.
        - Se usó responsividad para decidir si se emplea un menú horizontal o menú hamburguesa
        - También hay tres puntos de corte para la galería con diferentes 

    [x] (__/10) Utilizar al menos una animación, transformación o una transición.
        - Se usó animación para hacer un fade-in de los elementos del cuerpo
        - También se usó `transform: scale()` para hacer que las imágenes se agranden al pasar el ratón en cima

    [x] (x/10) Poseer una estructura HTML maquetada con Flexbox lo Grid.
        - Se usó flex para la estructura general del cuerpo y también dentro de la galería, el formulario y las págines de diversión

    [x] (__/10)Se considerará la presentación general del proyecto, la legibilidad del mismo, la navegación sin llegar a puntos de no retorno, la optimización de imagenes para la web y el uso de favicon.
        – La página es legible y presentable
        - La navegación está funcionando bien con menú hamburguesa para diapositivos pequeños
        - Hay un favicon

    [x] (__/10) El trabajo práctico deberá subirse a un servidor online y compartirse mediante un repositorio de Git. (Mandatorio)
        - Repositorio: https://github.com/biocrite/biocrite.github.io

    [x] (__/10) La página deberá subirse a un servidor on-line para poder ser navegada por el Docente. Ejemplo: Netlify o similar. (Mandatorio)
        - GitPages: https://biocrite.github.io

    [x] (__/5) El sitio web debe estar estructurado utilizando etiquetas semánticas HTML correctamente. Debe pasar la validación de https://validator.w3.org/ sin errores. (Mandatorio)
        - Se usaron las siguientes etiquetas semánticas:
            - head
                - nav
            - main
                - figure
                - fig caption
                - form
            - footer
        - El sitio web pasó la validación

    [x] (__/5) Utilizar iframes y/o iconos de FontAwesome y/o fuentes locales o bien de Google Fonts. Es optativo incluir algún elemento de Bootstrap.
        - Se usó un iframe en /pages/koala-tv.html
        - Se usaron fuentes de Google en /css/wrapper.css y /css/contacto.css