let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use('/js', express.static('js'));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/data", function(request, response){
    response.sendfile("index.html");
});
app.listen(8080);

app.post('/data', function (request, response) {
    checkBrowser(request.body.browser);
    let text = checkAjax(request.body.value);

    let object = {value : text};
    console.log(object);
    response.send(object);
});

function checkAjax(data) {
    if (data.toUpperCase() === data) {
        return data.toLowerCase();
    } else if (data.toLowerCase() === data) {
        return data.toUpperCase();
    }
}

function checkBrowser(data) {
    if (data === false){
        throw "error"
    }

}