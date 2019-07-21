const dbTableName = "categories";

// https://knexjs.org/#Seeds-make

/*
  to run seeds, follow this steps:
  1. npm run knex seed:run;
*/

export const seed = async knex => {
  // Deletes ALL existing entries
  await knex(dbTableName).del();
  // Inserts seed entries
  return knex(dbTableName).insert([
    {
      name: "Beverages"
    },
    {
      name: "Foodgrains"
    },
    {
      name: "Fruits"
    }
  ]);
};
