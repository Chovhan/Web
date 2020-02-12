// http://127.0.0.1/echo?message=Hello -> Hello

function main() {
    var http = require('http');
    var url = require('url');

    var server = http.Server(function (req, resp) {

        var urlParsed = url.parse(req.url, true);
        checkUrl(urlParsed, resp);

    });
    server.listen(80, '127.0.0.1');
}

function checkUrl(urlParsed, resp) {
    if (urlParsed.pathname === "/echo" && urlParsed.query.message) {
        endResponse(resp, urlParsed.query.message);
    } else {
        resp.statusCode = '404';
        endResponse(resp, 'Page not found');
    }
}

function endResponse(resp, answer) {
    resp.end('Your url: ' + answer);
}

main();