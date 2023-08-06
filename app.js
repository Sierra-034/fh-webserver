const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 8080;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Samuel Gómez',
        titulo: 'Curso de node',
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Samuel Gómez',
        titulo: 'Curso de node',
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Samuel Gómez',
        titulo: 'Curso de node',
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
