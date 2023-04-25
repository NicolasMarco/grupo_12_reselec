function guestMiddleware (req, res, next){
    if(req.session.usuarioLoggeado){
        return res.redirect("/")
    }
    next();
}

module.exports = guestMiddleware;