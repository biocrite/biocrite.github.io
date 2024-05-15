// data para la galería
const fotosGaleria = [{
    archivo: "koala-durmiente.jpg",
    leyenda: "A los koalas les gusta dormir.<br/>¿A ti también?"
},
{
    archivo: "koala-inicio.jpeg",
    leyenda: "A los koalas les gusta dormir mucho, mucho, mucho!"
},
{
    archivo: "koala-form.png",
    leyenda: "A los koalas les gusta rellenar formularios. Tú también rellenas formularios? 👀"
}];

//construir la galería
let galeria = '';

fotosGaleria.forEach((foto) => {
    galeria += `<figure>
                    <div class="imageholder"><img class="dimmereable" src="/img/galeria/${foto.archivo}" ></div>
                    <figcaption>${foto.leyenda}</figcaption>
                </figure>`;
})


//insertar la galería en el documento
document.getElementById("galeriaWrapper").innerHTML = galeria;