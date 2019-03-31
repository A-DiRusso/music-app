
const http = require('http');
const TopFive = require('../models/top-five');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer( async (req, res) => {
    console.log(req.url);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/top5') {
        const topFive = await TopFive.getAll();
        const topFiveJSON = JSON.stringify(topFive);
        res.end(topFiveJSON);
    } else {
        res.end(`{ message: "Top five songs about death: a laura's dad tribute!}`)
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});