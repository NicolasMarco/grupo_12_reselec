const fs = require('fs');
const path = require('path');
let db = require("../../database/models");
const Op = require("sequelize").Op;

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");

const usersController = {
    login: (req,res) => {
        res.render("users/login")
    },

    loginUser: (req,res) => {
        db.User.findOne({
            attributes: ["userName" , "password"],
            where: {
                userName: req.body.usuario
            },
        })

        .then(function(user) {
            let compararContraseña = bcryptjs.compareSync(req.body.password , user.password);
            if (compararContraseña) {
                db.User.findOne({
                    attributes: { exclude: ["password"]},
                    where: {
                        userName: req.body.usuario
                    }
                })
                    .then(function(userSinPassword) {
                        req.session.usuarioLoggeado = userSinPassword;
                        if (req.body.recordameButton){
                            res.cookie("nombreUsuario", req.body.usuario, { maxAge: (1000 * 60) * 60})
                        }
                        res.redirect("/");
                    })
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
        })

        .catch(function(error) {
            return res.render("users/login" , {
                errors: {
                    password: {
                        msg: "* El usuario ingresado no esta registrado"
                    }
                },
                oldData: req.body
            });
        })
    },

    getRegister: (req,res) => {
        res.render("users/register");
    },

    userRegister: (req,res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("users/register" , {
                errors: resultValidation.mapped() , 
                oldData: req.body
            });
        }

        db.User.findOne({
            where: {
                [Op.or]: [
                    {userName: req.body.usuario},
                    {email: req.body.email}
                ]
            }
        })

            .then(function(user) {
                if (user.email == req.body.email && user.userName == req.body.usuario) {
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
                } else if (user.email == req.body.email) {
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
            })

            .catch(function(error) {
                let contraseñaEncriptada = bcryptjs.hashSync(req.body.password,10);

                db.User.create({
                    userName: req.body.usuario,
                    password: contraseñaEncriptada,
                    name: req.body.nombre,
                    lastName: req.body.apellido,
                    email: req.body.email,
                    phoneNumber: req.body.telefono,
                    userImage: req.file ? req.file.filename : "default.png",
                    idCategory: req.body.passwordAdmin ? 2 : 1
                });

                res.redirect("/users/login");
            })
    },
    
    logout: (req, res) => {
        res.clearCookie("nombreUsuario");
        req.session.destroy(function(err){
          if(err){
            console.log(err);
          } else {
            res.redirect('/users/login');
          }
        });
    },

    userDetail: (req,res) => {
        console.log("Esta es la id: " + req.params.id);
        db.User.findByPk(req.params.id)
            .then(function(user) {
                res.render("users/userDetail" , {user: user});
            })
    }
};

module.exports = usersController;