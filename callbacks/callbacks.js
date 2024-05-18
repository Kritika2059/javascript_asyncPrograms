function sum(a,b) { //sum is a function two parameters
    console.log(a+b);
}
function calc(a,b,sumCallback) { //calc is a function that takes two numbers as arguments and
    sumCallback(a,b);    // a function as argument which is expected to be of type sum that take two argumens 
}

calc(1,2,sum);  //function call 
            //sum is passed as an argument without any parenthesis

//whole function is passed as an argument with arrow function
calc(2,3, (a,b) => {
    console.log(a+b);
})

const hello = () => {
    console.log('hello');
}

setTimeout(hello,2000); //it is a callback