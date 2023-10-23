const express = require('express');
const EventEmitter = require('events');

const app = express();
const event =new EventEmitter();
let count = 0;
event.on('click',()=>{
    count++
})

    app.get('/', (req, resp) => {
        resp.send('Home');
        console.log('Click',count)
        event.emit('click');
    });

    app.get('/about', (req, resp) => {
        resp.send('about');
        console.log('Click',count)
        event.emit('click');
    });

app.listen(5000);