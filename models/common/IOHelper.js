/**
 * Created by vincent on 2018/3/20.
 */
var config = require('../../config');
var fs = require('fs');

function getDybDirectories() {
    fs.readdir(config.dybFilesPath, function(err, files){
        if (err) {
            return console.log(err);
        }
        files.forEach( function (file){
            console.log( typeof(file) );
        });
    });
}

getDybDirectories();