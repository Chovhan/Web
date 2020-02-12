// http://127.0.0.1/echo?message=Hello -> Hello

var http = require('http');
var url = require('url');

var server = http.Server(function (req, resp) {
    console.log(req.headers);

    var urlParsed = url.parse(req.url, true);
    console.log(urlParsed);

    if(urlParsed.pathname === "/echo" && urlParsed.query.message){
        resp.end(urlParsed.query.message);
    } else {
        resp.statusCode = '404';
        resp.end('Page not found');
    }
});
server.listen(80, '127.0.0.1');