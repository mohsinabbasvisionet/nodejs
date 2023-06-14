const http = require('http');
const fs = require('fs');
const path = require('path');

// Create a server instance
const server = http.createServer((request, response) => {
    // Set the response header
    response.setHeader('Content-Type', 'text/plain');

    // Handle different routes
    if (request.url === '/') {
        response.statusCode = 200;
        response.end('Welcome to the homepage!');
    } else if (request.url === '/about') {
        response.statusCode = 200;
        response.end('About page');
    } else if (request.url === '/contact') {
        response.statusCode = 200;
        response.end('Contact us');
    } else if (request.url === '/file') {
        debugger
        const filePath = path.join(__dirname, "helloWorld.txt");

        fs.readFile(filePath, 'utf8', (error, data) => {
           if (error){
               response.statusCode = 500;
           } else {
               response.statusCode = 200;
               response.setHeader('Content-Type', 'text/plain');
               response.end(data);
           }
        });
    } else {
        response.statusCode = 404;
        response.end('Page not found');
    }
});

// Start the server
const port = 3300;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});