/**
 * Created by vincent on 2018/3/20.
 */

var fs = require('fs');
var path = require('path');

var config = require('../../config');
var logHelper = require('./logHelper');

var logger = logHelper.getLogger('models');

function getDybDirectories(callback) {
    fs.readdir(config.dybFilesPath, function(err, files){
        if (err) {
            logger.error(err);
        }
        files.forEach( function (file){
            var filePath = path.normalize(config.dybFilesPath + '/' + file);
            fs.stat(filePath, function (err, stat) {
                if(stat.isDirectory()) {
                    logger.info("检测到目录 " + filePath);
                    if(typeof(callback) == "function")
                        callback(filePath);
                }
            });
        });
    });
}

exports.getDybDirectories = getDybDirectories;