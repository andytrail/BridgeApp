

module.exports = function (dir, ext, callback){
var fs = require('fs')
var path = require('path');
var rest = [dir, ext, 'this is the text'];
     fs.readdir(dir, function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + ext)
          rest.push(file)
         }
                   }
}
callback(null, rest);
};

