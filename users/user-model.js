const db = require("../data/db-config.js");

module.exports = {
  find,
  findByDepartment,
  findBy,
  findById,
  addUser
};

function find() {
  return db("users")
    .join("roles", "roles.id", "users.role_id")
    .select("users.username", "users.department", "roles.role");
}

function findByDepartment(department) {
  const myDepatment = department.department;
  return db("users")
    .join("roles", "roles.id", "users.role_id")
    .select("users.username", "users.department", "roles.role")
    .where("users.department", myDepatment);
}

function findBy(filter) {
  return db("users").where(filter);
}
function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

async function addUser(user) {
  // const [id] = await db("users").insert(user);
  console.log("user from model:", user);
  const [id] = await db("users").insert({
    username: user.username,
    password: user.password,
    department: user.department,
    role_id: db("roles")
      .select("id")
      .where("role", user.role)
  });

  return findById(id);
}
