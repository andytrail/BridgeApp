
var fs = require('fs')
var path = require('path')



calc = function (dir, ext, results, err){

var results = dir+'  '+ext;
          return results;

};

exports.calc = calc;




/*

fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })
*/

