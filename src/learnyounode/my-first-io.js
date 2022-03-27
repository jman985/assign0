const fs = require('fs');

const buf = fs.readFileSync(process.argv[2]);

const str = buf.toString();

const lineSplit = str.split("\n")
let lineCount = 0

for(i=0; i<lineSplit.length; i++){

    if(lineSplit[i]=='\r'){
        lineCount++
    }
}
//console.log(str)

//console.log(lineSplit)

console.log(lineCount)