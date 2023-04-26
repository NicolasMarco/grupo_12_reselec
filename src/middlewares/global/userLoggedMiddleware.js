const User = require ("C:/Users/corde/grupo_12_reselec/src/models/Users");

function userLoggedMiddleware (req, res, next){
    res.locals.isLogged = false;

    let usuarioEnCookie = req.cookies.usuarioLoggeado;
    let usuarioDeCookie = User.findByField("usuario", usuarioEnCookie);

    if(usuarioDeCookie){
        req.session.usuarioLoggeado = usuarioDeCookie;
    }
    
    if(req.session && req.session.usuarioLoggeado){
        res.locals.isLogged = true;
        res.locals.usuarioLoggeado = req.session.usuarioLoggeado;
    }
    next();
}

module.exports = userLoggedMiddleware;