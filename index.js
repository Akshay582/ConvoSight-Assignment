const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const routes = require('./api/routes/index')(app, fs);

app.listen(8000, function(err){
    console.log("Listening at port: 8000")
})