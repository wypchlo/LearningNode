const http = require('http');
const fs = require('fs');
const fsp = fs.promises;

const pageContent = async(path) => {
    const textContent = fsp.readFile(path, 'utf-8');
    return textContent;
}

const server = http.createServer(async(req, res) => {
    const url = req.url;

    res.setHeader('Content-Type', 'text/html');
    let path = './src/';

    switch(url)
    {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
    }

    const page = await res.pageContent(path);
    res.write(page);
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000')
})