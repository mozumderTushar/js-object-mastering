function doSomething(){
    console.log(33333);
}
console.log(22222);
// setTimeout(doSomething,4000)
// setTimeout(() => {
//     console.log('lazy');
// }, 4000);
console.log(44444);

setInterval(() => {
    console.log('doing it');
}, 3000);