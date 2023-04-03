const express = require ("express");
const path = require ("path");
const app = express();
const methodOverride = require('method-override');


app.use(express.static(path.join(__dirname, '../public')));

//Configuramos donde se encuentran las vistas

app.set("view engine" , "ejs");
app.set("views",path.resolve(__dirname, "views"));

//Incluida para que podamos utilizar el metodo PATCH y DELETE
app.use(methodOverride('_method'));


//Metodos para mostrar las vistas

//HOME
const rutaHome = require("./routes/homeRouter.js");
app.use("/",rutaHome);

//PRODUCTOS
const productsRouter = require ("./routes/productsRouter.js");
app.use('/products', productsRouter);

//USUARIOS
const usersRouter = require ("./routes/usersRouter.js");
app.use('/users', usersRouter);

//Configuracion puerto
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Servidor funcionando en el puerto " + port) ;
});

