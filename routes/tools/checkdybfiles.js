/**
 * Created by vincent on 2018/3/23.
 */
var express = require('express');
var router = express.Router();

var logHelper = require('../../models/common/logHelper');
var IOHelper = require('../../models/common/IOHelper');

var logger = logHelper.getLogger('routes');

/* GET home page. */
router.get('/', function(req, res, next) {
    var filepaths = [];
    IOHelper.getDybDirectories(function (filepath) {
        filepaths.push(filepath);
    });
logger.info(filepaths.length);
    res.render('checkdybfiles', {files: filepaths});
});

module.exports = router;