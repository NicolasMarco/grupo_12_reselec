const express = require ("express");
const router = express.Router();

const productsController = require ("../controllers/productsController.js");

//CargarProducto
router.get("/" , productsController.index);
router.get("/cargarProducto" , productsController.cargarProducto);
router.get("/editarProducto" , productsController.editarProducto);
router.get("/productCart" , productsController.productCart);
router.get("/productDetail" , productsController.productDetail);

module.exports = router;