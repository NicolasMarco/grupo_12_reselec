const express = require ("express");
const router = express.Router();
const listadoController = require ("../controllers/listadoProductosController.js");

router.get("/" , listadoController.listado);

module.exports = router;