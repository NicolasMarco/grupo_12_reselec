const fs = require('fs');
const path = require('path');
let db = require("../../database/models");

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const productsController = {
    //Todos los productos
    index: (req,res) => {
        db.Product.findAll()
            .then(function(productos) {
                res.render("products/listadoProductos" , {productos : productos});
            })
    },
    //Edicion de producto
    editarProducto: (req,res) => {
        let pedidoProducto = db.Product.findByPk(req.params.id , {
            include: [{association: "categoryProduct"} , {association: "typeProduct"}]
        })

        let pedidoCategorias = db.CategoryProduct.findAll();

        let pedidoTiposProducto = db.TypeProduct.findAll();

        Promise.all([pedidoProducto , pedidoCategorias , pedidoTiposProducto])
            .then(function([product , categories , typeProducts]) {
                res.render("products/editarProducto", {product : product , categories : categories , typeProducts: typeProducts});
            })
    },
   
    //Carrito de compras
    productCart: (req,res) => {
        res.render("products/productCart");
    },
    //Detalle de producto
    productDetail: (req,res) => {
        db.Product.findByPk(req.params.id)
            .then(function(product) {
                res.render("products/productDetail" , {product: product});
            })

    },
    //Agregar producto nuevo
    agregarProducto: function(req,res) {
        db.CategoryProduct.findAll()
            .then(function(categorias) {
                db.TypeProduct.findAll()
                    .then(function(tiposProducto) {
                        res.render("products/agregarProducto" , {categorias:categorias , tiposProducto:tiposProducto})
                    })
            })
    },
    //Guardado de producto nuevo
    guardarProducto: function(req,res) {
        let imagenPrincipal = "";
        let imagenSecundaria1 = "";
        let imagenSecundaria2 = "";
        let imagenSecundaria3 = "";
        let imagenSecundaria4 = ""

        if (req.files[0]) {
            if (req.files[0].fieldname == "imagenPrincipal") {
                imagenPrincipal = req.files[0].filename;
            } else if (req.files[0].fieldname == "imagenSecundaria1") {
                imagenSecundaria1 = req.files[0].filename;
            } else if (req.files[0].fieldname == "imagenSecundaria2") {
                imagenSecundaria2 = req.files[0].filename;
            } else if (req.files[0].fieldname == "imagenSecundaria3") {
                imagenSecundaria3 = req.files[0].filename;
            } else if (req.files[0].fieldname == "imagenSecundaria4") {
                imagenSecundaria4 = req.files[0].filename;
            }

            if (req.files[1]) {
                if (req.files[1].fieldname == "imagenSecundaria1") {
                    imagenSecundaria1 = req.files[1].filename;
                } else if (req.files[1].fieldname == "imagenSecundaria2") {
                    imagenSecundaria2 = req.files[1].filename;
                } else if (req.files[1].fieldname == "imagenSecundaria3") {
                    imagenSecundaria3 = req.files[1].filename;
                } else if (req.files[1].fieldname == "imagenSecundaria4") {
                    imagenSecundaria4 = req.files[1].filename;
                }

                if (req.files[2]) {
                    if (req.files[2].fieldname == "imagenSecundaria2") {
                        imagenSecundaria2 = req.files[2].filename;
                    } else if (req.files[2].fieldname == "imagenSecundaria3") {
                        imagenSecundaria3 = req.files[2].filename;
                    } else if (req.files[2].fieldname == "imagenSecundaria4") {
                        imagenSecundaria4 = req.files[2].filename;
                    }

                    if (req.files[3]) {
                        if (req.files[3].fieldname == "imagenSecundaria3") {
                            imagenSecundaria3 = req.files[3].filename;
                        } else if (req.files[3].fieldname == "imagenSecundaria4") {
                            imagenSecundaria4 = req.files[3].filename;
                        }
                    }
                }
            }
        }
        
        db.Product.create({
            name: req.body.nombre,
            price: req.body.precio,
            characteristicOne: req.body.caracteristicaUno,
            characteristicTwo: req.body.caracteristicaDos,
            characteristicThree: req.body.caracteristicaTres,
            description: req.body.descripcion,
            mainImage: imagenPrincipal,
            imageTwo: imagenSecundaria1 == "" ? imagenPrincipal : imagenSecundaria1,
            imageThree: imagenSecundaria2 == "" ? imagenPrincipal : imagenSecundaria2,
            imageFour: imagenSecundaria3 == "" ? imagenPrincipal : imagenSecundaria3,
            imageFive: imagenSecundaria4 == "" ? imagenPrincipal : imagenSecundaria4,
            idCategory: req.body.categoria,
            idTypeProduct: req.body.tipoEquipo
        });

		res.redirect("/products");
    },

    //Editar un producto
    updateProducto: (req, res) => {
        let imagenPrincipal;
        let imagenSecundaria1;
        let imagenSecundaria2;
        let imagenSecundaria3;
        let imagenSecundaria4;
        let descripcion;

        db.Product.findByPk(req.params.id)
            .then(function(product) {
                imagenPrincipal = product.mainImage;
                imagenSecundaria1 = product.imageTwo;
                imagenSecundaria2 = product.imageThree;
                imagenSecundaria3 = product.imageFour;
                imagenSecundaria4 = product.imageFive;
                descripcion = product.description;

                if (req.files[0]) {
                    if (req.files[0].fieldname == "imagenPrincipal") {
                        imagenPrincipal = req.files[0].filename;
                    } else if (req.files[0].fieldname == "imagenSecundaria1") {
                        imagenSecundaria1 = req.files[0].filename;
                    } else if (req.files[0].fieldname == "imagenSecundaria2") {
                        imagenSecundaria2 = req.files[0].filename;
                    } else if (req.files[0].fieldname == "imagenSecundaria3") {
                        imagenSecundaria3 = req.files[0].filename;
                    } else if (req.files[0].fieldname == "imagenSecundaria4") {
                        imagenSecundaria4 = req.files[0].filename;
                    }
        
                    if (req.files[1]) {
                        if (req.files[1].fieldname == "imagenSecundaria1") {
                            imagenSecundaria1 = req.files[1].filename;
                        } else if (req.files[1].fieldname == "imagenSecundaria2") {
                            imagenSecundaria2 = req.files[1].filename;
                        } else if (req.files[1].fieldname == "imagenSecundaria3") {
                            imagenSecundaria3 = req.files[1].filename;
                        } else if (req.files[1].fieldname == "imagenSecundaria4") {
                            imagenSecundaria4 = req.files[1].filename;
                        }
        
                        if (req.files[2]) {
                            if (req.files[2].fieldname == "imagenSecundaria2") {
                                imagenSecundaria2 = req.files[2].filename;
                            } else if (req.files[2].fieldname == "imagenSecundaria3") {
                                imagenSecundaria3 = req.files[2].filename;
                            } else if (req.files[2].fieldname == "imagenSecundaria4") {
                                imagenSecundaria4 = req.files[2].filename;
                            }
        
                            if (req.files[3]) {
                                if (req.files[3].fieldname == "imagenSecundaria3") {
                                    imagenSecundaria3 = req.files[3].filename;
                                } else if (req.files[3].fieldname == "imagenSecundaria4") {
                                    imagenSecundaria4 = req.files[3].filename;
                                }
                            }
                        }
                    }
                }

                db.Product.update({
                    name: req.body.nombre,
                    price: req.body.precio,
                    characteristicOne: req.body.caracteristicaUno,
                    characteristicTwo: req.body.caracteristicaDos,
                    characteristicThree: req.body.caracteristicaTres,
                    description: req.body.descripcion == "" ? descripcion : req.body.descripcion,
                    mainImage: imagenPrincipal,
                    imageTwo: imagenSecundaria1 == "" ? imagenPrincipal : imagenSecundaria1,
                    imageThree: imagenSecundaria2 == "" ? imagenPrincipal : imagenSecundaria2,
                    imageFour: imagenSecundaria3 == "" ? imagenPrincipal : imagenSecundaria3,
                    imageFive: imagenSecundaria4 == "" ? imagenPrincipal : imagenSecundaria4,
                    idCategory: req.body.categoria,
                    idTypeProduct: req.body.tipoEquipo
                } , {
                    where: {
                        id: req.params.id
                    }
                });

                res.redirect("/products");
            })
    },

    //Borrar un producto
    borrarProducto: function(req,res) {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        
		res.redirect("/products");
    }
    
};


module.exports = productsController;