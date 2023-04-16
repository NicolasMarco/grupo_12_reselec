const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");

const usersController = {
    login: (req,res) => {
        res.render("users/login")
    },

    loginUser: (req,res) => {
        const usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

        
        let usuarioIngresado = usuarios.find((usuario) => {
            return (usuario.usuario == req.body.usuario);
        });
        
        
        if (usuarioIngresado) {
            let compararContraseña = bcryptjs.compareSync(req.body.password , usuarioIngresado.password);
            if (compararContraseña) {
                delete usuarioIngresado.password;
                req.session.usuarioLoggeado = usuarioIngresado;
                res.redirect("/");
            } else {
                return res.render("users/login" , {
                    errors: {
                        password: {
                            msg: "* La contraseña es incorrecta"
                        }
                    },
                    oldData: req.body
                });
            }
        
        } else {
            return res.render("users/login" , {
                errors: {
                    password: {
                        msg: "* El usuario ingresado no esta registrado"
                    }
                },
                oldData: req.body
            });
        }
    },

    getRegister: (req,res) => {
        let nombreUsuario = "";

        if (req.session.usuarioLoggeado) {
            nombreUsuario = req.session.usuarioLoggeado.usuario;
        }

        res.render("users/register" , {nombreUsuario});
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

        let usuarioExistente = usuarios.find((usuario) => {
            return (usuario.email == req.body.email || usuario.usuario == req.body.usuario);
        });

        if (usuarioExistente) {
            if (usuarioExistente.email == req.body.email && usuarioExistente.usuario == req.body.usuario) {
                return res.render("users/register" , {
                    errors: {
                        email: {
                            msg: "* El email ingresado ya esta registrado"
                        },
                        usuario: {
                            msg: "* El usuario ingresado ya esta registrado"
                        }
                    },
                    oldData: req.body
                });
            } else if (usuarioExistente.email == req.body.email) {
                return res.render("users/register" , {
                    errors: {
                        email: {
                            msg: "* El email ingresado ya esta registrado"
                        }
                    },
                    oldData: req.body
                });
            } else {
                return res.render("users/register" , {
                    errors: {
                        usuario: {
                            msg: "* El usuario ingresado ya esta registrado"
                        }
                    },
                    oldData: req.body
                }); 
            }
        }

        let contraseñaEncriptada = bcryptjs.hashSync(req.body.password,10);
    
        let usuarioACargar =  {
            id: usuarios.length > 0 ? (usuarios[usuarios.length-1].id + 1) : 1,
            usuario: req.body.usuario,
            password: contraseñaEncriptada,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            telefono: req.body.telefono,
            imagen: req.file ? req.file.filename : "default.png",
            administrador: req.body.passwordAdmin ? true : false
        };

        usuarios.push(usuarioACargar);

		let usuariosJSON = JSON.stringify(usuarios, null, " ");

		fs.writeFileSync(usersFilePath , usuariosJSON);
        
		res.redirect("/users/login");
    }
};

module.exports = usersController;