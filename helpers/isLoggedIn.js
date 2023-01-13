module.exports = function isLoggedIn(req, res, next) {
  if (!req.session.login) {
    res.render("admin/ops");
    return;
  }

  return next();
};
