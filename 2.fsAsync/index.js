const fs = require('fs')


// fs.writeFile('y1.txt','hii, i am exploring the node js :-' , (err)=>{
//     console.log('hii i am callback function');
//     console.log(err);// null 
// });


// fs.appendFile('y1.txt','     Hii,i am explore node', ()=>{
//     console.log('change');
    
// })

fs.readFile('y1.txt',"utf-8",(err, data)=>{
console.log(data);
})

