var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
    if (err) {
        return console.log(err)
    }
    
    {
        const str = data.toString();
        const strArray = str.split('\n');
        console.log(strArray.length - 1);
    };
});