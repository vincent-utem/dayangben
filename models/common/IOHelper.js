/**
 * Created by vincent on 2018/3/20.
 */
var config = require('../../config');
var fs = require('fs');
var logHelper = require('./logHelper');

var logger = logHelper.getLogger('models');

function getDybDirectories() {

    fs.readdir(config.dybFilesPath, function(err, files){
        if (err) {
            return console.log(err);
        }
        files.forEach( function (file){
            logger.info(file);
        });
    });
}

getDybDirectories();