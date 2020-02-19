const router = require("express").Router();
const Users = require("../users/user-model.js");

router.get("/users", (req, res) => {
  Users.find()
    .then(users => {
      res.send(users);
    })
    .catch(err => res.status(500).json({ message: "error getting users" }));
});
module.exports = router;
