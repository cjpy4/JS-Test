var url = "http://mylogger.org/log";
var message = "hi mom";

// Importing the EventEmitter base class
const EventEmitter = require("events");

// Creating a class with the functionality of the EventEmitter class
class Logger extends EventEmitter {
  log() {
    console.log(message);
    // Raise an Event
    this.emit("messageLogged", { id: 1, data: message });
  }
}
// Exporting the Logger class
module.exports = Logger;
