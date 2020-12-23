const controller = require('./controllers/MiController.js');
const express = require('express');
const db = require('./models');
const app = express()
const bodyParser = require('body-parser');
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
});
app.get('/api/users', (req, res) => {
    db.user.findAll().then(users => res.json(users))
});
app.post('/api/auth/signin', controller.signin);


const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})

module.exports = app;