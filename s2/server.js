//const http = require('http');

import { createServer } from 'http';

const hostname = '127.0.0.1';
const port = process.env.port || 9090;
/**
 * Creer un serveur HTTP
 * @param (IncomingMessage) req
 * @param (ServerResponse) res
 */

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
})

/**
 * Run Server
 */

server.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}/`);
});


class Game{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
}

app.get('/entity',(req,res) =>{
    const game = new Game("dmc5",2019);
    res.status(200).json(game);
})