

module.exports = function (dir, ext, callback){
var fs = require('fs')
var path = require('path');
var rest = [];
var exti = ext
    fs.readdir(dir, function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + exti)
          rest.push(file);
          console.log(file);
         })
    })

callback(null, rest);
};


/*

    var fs = require('fs')
    var path = require('path')

    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })

*/



