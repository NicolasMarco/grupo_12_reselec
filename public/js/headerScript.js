let burgerMenu = document.querySelector(".burgerMenu");
let contenidoHeader = document.querySelector(".contenidoHeader");
let contenedorDinamicoLogged = document.querySelector(".contenedorDinamicoLogged")
let estado = 0;

window.onresize = start;

function start() {
    if (screen.width >= 768) {
        contenedorDinamicoLogged.style.display = "none"
        estado = 0;
    }
}

function MostrarMenu() {
    if (estado == 0) {
        contenidoHeader.innerHTML += "<div class = \"contenedorDinamico\"></div>"
        let contenedorDinamico = document.querySelector(".contenedorDinamico");
        contenedorDinamico.innerHTML += "<a class = \"enlaceNavBarBurger\" href=\"/products\">PRODUCTOS</a\>"
        contenedorDinamico.innerHTML += "<a class = \"enlaceNavBarBurger\" href=\"/users/login\">INGRESA</a>"
        contenedorDinamico.innerHTML += "<a class = \"enlaceNavBarBurger\" href=\"/users/register\">REGISTRATE</a>"
        estado = 1;
    } else if (estado == 1){
        let contenedorDinamico = document.querySelector(".contenedorDinamico");
        contenedorDinamico.innerHTML = "";
        estado = 2;
    } else if (estado == 2) {
        let contenedorDinamico = document.querySelector(".contenedorDinamico");
        contenedorDinamico.innerHTML += "<a class = \"enlaceNavBarBurger\" href=\"/products\">PRODUCTOS</a\>"
        contenedorDinamico.innerHTML += "<a class = \"enlaceNavBarBurger\" href=\"/users/login\">INGRESA</a>"
        contenedorDinamico.innerHTML += "<a class = \"enlaceNavBarBurger\" href=\"/users/register\">REGISTRATE</a>"
        estado = 1;
    }
}

function MostrarMenuLoggeado() {
    if (estado == 0) {
        contenedorDinamicoLogged.style.display = "flex";
        estado = 1;
    } else if (estado == 1){
        contenedorDinamicoLogged.style.display = "none";
        estado = 0;
    }
}

