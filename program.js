//var world = 'HELLO WORLD';


//console.log(world);


var total = 0;
for (var i = 0; i < process.argv.length; i++){

if (i >= 2) {
console.log(Number(process.argv[i]));
    total += Number(process.argv[i]);


}
    else {
    console.log('not a number');

    }
console.log(total);

}
