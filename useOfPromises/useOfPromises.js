
const getPromise = () => {
    return new Promise((resolve,reject) => {
        console.log('I am a promise.');
        resolve('succeed');
        //reject('hehe error occured');
    });
};

let promise = getPromise();
promise.then((res) => { //we automatically get an 'res' parameter and we can print that as well
    console.log('promise fullfilled-', res); //res is the message which we passed when fullfilled
}) //this rxecutes only in case if promise is fullfilled

promise.catch((err) => { //we automatically get an 'err' parameter and we can print that as well
    console.log('promise rejected-',err); //res is the message which we passed when rejected
})//this rxecutes only in case if promise is rejected