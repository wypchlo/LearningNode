const fs = require('fs');

const path = 'bigFile.txt';
const readStream = fs.createReadStream(path, {encoding: 'utf-8'})
const writeStream = fs.createWriteStream('info.txt');

readStream.on('data', data => {
    try {
        console.log('a');
        writeStream.write(data);
    }
    catch(error) {
        console.log(error)
    }
})