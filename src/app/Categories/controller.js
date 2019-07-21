import service from "./service";
import productService from "./products/service";


/**
 * Get records list.
 * @property {number} query.skip - Number of records to be skipped.
 * @property {number} query.limit - Limit number of records to be returned.
 * @property {array} query.sortBy - keys to use to record sorting.
 * @returns {Object}
 */
async function listCategories(req, res) {
  // get the list of categories
  const categoriesRecs = await service.findCategories({
    query: req.query,
    autoFormat: false
  });
  
  // check for categoriesRecs if no categories send empty response data array in response. 
  if(!categoriesRecs.length){
    return res.send({
      status: 200,
      data: categoriesRecs,
      message: "Successfully loaded"
    });
  }
  
  // fetch categoryIds to get the products.
  const categoryIds = categoriesRecs.map(category => category.id);

  // get the products by category.
  const products = await productService.getProductsByCategory({ categoryIds });

  // add the products associated with category to categories record.
  categoriesRecs.map(category => {
    const productArr = [];
    products.map(product => {
      if (category.id === product.category_id) {
        productArr.push(product);
        category.products = productArr;
      }
    });
  });

  // send the response(list of categories with products associated with it)
  res.send({
    status: 200,
    data: categoriesRecs,
    message: "Successfully loaded"
  });
}

export default {
  listCategories
};
