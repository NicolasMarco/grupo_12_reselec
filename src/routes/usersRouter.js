const express = require ("express");
const router = express.Router();
const multer = require ("multer");
const path = require("path");
const { body } = require("express-validator");
const guestMiddleware = require("../middlewares/routes/guestMiddleware");


const validations = [
    body("usuario").notEmpty().withMessage("* El campo usuario debe estar completo").bail().isAlphanumeric().withMessage("* El nombre de usuario solo puede contener letras o numeros"),
    body("password").notEmpty().withMessage("* El campo contraseña debe estar completo"),
    body("passwordRepetida").notEmpty().withMessage("* Debes volver a ingresar la contraseña").bail().
    custom((value , { req }) => {
        let passwordOriginal = req.body.password;
        let passwordRepetida = req.body.passwordRepetida;

        if (passwordOriginal && passwordOriginal !== passwordRepetida) {
            throw new Error("* Las contraseñas no coinciden");
        }

        return true;
    }),
    body("nombre").notEmpty().withMessage("* El campo nombre debe estar completo"),
    body("apellido").notEmpty().withMessage("* El campo apellido debe estar completo"),
    body("email").notEmpty().withMessage("* El campo email debe estar completo").bail().isEmail().withMessage("* El formato del email es invalido"),
    body("telefono").notEmpty().withMessage("* El campo telefono debe estar completo"),
    body("passwordAdmin").custom((value , { req }) => {
        let passwordIngresada = req.body.passwordAdmin;
        if (passwordIngresada && passwordIngresada !== "123456") {
            throw new Error("* Las contraseña de administrador ingresada no es correcta");
        }

        return true;
    })
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

router.get("/login" , guestMiddleware, usersController.login);
router.post("/login" , usersController.loginUser);


router.get("/register" , guestMiddleware, usersController.getRegister);
router.post("/register" ,upload.single("imagenUsuario"), validations , usersController.userRegister);

router.get('/logout', usersController.logout);
router.post('/logout', usersController.logout);

module.exports = router;