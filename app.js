const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello world')
});

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta')
});

app.get('*', (req, res) => {
    res.send('404 | Page not found');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
