module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/lambda.sqlite3'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
    useNullAsDefault: true
  }
};
