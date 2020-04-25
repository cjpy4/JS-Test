const log = require("./log");
const os = require("os");
var totalMemory = os.totalmem;
var freeMemory = os.freemem;

console.log(log());
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
