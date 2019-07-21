import Knex from "../../../database/index";
const modelName = "products";

/**
 * Finding record with id
 * @property {array} categoryIds - record id.
 * @property {boolean} autoFormat - false if formatted output not needed.
 * @returns {record}
 */
async function getProductsByCategory({categoryIds}) {
  
  // get the list of categories and related products.
  const res = await Knex.raw(`select * from ${modelName} where status='active' and ${modelName}.category_id in (${categoryIds})`);
  
  return res[0];
}

export default { getProductsByCategory };
