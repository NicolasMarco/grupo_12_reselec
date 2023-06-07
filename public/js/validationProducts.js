window.addEventListener('load', function() {
    let form = document.querySelector("form");
    console.log(window.location);

    form.addEventListener("submit" , function(evento) {
        let erroresNombre = [];
        let erroresPrecio = [];
        let erroresCategoria = [];
        let erroresTipo = [];
        let erroresCaracteristicas = [];
        let erroresDescripcion = [];
        let erroresImagenPrincipal = [];
        let errorImagenesSecundarias = "";

        //NOMBRE
        if (form.nombre.value == "") {
            erroresNombre.push("* El nombre no puede estar vacio");
        } else if (form.nombre.value != "" && form.nombre.value.length < 5) {
            erroresNombre.push("* El nombre debe tener mas de 5 caracteres");
        }

        //PRECIO
        let regPrecio = /^[0-9]*$/;
        if (form.precio.value == "") {
            erroresPrecio.push("* El precio no puede estar vacio");
        } else if (!regPrecio.test(form.precio.value)) {
            erroresPrecio.push("* El precio solo puede contener numeros");
        }

        //CATEGORIA
        if (form.categoria.value == "disabled") {
            erroresCategoria.push("* Debe seleccionar una categoria");
        }

        //TIPO
        if (form.tipoEquipo.value == "disabled") {
            erroresTipo.push("* Debe seleccionar un tipo de producto");
        }

        //CARACTERISTICAS
        if (form.caracteristicaUno.value == "" || form.caracteristicaDos.value == "" || form.caracteristicaTres.value == "") {
            erroresCaracteristicas.push("* Debe completar todas las caracteristicas");
        } 

        //DESCRIPCION
        if (window.location.pathname == "/products/agregarProducto" && form.descripcion.value == "") {
            erroresDescripcion.push("* La descripcion no puede estar vacia");
        } else if (form.descripcion.value != "" && form.descripcion.value.length < 8) {
            erroresDescripcion.push("* La descripcion debe tener al menos 8 caracteres");
        }
        
        
        //IMAGEN PRINCIPAL
        let imagenPrincipal = document.getElementById("imagenPrincipal")

        if (imagenPrincipal.files[0]) {
            let nombreImagenPrincipal = imagenPrincipal.files[0].name;

            if (!nombreImagenPrincipal.includes(".jpg") && !nombreImagenPrincipal.includes(".png") && !nombreImagenPrincipal.includes(".gif") && !nombreImagenPrincipal.includes(".jpeg")) {
                erroresImagenPrincipal.push("* Formato de imagen invalido");
            }
        } else if (window.location.pathname == "/products/agregarProducto"){
            erroresImagenPrincipal.push("* Debe seleccionar una imagen");
        }
        
        //IMAGENES SECUNDARIAS

        for(let i = 0 ; i < 4 ; i++) {
            let imagenSecundaria = document.getElementById("imagenSecundaria" + (i+1));

            if (imagenSecundaria.files[0]) {
                let nombreImagenSecundaria = imagenSecundaria.files[0].name;
    
                if (!nombreImagenSecundaria.includes(".jpg") && !nombreImagenSecundaria.includes(".png") && !nombreImagenSecundaria.includes(".gif") && !nombreImagenSecundaria.includes(".jpeg")) {
                    errorImagenesSecundarias = "* Formato de imagen invalido";
                }
            }
        }

        let erroresNombreHtml = document.querySelector("div.carga-edicion-contenedorErrorNombre");
        let erroresPrecioHtml = document.querySelector("div.carga-edicion-contenedorErrorPrecio");
        let erroresCategoriaHtml = document.querySelector("div.carga-edicion-contenedorErrorCategoria");
        let erroresTipoHtml = document.querySelector("div.carga-edicion-contenedorErrorTipo");
        let erroresCaracteristicasHtml = document.querySelector("div.carga-edicion-contenedorErrorCaracteristicas");
        let erroresDescripcionHtml = document.querySelector("div.carga-edicion-contenedorErrorDescripcion");
        let erroresImagenPrincipalHtml = document.querySelector("div.carga-edicion-contenedorErrorImagen");
        let erroresImagenesSecundariasHtml = document.querySelector("div.carga-edicion-contenedorErrorImagenesSecundarias");

        if (erroresNombre.length > 0 || erroresPrecio.length > 0 || erroresCategoria.length > 0 || erroresTipo.length > 0 || erroresCaracteristicas.length > 0 || erroresDescripcion.length > 0 || erroresImagenPrincipal.length > 0 || errorImagenesSecundarias != "") {
            console.log("HOLA! Entre al if");
            
            evento.preventDefault();
            
            erroresNombreHtml.innerHTML = "";
            erroresNombre.forEach(function(error) {
                erroresNombreHtml.innerHTML += "<h3 class = \"carga-edicion-textoError\">" + error + "</h3>";
            })

            erroresPrecioHtml.innerHTML = "";
            erroresPrecio.forEach(function(error) {
                erroresPrecioHtml.innerHTML += "<h3 class = \"carga-edicion-textoError\">" + error + "</h3>";
            })

            erroresCategoriaHtml.innerHTML = "";
            erroresCategoria.forEach(function(error) {
                erroresCategoriaHtml.innerHTML += "<h3 class = \"carga-edicion-textoError\">" + error + "</h3>";
            })

            erroresTipoHtml.innerHTML = "";
            erroresTipo.forEach(function(error) {
                erroresTipoHtml.innerHTML += "<h3 class = \"carga-edicion-textoError\">" + error + "</h3>";
            })

            erroresCaracteristicasHtml.innerHTML = "";
            erroresCaracteristicas.forEach(function(error) {
                erroresCaracteristicasHtml.innerHTML += "<h3 class = \"carga-edicion-textoError\">" + error + "</h3>";
            })

            erroresDescripcionHtml.innerHTML = "";
            erroresDescripcion.forEach(function(error) {
                erroresDescripcionHtml.innerHTML += "<h3 class = \"carga-edicion-textoError\">" + error + "</h3>";
            })

            erroresImagenPrincipalHtml.innerHTML = "";
            erroresImagenPrincipal.forEach(function(error) {
                erroresImagenPrincipalHtml.innerHTML += "<h3 class = \"carga-edicion-textoError\">" + error + "</h3>";
            })

        
            erroresImagenesSecundariasHtml.innerHTML = "";
            if (errorImagenesSecundarias != "") {
                erroresImagenesSecundariasHtml.innerHTML += "<h3 class = \"carga-edicion-textoError\">" + errorImagenesSecundarias + "</h3>";
            }
        }

        /*
        let nombreImagenPrincipal = document.getElementById("imagenPrincipal").files[0].name;
        let extensionImagen = nombreImagenPrincipal.includes(".png");
        console.log(extensionImagen);*/
        
    })
});