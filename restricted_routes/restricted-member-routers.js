const router = require("express").Router();
const Users = require("../users/user-model.js");

router.get("/users", (req, res) => {
  const { department } = req.decodedJWT;
  Users.findByDepartment({ department })
    .then(users => {
      res.send(users);
    })
    .catch(err => res.status(500).json({ message: "error getting users" }));
});

module.exports = router;
