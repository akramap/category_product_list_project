import commonService from "../../helpers/services/index"
const modelName = "categories";

/**
 * Finding record with id
 * @property {object} query - object containing params to prepare query.
 * @property {boolean} autoFormat - false if formatted output not needed.
 * @returns {record}
 */
async function findCategories({ query,autoFormat = true }) {
  
  // get the list of categories and related products.
  const res = await commonService.find({
    modelName,
    query,
    autoFormat,
  });
   
  return res;
}

export default { findCategories };
