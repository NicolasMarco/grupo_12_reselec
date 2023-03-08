const express = require ("express");
const path = require ("path");
const rutaHome = require("./routes/home.js");

const app = express();

app.use(express.static("public"));

app.use("/",rutaHome);

app.get("/" , (req , res) => {
    
    const rutaCompleta = path.join(__dirname , "/views/index.html");
    res.sendFile(rutaCompleta);

});

app.get("/productDetail" , (req , res) => {
    
    const rutaCompleta = path.join(__dirname , "/views/productDetail.html");
    res.sendFile(rutaCompleta);

});

app.get("/productCart" , (req , res) => {
    
    const rutaCompleta = path.join(__dirname , "/views/productCart.html");
    res.sendFile(rutaCompleta);

});


app.get("/register" , (req , res) => {
    
    const rutaCompleta = path.join(__dirname , "/views/register.html");
    res.sendFile(rutaCompleta);

});

app.get("/login" , (req , res) => {
    
    const rutaCompleta = path.join(__dirname , "/views/login.html");
    res.sendFile(rutaCompleta);

});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Servidor funcionando en el puerto " + port) ;
});