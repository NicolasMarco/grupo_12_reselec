const express = require ("express");
const router = express.Router();
const cargarProductoController = require ("../controllers/cargarProductoController.js");

router.get("/" , cargarProductoController.cargarProducto);

module.exports = router;