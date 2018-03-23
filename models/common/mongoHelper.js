/**
 * Created by vincent on 2018/3/23.
 */


var config = require('../../config');
var logHelper = require('./logHelper');
var IOHelper = require('./IOHelper');

var logger = logHelper.getLogger('models');

IOHelper.getDybDirectories(function (dirname) {
    logger.info(dirname);
});

