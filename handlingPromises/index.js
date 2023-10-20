let a = 10;
let b=20;

let Result = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30);
    },3000)
});

Result.then((b)=>{
console.log(a+b);
})