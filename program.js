//var world = 'HELLO WORLD';


//console.log(world);



for (var i = 0; i < process.argv.length; i++){

if (i >= 2) {
console.log(Number(process.argv[i]));

}
    else {
    console.log('not a number');

    }
}
