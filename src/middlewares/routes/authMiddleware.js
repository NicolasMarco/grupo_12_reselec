function authMiddleware(req, res, next) {
    if (req.session.usuarioLoggeado && req.session.usuarioLoggeado.idCategory == 2) {
      next();
    } else {
      res.redirect('/');
    }
  }

module.exports = authMiddleware;