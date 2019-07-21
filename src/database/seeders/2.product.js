const dbTableName = "products";

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
      name: "Coffee",
      availability: true,
      category_id: 1
    },
    {
      name: "Tea",
      availability: true,
      category_id: 1
    },
    {
      name: "Chocolate",
      availability: true,
      category_id: 1
    },
    {
      name: "Juice",
      availability: false,
      category_id: 1
    },
    {
      name: "Atta and Flours",
      availability: true,
      category_id: 2
    },
    {
      name: "Dals and Pulses",
      availability: true,
      category_id: 2
    },
    {
      name: "Rice and Rice Products",
      availability: true,
      category_id: 2
    },
    {
      name: "Mangoes",
      availability: false,
      category_id: 3
    },
    {
      name: "Banana,Sapota and Papaya",
      availability: true,
      category_id: 3
    },
    {
      name: "Apples and Promogranate",
      availability: true,
      category_id: 3
    }
  ]);
};
