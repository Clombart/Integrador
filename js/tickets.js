function borrar() {
    document.getElementById("celeste").innerHTML = "Total a Pagar: $";
}

//Traigo el Boton Borrar
var botonBorrar = document.getElementById('borrar');
botonBorrar.addEventListener("click", borrar);


function resumen() {

    //traigo todos los imput
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let mail = document.getElementById("mail").value;
    let cantidad = document.getElementById("cantidad").value;
    let categoria = document.getElementById("categoria").value;


    if (nombre === null || nombre === "") {
        alert("Ingresar nombre");
        document.getElementById("nombre").focus();
        return;
    }
    if (apellido === null || apellido === "") {
        alert("Ingresar apellido");
        document.getElementById("apellido").focus();
        return;
    }
    if (mail === null || mail === "" || mail == /\w'@\w+\.'[a-z0-9]/) {
        alert("Ingresar email correcto");
        document.getElementById("mail").focus();
        return;
    }


    let descuento = 0;
    //seleccion de categoria y dto
    switch (categoria) {
        case "Estudiante":
            descuento = 20;
            break;
        case "Trainee":
            descuento = 50;
            break;
        case "Junior":
            descuento = 75;
            break;
    }
    
    //calculo precio Final

    let precioTicket = 200;
    let subtotal = 0;
    let total = 0;

    subtotal = ((descuento * precioTicket)/100);
    total = (subtotal * cantidad);

    //crea el p que mostrara el resultado en el HTML
    let parrafo = document.createElement("p");
    parrafo.style.marginBottom = 0;
    parrafo.style.fontWeight = 700;
    let texto = document.createTextNode(" " + total);
    let dato = document.getElementById("celeste");
    dato.appendChild(parrafo);
    parrafo.appendChild(texto);
}


//Traigo el Boton Resumen
let boton = document.getElementById("resumen");
boton.addEventListener("click", resumen);