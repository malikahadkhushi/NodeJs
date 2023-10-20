const http = require('http');
const data = require('./data');

http.createServer((req,resp)=>{
    try
    {
        resp.writeHead(200,{'Content-Type':'application/json'});
    resp.write(JSON.stringify(data));
    resp.end();
    }
    catch(err){
        resp.write('Server Error');
        resp.end();
    }
}).listen(4000);