const http = require("http");

const server = http.createServer((req, res) => {
    //console.log(req.url);

    if (req.url == "/"){
        res.end("Hello server!");
    }
    else if(req.url == "/about"){
        //res.write('hello nigga!')
        res.end("Hello about server!");
    }
    else{
        res.writeHead(404, {"Contect-type": "text/html"});
        res.end("404 client error");
    }
    
})

server.listen(5500, "127.0.0.1", () => {
    console.log("Listening to the port 5500");
});