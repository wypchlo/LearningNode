const fs = require('fs');
const fsp = fs.promises;

const writeReadFile = async(filePath, data) => {
    try{
        await fsp.writeFile(filePath, data);
        const fileContent = await fsp.readFile(filePath, 'utf-8');
        return fileContent;
    }
    catch(error){
        return error;
    }
}

const mkdirIfNotExists = async(directory) => {
    if(fs.existsSync(directory)) return;

    try{
        const dirCreated = await fsp.mkdir(directory);
    }
    catch(error){
        return `Couldn't create the ${directory} directory`;
    }
};

const main = async() => {
    await mkdirIfNotExists('./files');

    try{
        const fileContent = await writeReadFile('./files/testFile.txt', 'cool file content');
        console.log(fileContent);
    }
    catch(error) {
        console.log(error);
    }
};

main();