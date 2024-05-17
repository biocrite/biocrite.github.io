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
//--------DIMMER--------//
//----------------------//

//crear dimmer background overlay
const dimmerBG = document.createElement('div');
dimmerBG.id = 'dimmer';
document.getElementById("wrapper").appendChild(dimmerBG);

//función para mostrar dimmer con photo
function lightbox(pikcha) {
    dimmerBG.innerHTML = `<figure><img class="dimmerImage" src="${pikcha.src}" z-index="300" /></figure><p> [X] </p>`;
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
    }
}, true);