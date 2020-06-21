const net = require('net');
const { parse } = require('./gt06n.js');

const server = net.createServer((connection) => {
    connection.setEncoding('hex');
    connection.on('data', (data) => {
        let result = parse(data);
        console.log('result', result);
    });
});

server.on('error', (err) => {
    throw err;
});
server.listen(9000, () => {
    console.log('server listen port: 9000');
});

