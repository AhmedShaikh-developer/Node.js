        
const fs = require("fs");
const bioData = {
    "name": "ahmed",
    "age": "25",
    "occupation": "Software Engineer",
    "hobbies": ["reading", "gaming", "traveling"]
};


const jsonData = JSON.stringify(bioData);
fs.writeFile("json.json", jsonData, (err) => {
    console.log("done");
});

fs.readFile("json.json", "utf-8", (err, data) => {
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
});

        
    