    <!--Esto sería para agregar una "pestaña" a la derecha si queremos-->
    <script>
        var sidetext = document.getElementById("sidetext");
        var titulo = 'Bienvenid@!';
        function textolateral (titulo) {
        sidetext.innerHTML = titulo;
        }
        textolateral(titulo);
    </script>
    <style>
    aside div.container{
        text-align: right;
        vertical-align: top;
        margin-top: 50px;
        transform:rotate(-90deg);
    }
    aside div.container h2 {
        margin-top: 150px;
        padding: 15px;
        font-size: 1.5em;
        background: darkslategray;
        color: white;
        white-space: nowrap;
        width: 200px;
    }
    </style>