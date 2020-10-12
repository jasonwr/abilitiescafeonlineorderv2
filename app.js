//imports
const express = require('express');
const app = express();
const port = 8888;

//Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

//Set Views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.render('main', { text: 'This text was written in app.js and passed as a variable' })
});

app.get('/login', (req, res) => {
    res.render('login', { text: 'App.JS text' })
});

//Listen on port 8888
app.listen(port, () => console.info(`Listening on port ${port}`));