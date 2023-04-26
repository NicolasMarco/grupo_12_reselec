const User = require ("../../models/Users");

function userLoggedMiddleware (req, res, next){
    res.locals.isLogged = false;
    res.locals.isAdmin = false;

    let usuarioEnCookie = req.cookies.nombreUsuario;
    let usuarioDeCookie = User.findByField("usuario", usuarioEnCookie);

    if(usuarioDeCookie){
        req.session.usuarioLoggeado = usuarioDeCookie;
    }

    if(req.session && req.session.usuarioLoggeado && req.session.usuarioLoggeado.administrador) {
        res.locals.isLogged = true;
        res.locals.isAdmin = true;
        res.locals.nombreUsuario = req.session.usuarioLoggeado.usuario;
    }
    
    else if(req.session && req.session.usuarioLoggeado){
        res.locals.isLogged = true;
        res.locals.usuarioLoggeado = req.session.usuarioLoggeado;
        res.locals.nombreUsuario = req.session.usuarioLoggeado.usuario;
    }

    next();
}

module.exports = userLoggedMiddleware;