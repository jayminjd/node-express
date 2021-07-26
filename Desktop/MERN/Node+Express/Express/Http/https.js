const http=require('http')

const server=http.createServer((req,res)=>{
   
   console.log('request send')
    if(req.url==='/'){
       res.end('welcome to home page')
   }
   
   if(req.url==='/about'){
       res.end('Here is our short history')
   }
    
   res.end(`
       <h1>opps!</h1>
       <p>Cant seem to find a page you looking for</p>
       <a href="/" >back home   </a>
    `)
})

server.listen(5000,()=>{
    console.log('server is listing')
});