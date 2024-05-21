//-------------------------------//
//-------FAV ICON & STYLES-------//
//-------------------------------//

function setHeadItems(elementType, relType, source) {
  let headTitle = document.querySelector('head');
  let elementito = document.createElement(elementType);
  elementito.setAttribute('rel', relType);
  elementito.setAttribute('href', source);
  headTitle.appendChild(elementito);
}
setHeadItems('link', 'shortcut icon', '/favicon.ico');


//----------------------//
//---INCLUDE FUNCTION---//
//------FOR WRAPPER-----//
//----------------------//

// // incluir las diferentes partes del wrapper
// function includeHTML() {
//   var z, i, elmnt, file, xhttp;
//   /* Loop through a collection of all HTML elements: */
//   z = document.getElementsByTagName("*");
//   for (i = 0; i < z.length; i++) {
//     elmnt = z[i];
//     /*search for elements with a certain atrribute:*/
//     file = elmnt.getAttribute("data-src");
//     if (file) {
//       /* Make an HTTP request using the attribute value as the file name: */
//       xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function () {
//         if (this.readyState == 4) {
//           if (this.status == 200) { elmnt.innerHTML = this.responseText; }
//           if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
//           /* Remove the attribute, and call this function once more: */
//           elmnt.removeAttribute("data-src");
//           includeHTML();
//         }
//       }
//       xhttp.open("GET", file, true);
//       xhttp.send();
//       /* Exit the function: */
//       return;
//     }
//   }
// }
// // includeHTML();

wrapperSecciones = [
  { section: "header", URL: "/wrapper/header.html" },
  { section: "footer", URL: "/wrapper/footer.html" }];

wrapperSecciones.forEach(z => {
  let section = document.getElementsByTagName(z["section"])[0];
  let url = z["URL"];
  xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) { section.innerHTML = this.response; }
      if (this.status == 404) { section.innerHTML = "Algo está faltando aquí."; }
    }
  }
});

//----------------------//
//--------MENU 🍔-------//
//----------------------//

function menuExpander() {
  let navmenu = document.getElementById("navmenu");
  if (navmenu.style.display == 'none') {
    navmenu.style.display = 'flex';
  } else {
    navmenu.style.display = 'none';
  }
}



//----------------------//
//--------DIMMER--------//
//----------------------//

//crear dimmer background overlay
const dimmerBG = document.createElement('div');
dimmerBG.id = 'dimmer';
document.body.appendChild(dimmerBG);

//función para mostrar dimmer con photo
function lightbox(galleryPic) {
  var imagenElegida = galleryPic.querySelector('img').src;
  var leyendaElegida = galleryPic.querySelector('figcaption').innerHTML;
  dimmerBG.innerHTML = `<figure>
  <figcaption class="dimmerBGkiller">ⓧ</figcaption>
  <img class="dimmerImage" src="${imagenElegida}" alt="${leyendaElegida}"z-index="300" >
                            <figcaption>${leyendaElegida}
                            </figcaption>
                          </figure>`;
  dimmerBG.style.visibility = "visible";
}

//funciones para salir del dimmer
function lightboxOff() {
  dimmerBG.style.visibility = "hidden";
}

dimmerBG.addEventListener("mouseup", lightboxOff);

window.addEventListener('keydown', function (e) {
  if ((e.key == 'Escape' || e.key == 'Esc') && (e.target.nodeName == 'BODY')) {
    lightboxOff();
    menuExpander();
  }
}, true);


//Todas las "img" dentro de "figures" de clase "dimmereable" puedan ser cliqueables para el dimmer
const dimmerSite = document.getElementsByClassName("dimmereable");

[].forEach.call(dimmerSite, function (galleryPic) {
  galleryPic.querySelector('img').addEventListener("click", function () {
    lightbox(galleryPic);
  });
});

//todas las "figures" de la galería (.galeriaItem) también son cliqueables
const dimmerGallery = document.getElementsByClassName("galeriaItem");

[].forEach.call(dimmerGallery, function (galleryPic) {
  galleryPic.addEventListener("click", function () {
    lightbox(galleryPic);
  });
});
