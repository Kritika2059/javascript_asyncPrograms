// async function hello() { //async function automatically returns promise
//     console.log("hello");
// }

//Basics of async-await

// function api() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log('weather data');
//             resolve('success');
//         },2000);
//     });
// }

// async function getWeatherData() {
//     await api(); //first call
//     await api(); //second call
// }

//Async-await

function getData(dataId) {
    return new Promise((resolve,reject) => { //it is promising that it will give data

        setTimeout(() => {
            console.log("data",dataId);
            resolve("Great Success"); //promise will be fullfilled & show this message 
            //only if data is printed until that promise is in pending state
        }, 2000);
    });
}

// async function getAllData() {
//     console.log('fetching data1...');
//     await getData(1);
//     console.log('fetching data2...');
//     await getData(2);
//     console.log('fetching data3...');
//     await getData(3);
// }

//IIFE Function
(async function () { //it has no name
    console.log('fetching data1...');
    await getData(1);
    console.log('fetching data2...');
    await getData(2);
    console.log('fetching data3...');
    await getData(3);
})();     //executed automatically  ==>> just need to add brackets and remove function name to make it IIFE function 
//generally used for API calls
//but can't be used more than once..... 
//whole code must be re-written to execute again
