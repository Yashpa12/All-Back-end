const EmitEmitter = require('events')

const event = new EmitEmitter()

event.on('SayName',()=>{
    console.log("your name is yash");
})

event.on('CreatePage',(sc , msg)=>{
    console.log(`status ${sc} and msg ${msg}`);
})

// for the calling emit is use 
event.emit( "SayName") // it can be anything // custom event can be create
event.emit('CreatePage' , 200 , "ok")