// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './recipeBook.sqlite3'
    },
    useNullAsDefault: true,
  },
};
