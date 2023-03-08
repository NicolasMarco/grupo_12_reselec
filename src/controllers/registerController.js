const path = require ("path");

const registerController = {
    register: function(req,res) {
        const rutaCompleta = path.join(__dirname , "../views/register.html");
        res.sendFile(rutaCompleta);
    }
};

module.exports = registerController;