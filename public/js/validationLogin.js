window.addEventListener('load', function() {
    let form = document.querySelector("form");

    form.addEventListener("submit" , function(evento) {
        let errores = [];
        
        //USUARIO
        if (form.usuario.value == "") {
            errores.push("* El usuario no puede estar vacio");
        } else if (form.usuario.value.length < 5) {
            errores.push("* El usuario debe tener mas de 5 caracteres");
        }

        //CONTRASEÑA
        if (form.password.value == "") {
            errores.push("* La contraseña no puede estar vacia");
        }
        
        let erroresHtml = document.querySelector("div.login-contenedorError");

        if (errores.length > 0) {
            evento.preventDefault();
            erroresHtml.innerHTML = "";

            errores.forEach(function(error) {
                erroresHtml.innerHTML += "<h3 class = \"login-textoError\">" + error + "</h3>"
            })
        }

    })
});