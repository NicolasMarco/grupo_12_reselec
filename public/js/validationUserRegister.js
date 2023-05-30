window.addEventListener('load', function() {

    let form = document.querySelector("form");
    
    form.addEventListener("submit" , function(evento) {
        let erroresUsuario = [];
        let erroresPassword = [];
        let erroresPasswordRepetida = [];
        let erroresNombre = [];
        let erroresApellido = [];
        let erroresEmail = [];
        let erroresTelefono = [];
        let erroresPasswordAdmin = [];


        //USUARIO
        if (form.usuario.value == "") {
            erroresUsuario.push("* El usuario no puede estar vacio");
        } else if (form.usuario.value.length < 5) {
            erroresUsuario.push("* El usuario debe tener mas de 5 caracteres");
        }

        //CONTRASEÑA
        if (form.password.value == "") {
            erroresPassword.push("* La contraseña no puede estar vacia");
        } else if (form.password.value.length < 8) {
            erroresPassword.push("* La contraseña debe tener al menos 8 caracteres");
        }

        //CONTRASEÑA REPETIDA
        if (form.password.value != "" && form.passwordRepetida.value == "") {
            erroresPasswordRepetida.push("* Debe repetir la contraseña");
        } else if (form.passwordRepetida.value != "" && form.passwordRepetida.value.length < 8) {
            erroresPasswordRepetida.push("* La contraseña debe tener al menos 8 caracteres");
        } else if (form.password.value != "" && (form.password.value != form.passwordRepetida.value)) {
            erroresPasswordRepetida.push("* Las contraseñas no coinciden");
        }

        //NOMBRE
        if (form.nombre.value == "") {
            erroresNombre.push("* El nombre no puede estar vacio");
        } else if (form.nombre.value.length < 2) {
            erroresNombre.push("* El nombre debe tener al menos 2 caracteres");
        }

        //APELLIDO
        if (form.apellido.value == "") {
            erroresApellido.push("El apellido no puede estar vacio");
        } else if (form.nombre.value.length < 2) {
            erroresApellido.push("* El apellido debe tener al menos 2 caracteres");
        }

        //EMAIL
        let regEmail = /\S+@\S+\.\S+/
        if (form.email.value == "") {
            erroresEmail.push("* El email no puede estar vacio");
        } else if (!regEmail.test(form.email.value)) {
            erroresEmail.push("* Formato de email invalido");
        }
        
        //TELEFONO
        let regTelefono = /^[0-9]*$/;
        if (form.telefono.value == "") {
            erroresTelefono.push("* El telefono no puede estar vacio");
        } else if (!regTelefono.test(form.telefono.value)) {
            erroresTelefono.push("* El telefono solo puede contener numeros");
        }

        //CONTRASEÑA ADMIN
        if (form.passwordAdmin.value != "" && form.passwordAdmin.value != "123456") {
            erroresPasswordAdmin.push("* La contraseña es incorrecta");
        }

        let erroresUsuarioHtml = document.querySelector("div.register-contenedorErrorUsuario");
        let erroresPasswordHtml = document.querySelector("div.register-contenedorErrorPassword");
        let erroresPasswordRepetidaHtml = document.querySelector("div.register-contenedorErrorPasswordRepetida");
        let erroresNombreHtml = document.querySelector("div.register-contenedorErrorNombre");
        let erroresApellidoHtml = document.querySelector("div.register-contenedorErrorApellido");
        let erroresEmailHtml = document.querySelector("div.register-contenedorErrorEmail");
        let erroresTelefonoHtml = document.querySelector("div.register-contenedorErrorTelefono");
        let erroresPasswordAdminHtml = document.querySelector("div.register-contenedorErrorPasswordAdmin");

        if (erroresUsuario.length > 0 || erroresPassword.length > 0 || erroresNombre.length > 0 || erroresApellido.length > 0 || erroresTelefono.length > 0 || erroresEmail.length > 0 || erroresPasswordAdmin.length > 0) {
            evento.preventDefault();
            
            erroresUsuarioHtml.innerHTML = "";
            erroresUsuario.forEach(function(error) {
                erroresUsuarioHtml.innerHTML += "<h3 class = \"register-textoError\">" + error + "</h3>"
            })

            erroresPasswordHtml.innerHTML = "";
            erroresPassword.forEach(function(error) {
                erroresPasswordHtml.innerHTML += "<h3 class = \"register-textoError\">" + error + "</h3>"
            })

            erroresPasswordRepetidaHtml.innerHTML = "";
            erroresPasswordRepetida.forEach(function(error) {
                erroresPasswordRepetidaHtml.innerHTML += "<h3 class = \"register-textoError\">" + error + "</h3>"
            })

            erroresNombreHtml.innerHTML = "";
            erroresNombre.forEach(function(error) {
                erroresNombreHtml.innerHTML += "<h3 class = \"register-textoError\">" + error + "</h3>"
            })

            erroresApellidoHtml.innerHTML = "";
            erroresApellido.forEach(function(error) {
                erroresApellidoHtml.innerHTML += "<h3 class = \"register-textoError\">" + error + "</h3>"
            })

            erroresEmailHtml.innerHTML = "";
            erroresEmail.forEach(function(error) {
                erroresEmailHtml.innerHTML += "<h3 class = \"register-textoError\">" + error + "</h3>"
            })

            erroresTelefonoHtml.innerHTML = "";
            erroresTelefono.forEach(function(error) {
                erroresTelefonoHtml.innerHTML += "<h3 class = \"register-textoError\">" + error + "</h3>"
            })

            erroresPasswordAdminHtml.innerHTML = "";
            erroresPasswordAdmin.forEach(function(error) {
                erroresPasswordAdminHtml.innerHTML += "<h3 class = \"register-textoError\">" + error + "</h3>"
            })
        }
    })

});