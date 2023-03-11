const express = require ("express");
const router = express.Router();
const editarProductoController = require ("../controllers/editarProductoController.js");

router.get("/" , editarProductoController.editarProducto);

module.exports = router;