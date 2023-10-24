const express = require('express');
const path = require('path');
const app = express();



const dirName = path.join(__dirname,'StaticPage');
app.use(express.static(dirName));

app.get('/',(_,resp)=>{
    resp.sendFile(path.join(dirName,'index.html'));
    
});


app.get('/about',(_,resp)=>{

    resp.sendFile(path.join(dirName,'About.html'));

});

app.get('*' , (req , resp)=>{
    resp.sendFile(path.join(dirName,'404Page.html'));


});

app.listen(5000,()=>{
    console.log("Server is Running......")
});