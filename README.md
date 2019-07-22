# Project

## Requirements

Recommended editor:
Visual Studio Code: https://code.visualstudio.com/Download

Prerequisite knowledge:
VS Code, ES6, Node, Mysql, Knex

System requirements:

- NODE Version : 8.9.0
- NPM Version : 5.5.1
- MYSQL: 8.0.16 

## Getting Started

Install dependencies:

```sh
npm install
```

Create db and Run migrations and seeds if needed
```sh
# To run the migrations
npm run knex migrate:latest; 

# To insert the seeds
npm run knex seed:run; 
```

### Available Scripts

- `npm run knex` - for using knex cli
- `npm run startD` - for starting  server with nodemon

### API can be accessed at 
/api/category/

### request
limit(number)
skip(number)
example: http://localhost:3000/api/category?limit=1&skip=1

### Dependencies
- [mysql2 - MySQL client for Node.js with focus on performance. Supports prepared statements, non-utf8 encodings, binary log protocol, compression, ssl](https://www.npmjs.com/package/mysql2)

- [body-parser - Node.js body parsing middleware](https://www.npmjs.com/package/body-parser)

- [express - Fast, unopinionated, minimalist web framework for node](https://www.npmjs.com/package/express)


- [@babel/cli - Babel command line](https://www.npmjs.com/package/@babel/cli)

- [@babel/core - Babel compiler core](https://www.npmjs.com/package/@babel/core)

- [@babel/node - Babel node](https://www.npmjs.com/package/@babel/node)

- [@babel/preset-env - A Babel preset that compiles ES2015+ down to ES5 by automatically determining the Babel plugins and polyfills you need based on your targeted browser or runtime environments](https://www.npmjs.com/package/@babel/preset-env)

- [@babel/register - required hook will bind itself to node's require and automatically compile files on the fly](https://www.npmjs.com/package/@babel/register)

- [nodemon - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected](https://www.npmjs.com/package/nodemon)

- [prettier - Prettier is an opinionated code formatter](https://www.npmjs.com/package/prettier)


