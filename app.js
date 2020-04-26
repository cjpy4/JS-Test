//Import a module
const Logger = require("./log");
// Using the os module to retrieve device information
const os = require("os");
var totalMemory = os.totalmem;
var freeMemory = os.freemem;
function log() {
  console.log(`Total Memory: ${totalMemory}`);
  console.log(`Free Memory: ${freeMemory}`);
}
console.log(log());

// Using the file system module to retrieve files
const fs = require("fs");
fs.readdir("./", function (err, files) {
  if (err) console.log("Error:", err);
  else console.log("Files:", files);
});
// Create a class with the methods of the events module
const EventEmitter = require("events");
// Instantiate the Logger class
logger = new Logger();
// Register a listener
logger.on("messageLogged", (arg) => {
  console.log("listenerCalled", arg);
});
// calling the raise event function
logger.log();
