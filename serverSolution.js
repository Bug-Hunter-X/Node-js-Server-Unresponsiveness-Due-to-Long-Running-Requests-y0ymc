const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task asynchronously
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 0); // Use 0 to schedule the task for the next event loop iteration
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});