const express = require('express')
const helmet = require('helmet')
const port = 9000;
const server = express()

server.use(helmet())
server.use(express.json())

server.get('/', (req, res) => res.send("En vivo"))

server.listen(port, () => console.log(`\n===Listening on ${port}===\n`))