const path = require ("path");

const productCartController = {
    productCart: function(req,res) {
        const rutaCompleta = path.join(__dirname , "../views/productCart.html");
        res.sendFile(rutaCompleta);
    }
};

module.exports = productCartController;