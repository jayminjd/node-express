const eventEmitter=require('events')

const customEmitter=new eventEmitter()

customEmitter.on('response',(name,id)=>{
    console.log(`data received from ${name} witth id: ${id}`)
})
 
customEmitter.emit('response','john',34)