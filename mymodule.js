

module.exports = function (dir, ext, callback){
var fs = require('fs')
var path = require('path');

var rest = [dir, ext, 'this is the text'];

callback(null, rest);
};
