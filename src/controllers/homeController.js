const path = require ("path");

const homeController = {
    home: function(req,res) {
        const rutaCompleta = path.join(__dirname , "../views/index.html");
        res.sendFile(rutaCompleta);
    }
};

module.exports = homeController;