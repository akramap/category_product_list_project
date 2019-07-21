// Getting config from environment based config file
import database from './src/config/connection';

// https://knexjs.org/#knexfile

// exporting db config for knex migrations and seeds
module.exports = database;

