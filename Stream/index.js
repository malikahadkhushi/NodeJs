const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request',(req,resp)=>{

    const rs = fs.createReadStream('input.txt');

    // rs.on('data',(chunk)=>{

    //         resp.write(chunk);
    // });

    // rs.on('end',()=>{
    //     resp.end()
    // });

    // rs.on('error',(err)=>{
    //     resp.end ('File Not Exist');
    //     console.log(err)
    // })

    rs.pipe(resp);
});

server.listen(5000);
