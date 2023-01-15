module.exports = function isLoggedIn(req, res, next) {
  if (!req.session.login) {
    return res.redirect("/admin/login");
  }

  return next();
};
