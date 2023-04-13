const express = require ("express");
const router = express.Router();
const multer = require ("multer");
const path = require("path");

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

router.post("/login" ,upload.single("imagenUsuario"), usersController.userRegister);

module.exports = router;