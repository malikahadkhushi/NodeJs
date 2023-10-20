const fs = require('fs');
const path = require('path');

const dirName = path.join(`${__dirname}/Files`);

for(let i = 0 ; i<5 ; i++){
    let fileName = `hello${i}.txt`;

    fs.writeFileSync(path.join(dirName,fileName) , 'Hello');
}

fs.readdir(dirName,(Err,files)=>{

    files.forEach((file)=>{
        console.log(file)
    })

});