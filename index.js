var express = require('express');

var app = express();
app.use(express.bodyParser());

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil');
});
//application/json

app.post('/api/login', function(req, res) {
    res.setHeader('Content-Type', 'application/json')
    if (request.body.email || request.body.password) {
        res.send('{\"token\": \"1234567890123456789012345678901234567890\"}');
    }
    res.status(400).send('')
})

app.post('/api/refreshToken', function(req, res) {
    res.setHeader('Content-Type', 'application/json')
    if (request.body.token) {
       res.send("{\"token\": \"1234567890123456789012345678901234567890\"}")
    }
    res.status(400).send('')
})

app.post('/api/getLocation', function(req, res) {
    res.setHeader('Content-Type', 'application/json')
    if (request.body.token) {
        res.send("{\"date\": \"\",\"location\": \"Salle 7\"}")
    }
    res.status(400).send('')
})

app.post('/api/checkIn', function(req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.send("{\"response\" : \"OK\"}")
})

app.listen(8080);
