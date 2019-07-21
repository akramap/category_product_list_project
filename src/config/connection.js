const database = {
    client: 'mysql2',
    connection: {
      port: 3306,
      host: 'localhost',
      database: 'appiness_project',
      user: 'root',
      password: 'root',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './src/database/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './src/database/seeders/',
    },
    debug: true,
  };

  export default database;