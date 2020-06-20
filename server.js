const http = require('http');
const app = require('./app');

//take port from env ..if not exists use port 3000
const port = process.env.PORT || 3000

const server = http.createServer(app);


server.listen(port);