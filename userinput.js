var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question('What is your name? ', function(name){
    console.log("Hello and Welcome to AMDT " +name);
});