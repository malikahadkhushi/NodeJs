const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'Files');

// Creating File
// fs.writeFileSync(`${dirPath}/myFile.txt`, 'This is myfile');


// ReadFile
// fs.readFile(`${dirPath}/myFile.txt`, 'utf8', (err, file) => {
//     if (!err) {
//         console.log(file)
//     }
//     else {
//         console.log(err);
//     }
// });

// Append Data in File
// fs.appendFile(`${dirPath}/myFile.txt`,' and This is appended text',(err)=>{
//     console.log(err)
// });

// Rename File
// fs.rename(`${dirPath}/textFile.txt`,`${dirPath}/File.txt`,(err)=>{
//     if(!err){
//         console.log('File is renamed');
//     }
// });

// Delete File

// fs.unlinkSync(`${dirPath}/File.txt`,(err)=>{
//     if(!err){
//         console.log('File is Deleted');
//     }
// });