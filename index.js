// # Assignments #1 - Create a cli

// Create a `command line interface` that lets the user specify a file path and 
// the nodejs process counts the number of words inside it.

// First let's do this
//Create a node.js program that let's you read through a file (that it takes as an input) and counts the number
// of words in it 
//Solution 1
const fs = require("fs");

function main(fileName) {
    fs.readFile(fileName, "utf-8", function(err, data) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            if(data[i] === " ") {
                total++;
            }
        }
        console.log(total + 1); //number of words = number of spaces+1
    })
}

main(process.argv[2]); 

//Any command line interface gives us a help keyword, for eg, node -h.
// So this should also work if you are creating your own CLI.