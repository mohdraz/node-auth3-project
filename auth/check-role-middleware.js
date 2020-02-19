module.exports = role => {
  return function(req, res, next) {
    if (req.decodedJWT.roles && req.decodedJWT.roles.includes(role)) {
      next();
    } else {
      res
        .status(403)
        .json({ you: " do not have permission to views these users" });
    }
  };
};
