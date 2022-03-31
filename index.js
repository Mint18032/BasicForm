const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const port = 8080; // Should > 3306

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, respond) => {
    respond.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/sum', (request, respond) => {
    console.log(request.query);
    let a = request.query['a'];
    let b = request.query['b'];
    if (a == '') {
        a = 0;
    }
    if (b == '') {
        b = 0;
    }
    respond.send(a + " + " + b + " = " + (a - (-b)));
});

app.listen(port);
