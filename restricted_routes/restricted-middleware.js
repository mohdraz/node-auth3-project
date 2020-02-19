const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res
          .status(401)
          .json({ you: "have run into an error. please try again" });
      } else {
        req.decodedJWT = decodedToken;
        console.log("decoded: ", decodedToken);
        next();
      }
    });
  } else {
    res
      .status(401)
      .json({ you: "have an issue with your credential. please log in again" });
  }
};
