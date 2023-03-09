const homeController = {
    home: function(req,res) {
        res.render("main/index");
    }
};

module.exports = homeController;