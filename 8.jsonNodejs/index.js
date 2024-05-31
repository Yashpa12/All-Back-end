const fs = require('fs');
const { json } = require('stream/consumers');

const obj = { 
    name : 'yash',
    mobile : 4325672349,
    age : 25,
    email : "yashbhamare@1004gmail.com"
}

console.log(obj.name);


// its use when we want to parse the object data to json
const convertjson= JSON.stringify(obj)
console.log(convertjson);
console.log(convertjson.name); // undefined to acces we want convert into the object


// its use when we want to parse the json data to object

const  dataObj = JSON.parse(convertjson)
console.log(dataObj);


//  task 
// 1.  convert the object to the json
// 2.  then create a new file to add json
// 3.  readfile
// 4.  again convert into the object
// 5.  console.log


// its use when we want to parse the object data to json
const convert = JSON.stringify(obj)
console.log(convert);
console.log(convert.name); // undefined


fs.writeFile('j1.json', convert, (err , res)=>{
    console.log('done');
})


//Read fire
const data = fs.readFile('j1.json' , 'utf-8',(err , data)=>{
    console.log(data);
    // 4. convert to the obj
    const objects = JSON.parse(convert)

    console.log(objects);
})

