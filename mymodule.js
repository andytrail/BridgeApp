
var fs = require('fs')
var path = require('path')

exports.world = function() {
    //console.log('hello world');
message = 'Hello World';
return message;


};




exports.calc = function (dir, ext){

fs.readdir(dir, function (err, list) {
    var results = [];
      list.forEach(function (file) {
        if (path.extname(file) === '.' + ext);
          results.push(file);
          return results;
      });
    });

};







/*

fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })
*/

