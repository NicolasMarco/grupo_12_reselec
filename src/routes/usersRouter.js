const express = require ("express");
const router = express.Router();
const multer = require ("multer");
const path = require("path");
const { body } = require("express-validator");

const validations = [
    body("usuario").notEmpty().withMessage("* El campo usuario debe estar completo"),
    body("contraseña").notEmpty().withMessage("* El campo contraseña debe estar completo"),
    body("contraseñaRepetida").notEmpty().withMessage("* Debes volver a ingresar la contraseña"),
    body("nombre").notEmpty().withMessage("* El campo nombre debe estar completo"),
    body("apellido").notEmpty().withMessage("* El campo apellido debe estar completo"),
    body("email").notEmpty().withMessage("* El campo email debe estar completo"),
    body("telefono").notEmpty().withMessage("* El campo telefono debe estar completo")
];

let storage = multer.diskStorage({
    destination: function(req , file , cb) {
        cb(null , "public/images/users");
    },
    filename: function(req , file , cb) {
        cb(null , file.fieldname + "-" + Date.now() + path.extname(file.originalname) );
    }
});

const usersController = require ("../controllers/usersController.js");
const upload = multer({storage : storage});

router.get("/login" , usersController.login);
router.get("/register" ,  usersController.getRegister);

router.post("/login" ,upload.single("imagenUsuario"), validations , usersController.userRegister);

module.exports = router;