const express = require('express');
const helmet = require('helmet');
const knex = require('knex')
const server = express();
const dbConfig = require('./db/knexfile')

const db = knex(dbConfig.development);

server.use(express.json());
server.use(helmet());

// endpoints here
 
server.get('/', (req, res) => {
  res.send('Api Online')
})








const port = 3800;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});