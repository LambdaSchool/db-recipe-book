console.log("Greetings from index.js!");

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan');

const server = express();

server.use(express.json());
server.use(logger('combined'));
server.use(cors());
server.use(helmet());

//server testing message
server.get('/', (req, res) => {
    res.send('Server Is Up and Running!...Why are you just standing there! Go catch it!!!');
  });
  
const port = 9000;
server.listen(port, () => console.log(`API is walking proudly on port ${port}`));
