require('dotenv').config();
const http = require('http');
const mongoose = require('mongoose');

const PORT = 4000;

const server = http.createServer((req, res) => {
    res.write("Server is active");
    res.end();
});

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to DB");
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
