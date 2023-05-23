const User = require ("../../models/Users");
let db = require ("../../../database/models");

function userLoggedMiddleware (req, res, next){
    res.locals.isLogged = false;
    res.locals.isAdmin = false;

    let usuarioEnCookie = req.cookies.nombreUsuario;

    //let usuarioDeCookie = User.findByField("usuario", usuarioEnCookie);
    

    if(usuarioEnCookie) {
        db.User.findOne({
            attributes: {exclude : ["password"]},
            where: {
                userName : usuarioEnCookie
            }
        })
    
            .then(function(usuarioDeCookie) {
                req.session.usuarioLoggeado = usuarioDeCookie;

                if(req.session && req.session.usuarioLoggeado && req.session.usuarioLoggeado.idCategory == 2) {
                    res.locals.isLogged = true;
                    res.locals.isAdmin = true;
                    res.locals.nombreUsuario = req.session.usuarioLoggeado.userName;
                }
                
                else if(req.session && req.session.usuarioLoggeado){
                    res.locals.isLogged = true;
                    res.locals.usuarioLoggeado = req.session.usuarioLoggeado;
                    res.locals.nombreUsuario = req.session.usuarioLoggeado.userName;
                }

                next();
            })
    }
    
    /*
    if(usuarioDeCookie){
        req.session.usuarioLoggeado = usuarioDeCookie;
    }*/
    else {
        if(req.session && req.session.usuarioLoggeado && req.session.usuarioLoggeado.idCategory == 2) {
            res.locals.isLogged = true;
            res.locals.isAdmin = true;
            res.locals.nombreUsuario = req.session.usuarioLoggeado.userName;
        }
        
        else if(req.session && req.session.usuarioLoggeado){
            res.locals.isLogged = true;
            res.locals.usuarioLoggeado = req.session.usuarioLoggeado;
            res.locals.nombreUsuario = req.session.usuarioLoggeado.userName;
        }

        next();
    }

    //next();
}

module.exports = userLoggedMiddleware;