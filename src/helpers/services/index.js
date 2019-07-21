import knex from "../../database/index";

/**
 * Finding records with provided query params
 * @property {string} modelName - Model name
 * @property {object} query - object containing params to prepare query.
 * @property {boolean} autoFormat - false if formatted output not needed.
 * @returns {records[]}
 */
const find = async ({
  modelName,
  query,
  customWhere,
  autoFormat = true,
  status = "active"
}) => {
  const { limit, skip = 0, sortBy } = query;

  const defaultWhere = {
    status
  };

  const where = {
    ...defaultWhere,
    ...customWhere
  };

  // preparing query filters
  const rawQuery = knex(modelName)
    .where(where)
    .offset(+skip)
    .select();

  if (limit) {
    rawQuery.limit(+limit);
  }

  // Getting records with available filters
  const recs = await rawQuery;

  // Returning formatted response if autoFormat true
  if (autoFormat) {
    return {
      status: 200,
      data: recs,
      message: "Successfully Loaded"
    };
  }
  // Otherwise returned db object
  return recs;
};

export default {
  find
};
