let db = require("../../database/models");


const apiController = {
    users: (req,res) => {
        db.User
            .findAll({
                attributes: { exclude: ["password"]}
            })

            .then(users => {
                let finalUsers = [];

                users.forEach((user) => {
                    finalUsers.push({
                        id: user.id,
                        name: user.productName,
                        email: user.email,
                        detail: "http://localhost:3001/users/detail/" + user.id
                    })
                })
                return res.status(200).json({
                    count: users.length,
                    users: finalUsers
                })
            })
    },
    
    oneUser: (req,res) => {
        db.User
            .findByPk(req.params.id)
            
            .then(user => {
                delete user.password;
                let userAdmin;
                user.idCategory == 2 ? userAdmin = true : userAdmin = false;
                return res.status(200).json({
                    id: user.id,
                    userName: user.userName,
                    name: user.name,
                    lastName: user.lastName,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    userImage: user.userImage,
                    admin: userAdmin
                })
            })
    },

    products: (req,res) => {
        
        db.Product
            .findAll({include: [{association: "categoryProduct"} , {association: "typeProduct"}]})

            .then(products => {
                let finalproducts = [];
                let resistencias = 0;
                let medicion = 0;
                let conexion = 0;
                products.forEach((product) => {
                    switch(product.typeProduct.id) {
                        case 1: 
                            resistencias++;
                            break;
                        case 2:
                            medicion++;
                            break;
                        case 3:
                            conexion++;
                            break;
                        default:
                            break;
                    }
                    finalproducts.push({
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        price: product.price,
                        image: product.mainImage,
                        categoria: product.typeProduct.name,
                        detail: "http://localhost:3000/products/productDetail/" + product.id
                    })
                })
                return res.status(200).json({
                    count: products.length,
                    countByCategory: {
                        resistencias: resistencias,
                        medicion: medicion,
                        conexion: conexion
                    },
                    categories: 3,
                    products: finalproducts
                })
            })
    },

    oneProduct: (req,res) => {
        db.Product.findByPk(req.params.id , {
            include: [{association: "categoryProduct"} , {association: "typeProduct"}]
        })
            .then((product) => {
                console.log(product);
                return res.status(200).json({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    characteristicOne: product.characteristicOne,
                    characteristicTwo: product.characteristicTwo,
                    characteristicThree: product.characteristicThree,
                    description: product.description,
                    mainImage: product.mainImage,
                    imageTwo: product.imageTwo,
                    imageThree: product.imageThree,
                    imageFour: product.imageFour,
                    imageFive: product.imageFive,
                    category: product.categoryProduct.name,
                    typeProduct: product.typeProduct.name
                })
            })
    },
}

module.exports = apiController;