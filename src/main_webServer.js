const myPowers = require('../src/common/util/math/myPowers');
var express = require('express');
var app = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.get('/', function(req, res) {
    var data2template = {
        head: { title: 'Hello express' }
    };
    res.render('pages/home.ejs', data2template);
});

app.get('/square', function(req, res) {
    var inpNumber = 2;
    var data2template = {
        head: { title: 'Square Page' },
        inpNumber: 2,
        resultNumber: myPowers.toSquare(inpNumber)
    };
    res.render('pages/square', data2template);
});

app.get('/cube', function(req, res) {
    inpNumber = 3;
    var data2template = {
        head: { title: 'Cube Page' },
        inpNumber: 3,
        resultNumber: myPowers.toCube(inpNumber)
    };
    res.render('pages/cube', data2template);
});

app.get('/about', function(req, res) {
    res.status(200).render('pages/about.html');
});

app.get('/*', function(req, res) {
    res.status(404).render('pages/error', { head: { title: 'Error' } });
});


var server = app.listen(8015, function() {
    console.log(
        'express app, hello_express_basic, started and listening at port 8015',
        server.address().address,
        server.address().port);
});