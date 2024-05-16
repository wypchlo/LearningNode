const fs = require('fs').promises;

const writeReadFile = async(filePath, data) => {
    try{
        await fs.writeFile(filePath, data);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return fileContent;
    }
    catch(error){
        return error;
    }
}

writeReadFile("testFile.txt", "Test file content test")
    .then(data => console.log(data))
    .catch(error => console.log(error));