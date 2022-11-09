const express = require('express');

const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')

const bodyParser = require('body-parser');

const app = express();

app.get('/favicon.ico', (req, res) => res.sendStatus(204));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).send('<h1 style="color: red"> This is not a page you were looking for</h1>')
});


//const server = http.createServer(app);
//server.listen(3000);
// Changes to:
app.listen(3000);