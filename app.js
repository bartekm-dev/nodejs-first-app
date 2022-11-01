const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middlearth');
    next();
});

app.use((req, res, next) => {
    console.log('Even further In the middlearth');
    next();
});

app.use((req, res, next) => {
    console.log('In the Mordor now ');
    res.send(`<h1>You are <b>Sauron's</b> bitch now</h1>`);
});

//const server = http.createServer(app);
//server.listen(3000);
// Changes to:
app.listen(3000);