const express = require ("express");
const path = require ("path");
const app = express();


app.use(express.static(path.join(__dirname, '../public')));

//Configuramos el motor de plantillas



//Configuramos donde se encuentran las vistas

app.set("view engine" , "ejs");
app.set("views",path.resolve(__dirname, "views"));


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

