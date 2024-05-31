// os = operating sytem module

const os = require('os')

console.log(os.arch()) // it will give the information about the version like 64bit and 32bit
console.log(os.platform());

const freeMemory = os.freemem()  // in  bites
console.log(freeMemory); // in bites
console.log(`${freeMemory/ 1024 / 1024/1024}`);


const TotalMemory = os.totalmem()  // in  bites
console.log(TotalMemory); // in bites
console.log(`${TotalMemory/ 1024 / 1024/1024}`);