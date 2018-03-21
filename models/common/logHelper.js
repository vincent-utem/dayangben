/**
 * Created by vincent on 2018/3/21.
 */
var log4js = require('log4js');
var config = require('../../config');

var logger = log4js.getLogger(config.log4jsConfig);
logger.level = 'debug';
logger.debug("Some debug messages");