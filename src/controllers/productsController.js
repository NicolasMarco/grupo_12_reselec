const productsController = {
    index: (req,res) => {
        res.render("products/listadoProductos");
    },

    editarProducto: (req,res) => {
        res.render("products/editarProducto");
    },

    productCart: (req,res) => {
        res.render("products/productCart");
    },

    productDetail: (req,res) => {
        res.render("products/productDetail");
    },
    
    cargarProducto: function(req,res) {
        res.render("products/cargarProducto");
    }
};

module.exports = productsController;