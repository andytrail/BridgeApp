

module.exports = function (dir, ext, callback){
var fs = require('fs')
var path = require('path');
var rest = [dir, ext, 'this is the text'];
fs.readdir(dir, function getcount(err, contents){
for (var i = 0; i < contents.length; i++){
var ptc = path.extname(contents[i]);
if (ptc == '.'+ext) {
    rest.push(contents);
}
}
}
callback(null, rest);
};

