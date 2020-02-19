const db = require("../data/db-config.js");

module.exports = {
  findRole
};

function findRole(roleId) {
  return db("roles")
    .select("role")
    .where("id", roleId)
    .first();
}
