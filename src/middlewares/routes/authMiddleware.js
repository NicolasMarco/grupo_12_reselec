function authMiddleware(req, res, next) {
    if (req.session.usuarioLoggeado.administrador) {
      next();
    } else {
      res.redirect('/');
    }
  }

module.exports = authMiddleware;