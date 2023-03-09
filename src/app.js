const express = require ("express");
const path = require ("path");
const app = express();

//Configuramos el motor de plantilals

app.set("view engine" , "ejs");

app.use(express.static("public"));

//Configuramos donde se encuentran las vistas

app.set("views",path.resolve(__dirname, "views"));


//Metodos para mostrar las vistas

//Vista Home
const rutaHome = require("./routes/homeRouter.js");

app.use("/",rutaHome);

//Vista detalle del producto
const rutaProductDetail = require ("./routes/productDetailRouter.js");

app.use("/productDetail",rutaProductDetail);

//Vista carrito de compras
const rutaProductCart = require("./routes/productCartRouter.js");

app.use("/productCart",rutaProductCart);

//Vista registro
const rutaRegister = require("./routes/registerRouter.js");

app.use("/register",rutaRegister);

//Vista login
const rutaLogin = require("./routes/loginRouter.js");

app.use("/login",rutaLogin);

//Configuracion puerto
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Servidor funcionando en el puerto " + port) ;
});

//Vista Listado de Productos
const rutaListadoProductos = require("./routes/listadoProductosRouter.js");

app.use("/listadoProductos",rutaListadoProductos);