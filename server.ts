/// <reference path="src/node/node.d.ts" />
import http = require('http');


var server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end("Test");
});
server.listen(8000);
console.log("Listening on port 8000");

