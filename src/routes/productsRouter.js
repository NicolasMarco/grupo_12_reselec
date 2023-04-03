const express = require ("express");
const router = express.Router();
const multer = require ("multer");
const path = require("path");

let storage = multer.diskStorage({
    destination: function(req , file , cb) {
        cb(null , "public/images");
    },
    filename: function(req , file , cb) {
        cb(null , file.fieldname + "-" + Date.now() + path.extname(file.originalname) );
    }
});

const upload = multer({storage : storage});

const productsController = require ("../controllers/productsController.js");

//Todos los productos
router.get("/" , productsController.index);
//Agregar producto
router.get("/agregarProducto" , productsController.agregarProducto);
router.post("/" , upload.any("productImage") , productsController.guardarProducto);
//Editar producto
router.get("/editarProducto/:id/" , productsController.editarProducto);
router.patch('/editarProducto/:id/', upload.single("productImage"), productsController.patchProducto); 
//Carrito de compras
router.get("/productCart" , productsController.productCart);
//Detalle de producto
router.get("/productDetail/:id/" , productsController.productDetail);

module.exports = router;