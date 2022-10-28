const fs = require('fs');

function requestHandler(req, res) {

    const method = req.method;
    const url = req.url;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My first page from NodeJS</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send it!</button></form></body>');
        res.write('</html>');
        return res.end();
        
    }
    
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk)=>{
            console.log(chunk);
        body.push(chunk)
    });
    return req.on('end', ()=>{
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
        //const message = parsedBody.split('=')[1];
        const message = 'dzem ze swini'
        fs.writeFile('hello.txt', message, err => {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        }); 
    });
}

res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>My first page from NodeJS</title></head>');
res.write('<body><h1>Hello From the Server!</h1></body>');
res.write('</html>');
res.end();

};

module.exports = requestHandler;