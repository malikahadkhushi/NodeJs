const express = require('express');

const app = express();

const middleWare = (req,resp,next)=>{
    if(!req.query.age){
        resp.end('Please Enter Your Age');
    }
    else if(req.query.age<18){
        resp.end('Age Should be greater than 18');
    }
    else{
        next();
    }
}

app.use(middleWare);

app.get('/',(req , resp)=>{
        resp.send('Welcome FocusTeck');
        resp.end();
});

app.get('/about',(req , resp)=>{
    resp.send('About FocusTeck');
    resp.end();
});

app.listen(5000,()=>{
    console.log('server is running successfully......');
});