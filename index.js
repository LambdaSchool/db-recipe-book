const express = require('express');
const helmet = require('helmet');



const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('API Running...');
});



server.listen(9000, () => console.log('Server running on port 9000'));