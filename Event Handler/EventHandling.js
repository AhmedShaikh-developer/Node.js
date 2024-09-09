const EventEmitter = require('events')
const event = new EventEmitter();

event.on("SayMyName", () => {
    console.log("Heisenberg");
});

//event emitter instances and register a couple of callbacks
event.on("SayMyName", () => {
    console.log("Jessi Pinkman");
});

event.on("SayMyName", () => {
    console.log("Skyler White");
});

event.on("CheckPageStatus", (sc, msg) => {
    console.log(`Page Status is ${sc} and the page is ${msg}`);
});

event.emit("CheckPageStatus", 200, "ok");