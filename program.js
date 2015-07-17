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





var fs = require('fs');
var brk =  undefined;


function calcReturns(callback) {
fs.readFile(process.argv[2], function doneCalc(err, fileContents) {
brk = fileContents.toString();
brk.split('\n');
brk = brk.length - 1;
    callback();
                                                                  })

                                                                  }
function logMyNumber() {
    console.log(brk);
}

calcReturns(logMyNumber);




