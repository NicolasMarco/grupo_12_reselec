const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const { validationResult } = require("express-validator");

const usersController = {
    login: (req,res) => {
        res.render("users/login");
    },

    getRegister: (req,res) => {
        res.render("users/register");
    },

    userRegister: (req,res) => {
        const usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("users/register" , {
                errors: resultValidation.mapped() , 
                oldData: req.body
            });
        }
        let usuarioACargar =  {
            id: (usuarios[usuarios.length-1].id + 1),
            usuario: req.body.usuario,
            contraseña: req.body.contraseña,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            telefono: req.body.telefono,
            imagen: req.file ? req.file.filename : "default.png",
            administrador: true
        };

        usuarios.push(usuarioACargar);

		let usuariosJSON = JSON.stringify(usuarios, null, " ");

		fs.writeFileSync(usersFilePath , usuariosJSON);
        
		res.redirect("/users/login");
    }
};

module.exports = usersController;