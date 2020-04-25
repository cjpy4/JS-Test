//Import a module
const log = require("./log");
// Using the os module to retrieve device information
const os = require("os");
var totalMemory = os.totalmem;
var freeMemory = os.freemem;
console.log(log());
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
// Using the file system module to retrieve files
const fs = require("fs");
fs.readdir("./", function (err, files) {
  if (err) console.log("Error:", err);
  else console.log("Files:", files);
});
// Create a class with the methods of the events module
const EventEmitter = require("events");
const emitter = new EventEmitter();
// Register a listener
emitter.on("messageLogged", function () {
  console.log("listenerCalled");
});
// Raise an Event
emitter.emit("messageLogged");
