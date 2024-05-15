//-------------------------------//
//-------FAV ICON & STYLES-------//
//-------------------------------//

function setHeadItems(elementType, relType, source){
  let headTitle = document.querySelector('head');
  let elementito = document.createElement(elementType);
  elementito.setAttribute('rel',relType);
  elementito.setAttribute('href',source);
  headTitle.appendChild(elementito);
}
setHeadItems('link', 'shortcut icon', 'https://img.icons8.com/emoji/48/koala-emoji.png');
//setHeadItems('link', 'stylesheet', '/css/pages.css');


//----------------------//
//---INCLUDE FUNCTION---//
//------FOR WRAPPER-----//
//----------------------//

//incluir las diferentes partes del wrapper
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("data-src");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("data-src");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }

  includeHTML();

//----------------------//
//--------MENU 🍔-------//
//----------------------//

function menuExpander() {
  let navBarExpander = document.getElementById("navBarExpander");
  let navmenu = document.getElementById("navmenu");
    if (navmenu.style.display == 'none') {
    navmenu.style.display = 'flex';
    navBarExpander.innerHTML = "[x]";
  } else {
   navmenu.style.display = 'none';
   navBarExpander.innerHTML = "Menú";
   }
}



//----------------------//
//--------DIMMER--------//
//----------------------//

//crear dimmer background overlay
const dimmerBG = document.createElement('div');
dimmerBG.id = 'dimmer';
document.getElementById("wrapper").appendChild(dimmerBG);

//función para mostrar dimmer con photo
function lightbox() {
    dimmerBG.innerHTML = `<figure><img class="dimmerImage" src="${this.src}" z-index="300" ></figure><p> [X] </p>`;
    dimmerBG.style.visibility = "visible";
}

//funciones para salir del dimmer
function lightboxOff (){
    dimmerBG.style.visibility = "hidden";
}

dimmerBG.addEventListener("mouseup", lightboxOff);

window.addEventListener('keydown', function(e){
    if((e.key=='Escape'||e.key=='Esc') && (e.target.nodeName=='BODY')){
        lightboxOff();
        menuExpander();
    }
}, true);

//funcion para crear imagenes dimmereables al cliquear
const dimmerGallery = document.getElementsByClassName("dimmereable");

[].forEach.call(dimmerGallery, function (galleryPic) {
  galleryPic.addEventListener("click", lightbox);
});