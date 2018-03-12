/**
 * Created by vincent on 2018/1/30.
 */
var express = require("express");
var path = require("path");
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var vash = require("vash");
vash.config.debug = true;

var app = express();

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'vash');
app.set('host', '127.0.0.1');
app.set('port', 8000);

app.get('/', function (req, res) {
    var model = { title : "Hello Vash" };
    res.render("index");
});

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(app.get("port"), function () {
    console.log(__dirname);
    console.log('dayangben APP listening at http://%s:%s', app.get("host"), app.get("port"));
});