const http = require("http");
const PORT = 4000;

const server = http.createServer((req, res)=> {
    res.end("Hello This is simplest webserver using NodeJS")
});

server.listen(PORT, () => {
    console.log(`Simple NodeJS server is running on port ${PORT}`); 
}); 