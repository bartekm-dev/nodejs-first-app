const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<body><h1>Welcome to my NodeJS Assignment number 1</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button>Create a user</button></form>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<body><ul><li>Bartek M</li><li>Paulina K</li><li>Julcia M</li><li>Michal M</li></ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];
            console.log(user);
        })
        res.statusCode = 302;
        
        return res.end();
    }


});

server.listen(3000);