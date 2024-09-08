const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    //console.log(req.url);
    const data = fs.readFileSync(`${__dirname}/Api/data.json`, "utf-8");
        console.log(data);
        //res.end(data);
        const objdata = JSON.parse(data)


    if (req.url == "/"){
        res.end("Hello server!");
    }
    else if(req.url == "/about"){
        //res.write('hello nigga!')
        res.end("Hello about server!");
    }
    else if (req.url == "/userapi") {
        res.writeHead(200, {"content-type": "application/json"});
            res.end(objdata[1].name)
    } 
    else{
        res.writeHead(404, {"Contect-type": "text/html"});
        res.end("404 client error");
    }
    
})

server.listen(5500, "127.0.0.1", () => {
    console.log("Listening to the port 5500");
});