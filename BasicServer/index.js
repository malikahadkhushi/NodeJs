const http = require('http');

http.createServer((req,resp)=>{
    try{
        resp.write('Hi,This is Malik Ahad Ali and this is my first node js program');
    resp.end();
    }
    catch(err){
        resp.write('Server Running Error', err);
        resp.end();
    }
}).listen(4000)