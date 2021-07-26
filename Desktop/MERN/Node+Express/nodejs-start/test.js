//const http = require('http');
const express = require('express');
//const bodyParser = require('body-parser');
const app = express();
//app.use(bodyParser.urlencoded({extended: false}));
app.use('/', (req, res,next)=>{
   next();
});
app.use('/add-username', (req, res,next)=>{
   res.send('<form action="/post-username" method="POST"> <input type="text" name="username"> <button    type="submit"> Send </button> </form>');
});
app.use('/post-username', (req, res, next)=>{
   console.log('data: ', req.body.username);
   res.redirect('/');
});
app.use('/', (req, res,next)=>{
   res.send('<h1> first midleware: Hello Tutorials Point </h1>');
});
//const server = http.createServer(app);
server.listen(2000);