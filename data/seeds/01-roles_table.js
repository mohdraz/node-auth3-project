exports.seed = function(knex) {
  return knex("roles")
    .truncate()
    .then(function() {
      return knex("roles").insert([
        { role: "admin", description: "has full access" },
        { role: "member", description: "has limited access" }
      ]);
    });
};
