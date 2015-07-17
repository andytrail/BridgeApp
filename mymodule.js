var exports = module.exports = {};
var fs = require('fs');
var path = require('path');

exports.fs.readdir(process.argv[2], function getcount(err, contents){
if (err) return callback(err);
for (var i = 0; i < contents.length; i++){
var ptc = path.extname(contents[i]);
if (ptc == '.'+process.argv[3]) {

     console.log(contents[i]);
    }
    }

});

