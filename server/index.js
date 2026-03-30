const http = require('http');
const PORT = 4000;

const server = http.createServer((req, res) => {
    res.write("Server is active");
    res.end();
});

server.listen(PORT, () => {
    console.log('Server running on port',${PORT});
});