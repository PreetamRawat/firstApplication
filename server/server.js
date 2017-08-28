

var express = require('express')
var app = express()

var path = require('path');
var url = __dirname + '/../';

__dirname = path.join(url);



// app.use(express.static(__dirname + "/public"));
app.use('/static', express.static(__dirname + 'public'))
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
console.log("home page come");
    res.render(__dirname + '/public/index.html');
});

var port = process.env.PORT || 4443;

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
    console.log('Example app listening at  http://localhost:%s', port);
});