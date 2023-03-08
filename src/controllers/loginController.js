const path = require ("path");

const loginController = {
    login: function(req,res) {
        const rutaCompleta = path.join(__dirname , "../views/login.html");
        res.sendFile(rutaCompleta);
    }
};

module.exports = loginController;