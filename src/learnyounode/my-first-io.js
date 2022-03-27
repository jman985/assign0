const fs = require('fs');

const buf = fs.readFileSync(process.argv[2]);

const str = buf.toString();

const lineSplit = str.split('\n')

console.log(lineSplit.length-1)