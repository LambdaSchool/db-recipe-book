const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile.js');

const server = express();

//connect to the database
const db = knex( knexConfig.development )

server.use(express.json());

server.get('/', (req, res) => {
    res.send('api working')
  });


  const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});