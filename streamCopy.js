const fs = require('fs');

const copyFile = async(origin, destination) => {
    const readStream = fs.createReadStream(origin, {encoding: 'utf-8'});
    const writeStream = fs.createWriteStream(destination);
    readStream.pipe(writeStream);
};

const main = async() => {
    const originPath = 'bigFile.txt';
    const destinationPath = 'files/copiedFile.txt';
    await copyFile(originPath, destinationPath);

   const fsp = fs.promises; 
    try {  
        const fileContent = await fsp.readFile(destinationPath, 'utf-8');
        console.log(fileContent);
    }
    catch(error) {
        console.log(error);
    }
}

main();