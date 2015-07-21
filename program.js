//exercise 1
//var world = 'HELLO WORLD';
//console.log(world);

//exercise 2
/*var total = 0;
for (var i = 0; i < process.argv.length; i++){

if (i >= 2) {
//console.log(Number(process.argv[i]));
    total += Number(process.argv[i]);


}
    else {
   // console.log('not a number');

    }


}
console.log(total);*/

/*//exercise 3
var line = 0;
var brk = 0;
var fs = require('fs');
//console.log(process.argv[2]);
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
line = str.split('\n');
brk = line.length;
brk = brk -1 ;
console.log(brk);*/

//console.log(line[0]);

//exercise 4





/*
var fs = require('fs');
var brk =  undefined;


function calcReturns(callback) {
fs.readFile(process.argv[2], function doneCalc(err, fileContents) {
if (err) return console.error(err);
    var str = fileContents.toString();
var line = str.split('\n');
brk = line.length;
brk = brk - 1;
    callback();
                                                                  })

                                                                  }
function logMyNumber() {
    console.log(brk);
}

calcReturns(logMyNumber);


//Actual solution:
    var fs = require('fs')
    var file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })


*/

//exercise 5

/*
var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];
var list = []


fs.readdir(dir, function getcount(err, contents){
if (err) return console.error(err);
for (var i = 0; i < contents.length; i++){
var ptc = path.extname(contents[i]);
if (ptc == '.'+ext) {

     console.log(contents[i]);
    }
    }

});

//Actual solution

    var fs = require('fs')
    var path = require('path')

    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })

*/


//excercise 6

var fs = require('fs');
var path = require('path');
var mymodule = require('./mymodule');
var callback = undefined;

calc(process.argv[2], process.argv[3], callback);

console.log(mymodule.calc.callback);

