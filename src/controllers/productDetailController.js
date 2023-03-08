const path = require ("path");

const productDetailController = {
    productDetail: function(req,res) {
        const rutaCompleta = path.join(__dirname , "../views/productDetail.html");
        res.sendFile(rutaCompleta);
    }
};

module.exports = productDetailController;