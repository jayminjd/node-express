const http=require('http')
const {readFileSync}=require('fs')

const homepage=readFileSync('../navbar/index.html');
const homestyle=readFileSync('../navbar/style.css');
const homelogo=readFileSync('../navbar/logo.svg');
const homelogic=readFileSync('../navbar/browser.js');


http
    .createServer((req,res)=>{
        //console.log(req.method);
        //console.log(req.url);
        const url=req.url
        if(url=='/'){
            res.writeHead(200,{'content-type':'text/html'})
            res.write(homepage)
            res.end()
        }
        else if(url=='/about'){
            res.writeHead(200,{'content-type':'text/html'})
            res.write('<h1>hello this is about page</h1>')
            res.end()
        }
        else if(url=='/style.css'){
            res.writeHead(200,{'content-type':'text/css'})
            res.write(homestyle)
            res.end()
        }
        else if(url=='/logo.svg'){
            res.writeHead(200,{'content-type':'image/svg+xml'})
            res.write(homelogo)
            res.end()
        }
        else if(url=='/browser.js'){
            res.writeHead(200,{'content-type':'text/javascript'})
            res.write(homelogic)
            res.end()
        }
        else{
            res.writeHead(400,{'content-type':'text/html'})
            res.write('<h1>page not found</h1>')
            res.end()
        }
      
    })
    .listen(5000,()=>{
        console.log('server running on port 5000');
    })