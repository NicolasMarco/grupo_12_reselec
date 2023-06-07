const express = require ("express");
const router = express.Router();
const multer = require ("multer");
const path = require("path");
const authMiddleware = require("../middlewares/routes/authMiddleware")
const { body } = require("express-validator");

const validations = [
    body("nombre").notEmpty().withMessage("* El campo nombre debe estar completo").bail().isAlphanumeric().withMessage("* El nombre del producto solo puede contener letras o numeros").isLength({ min:5 }).withMessage("* El nombre debe tener al menos cinco caracteres"),
    body("precio").notEmpty().withMessage("* El campo precio debe estar completo").bail().isInt().withMessage("* El precio debe ser expresado en numeros"),
    body("categoria").notEmpty().withMessage("* Debes volver a ingresar la contraseña").bail(),
    body("tipoEquipo").notEmpty().withMessage("* El campo nombre debe estar completo").bail(),
    body("caracteristicaUno").notEmpty().withMessage("* El campo debe estar completo").bail(),
    body("caracteristicaDos").notEmpty().withMessage("* El campo debe estar completo").bail().isEmail().withMessage("* El formato del email es invalido"),
    body("caracteristicaTres").notEmpty().withMessage("* El campo debe estar completo").bail(),
    body("descripcion").notEmpty().withMessage("* El campo descripcion debe estar completo").bail().isLength({ min:20 }).withMessage("* La descripcion debe tener al menos 20 caracteres"),
];

let storage = multer.diskStorage({
    destination: function(req , file , cb) {
        cb(null , "public/images/products");
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
router.get("/agregarProducto" , authMiddleware, productsController.agregarProducto);
router.post("/" , upload.any("productImage"), validations , productsController.guardarProducto);
//Editar producto
router.get("/editarProducto/:id", authMiddleware, productsController.editarProducto);
router.patch("/editarProducto/:id", upload.any("productImage"), validations, productsController.updateProducto);
//Borrar producto
router.delete("/delete/:id", authMiddleware, productsController.borrarProducto); 
//Carrito de compras
router.get("/productCart" , productsController.productCart);
//Detalle de producto
router.get("/productDetail/:id" , productsController.productDetail);

module.exports = router;