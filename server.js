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
    let page = await pageContent('src/index.html');

    switch(url)
    {
        case '/about':
            page = await pageContent('src/about.html');
            break;
    }
    res.write(page);
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000')
})