// const nam = 'Ahmed Shaikh'
// console.log(nam)

const fs = require('fs')
const data = fs.writeFile('data.txt', 'this is ahmed shaikh', 
    () => {console.log("success")}
)
console.log(data)

const read = fs.readFile('data.txt', 'utf-8',
    (err, read) => {console.log(read)}
)
