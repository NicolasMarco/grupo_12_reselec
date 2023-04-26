const express = require ("express");
const path = require ("path");
const app = express();
const methodOverride = require('method-override');
const session = require("express-session");
const userLoggedMiddleware = require("./middlewares/global/userLoggedMiddleware");
const cookies = require("cookie-parser");

app.use(express.static(path.join(__dirname, '../public')));

//Configuramos donde se encuentran las vistas

app.set("view engine" , "ejs");
app.set("views",path.resolve(__dirname, "views"));

//Incluida para que podamos utilizar el metodo POST

app.use(express.urlencoded({extended : false}));
app.use(express.json());

//Incluida para que podamos utilizar el metodo PATCH y DELETE
app.use(methodOverride('_method'));

app.use(session({
    secret: "Frase secreta 841",
    resave: false,
    saveUninitialized: false
}));

app.use(cookies());
app.use(userLoggedMiddleware);


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

