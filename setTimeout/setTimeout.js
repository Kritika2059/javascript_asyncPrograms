console.log('one');
console.log('two');

setTimeout(() => { //we can also call the function from other location 
    console.log('hello'); //by : setTimeout(hello, 3000); where hello is exsisting funcn and this is executed after 3sec = 3000ms
},3000);        

console.log('three');
console.log('four');