const http = require("http");
const server = http.createServer((req, res) => {
    res.end("Hello server!");
})

server.listen(5500, "127.0.0.1", () => {
    console.log("Listening to the port 5500");
});