exports.up = function(knex) {
  return knex.schema
    .createTable("roles", tbl => {
      tbl.increments();
      tbl
        .string("role", 128)
        .notNullable()
        .unique();
      tbl.string("description", 256);
    })
    .createTable("users", tbl => {
      tbl.increments();
      tbl
        .string("username", 128)
        .notNullable()
        .unique();
      tbl.string("password", 128).notNullable();
      tbl.string("department", 128).notNullable();
      tbl
        .integer("role_id")
        .notNullable()
        .unsigned()
        .references("roles.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("roles");
  return knex.schema.dropTableIfExists("users");
};
