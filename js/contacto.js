function formreset() {
    document.formie.reset();
}

function mostrarObligatorios() {
    var obligatorymarker = document.getElementsByClassName("obligatorymarker");
    for (var i = 0; i < obligatorymarker.length; i++) {
        obligatorymarker[i].style.display = "block";
    }
}

function valideishan() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    if (nombre != '' && apellido != '' && email != '' && mensaje != '') {
        window.location = "formularioenviado.html";
    } else {
        mostrarObligatorios();
    }
}