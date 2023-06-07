const express = require ("express");
const router = express.Router();
const multer = require ("multer");
const path = require("path");
const authMiddleware = require("../middlewares/routes/authMiddleware")
const { body } = require("express-validator");

const validations = [
    body("nombre").notEmpty().withMessage("* El campo nombre debe estar completo").bail().isLength({ min:5 }).withMessage("* El nombre debe tener al menos 5 caracteres"),
    body("precio").notEmpty().withMessage("* El campo precio debe estar completo").bail().isNumeric().withMessage("* El precio debe ser expresado en numeros"),
    body("categoria").custom((value , { req }) => {
        if (req.body.categoria == "disabled") {
            throw new Error("* Debe seleccionar una categoria");
        }

        return true;
    }),
    body("tipoEquipo").custom((value , { req }) => {
        if (req.body.tipoEquipo == "disabled") {
            throw new Error("* Debe seleccionar una opcion");
        }

        return true;
    }),
    body("caracteristicaUno").notEmpty().withMessage("* El campo debe estar completo").bail().isLength({ min:5 }).withMessage("* Debe tener al menos 5 caracteres"),
    body("caracteristicaDos").notEmpty().withMessage("* El campo debe estar completo").bail().isLength({ min:5 }).withMessage("* Debe tener al menos 5 caracteres"),
    body("caracteristicaTres").notEmpty().withMessage("* El campo debe estar completo").bail().isLength({ min:5 }).withMessage("* Debe tener al menos 5 caracteres"),
    body("imagenPrincipal").custom((value , { req }) => {
        let file = req.files[0];
        let extensiones = [".jpg" , ".png" , ".jpeg" , ".gif"];

        if(file) {
            let extensionArchivo = path.extname(file.originalname);

            if (!extensiones.includes(extensionArchivo)) {
                throw new Error("* El archivo debe tener extension .jpg - .png - .jpeg - .gif");
            }
        }

        return true;
    })
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