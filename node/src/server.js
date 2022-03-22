const http = require('http');
const router = require('./app');

const server = http.createServer(router);

server.listen(3000, () => console.log('Running on http://localhost:3000'));
