const http = require('http');

const server = http.createServer((req, res) => {
    // Set response header
    res.setHeader('Content-Type', 'text/html');

    // Get the URL path
    const url = req.url;

    // Route handling
    if (url === '/home' || url === '/') {
        res.writeHead(200);
        res.write('<h1>Welcome to Home Page</h1>');
        res.write('<p>This is the main page of our website.</p>');
    } else if (url === '/about') {
        res.writeHead(200);
        res.write('<h1>About Us</h1>');
        res.write('<p>Learn more about our company and mission.</p>');
    } else {
        res.writeHead(404);
        res.write('<h1>404 - Page Not Found</h1>');
        res.write('<p>The page you are looking for does not exist.</p>');
    }

    // End the response
    res.end();
});

// Set the server to listen on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});