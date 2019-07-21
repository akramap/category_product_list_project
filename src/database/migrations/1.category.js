const dbTableName = "categories";

// https://knexjs.org/#Migrations-make

/*
  to run migrations, follow this steps:
  1. npm run knex migrate:latest;
*/

/*
  Add altering commands here.
  Return a promise to correctly handle asynchronicity.

  export const up = knex =>
   knex.schema.createTable('users', t => { t.increments('id').primary(); });
  Example:
  */
export const up = async knex =>
  knex.schema.createTable(dbTableName, table => {
    table.increments("id").primary();
    table.enu("status", ["active", "deleted"]).defaultTo("active");
    table
      .dateTime("created_at")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table
      .dateTime("updated_at")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    table.string("name");
  });

/*
  Add reverting commands here.
  Return a promise to correctly handle asynchronicity.

  Example:
  export const down = knex => knex.schema.dropTable('users');
*/
export const down = async knex => knex.schema.dropTable(dbTableName);
