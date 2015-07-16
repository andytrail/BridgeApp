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

//exercise 3

var fs = require('fs');
console.log(process.argv[2]);
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
str.split('/n').length;
console.log(str);

