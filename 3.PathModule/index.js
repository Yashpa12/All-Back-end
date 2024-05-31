const path = require('path')

console.log(path.dirname('G:\YASH\Path/index.js')) // G : YASHPath
console.log(path.extname('G:\YASH\Path/index.js')) // .js
console.log(path.basename('G:\YASH\Path/index.js'))  // index.js

//above all kind of data 

console.log(path.parse('G:\YASH\Path/index.js'))  //it will result in object
