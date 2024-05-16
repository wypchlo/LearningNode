const express = require('express');
const fs = require('fs');

const app = express();

app.listen(3000);

const path = './src/';

app.get('/', async(req, res) => {
    res.sendFile(path+'index.html', {root: __dirname});
});

app.get('/about', async(req, res) => {
    res.sendFile(path+'about.html', {root: __dirname});
});

app.get('/about-me', async(req, res) => {
   res.redirect('/about');
});

app.use((req, res) => {
    res.sendFile(path+'404.html', {root: __dirname})
});