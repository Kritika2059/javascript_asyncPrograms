// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data1');
//             resolve('success1');
//         },4000);
//     });
// }//this task is generally done by API's i.e. making functions and all

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data2');
//             resolve('success2');
//         },4000);
//     });
// }//this task is generally done by API's i.e. making functions and all

// console.log('fetching data1.....');
// let promise1 = asyncFunc1();
// promise1.then((res) => {
//     console.log(res);
// });

// console.log('fetching data2.....');
// let promise2 = asyncFunc2();
// promise2.then((res) => {
//     console.log(res);
// });

//by doing this we will fetch the data at the same time 
//data1 will be start to fetch and since, setTimieout is async function 
//while data1 is being fetch, immediately data2 will start to fetch.

//but what is we need to fetch data1 first then only fetch data2
//then we will use promiseChaining

// console.log('fetching data1.....');
// let promise1 = asyncFunc1();
// promise1.then((res) => {
//     console.log('fetching data2.....');
//     let promise2 = asyncFunc2();
//     promise2.then((res) => {
// });
// });

//below is the simplier version for promise chain
// console.log('fetching data1.....');
// asyncFunc1().then((res) => {
//     console.log('fetching data2.....');
//     asyncFunc2().then((res) => {
// });
// });


//we can do this in getData(1) format as well
function getData(dataId, getNextData) {
    return new Promise((resolve,reject) => { //it is promising that it will give data

        setTimeout(() => {
            console.log("data",dataId);
            resolve("Great Success"); //promise will be fullfilled & show this message 
            //only if data is printed until that promise is in pending state
        }, 2000);
    });
}

// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//     })
// });

//there is even more simplier verison of promise chian
//this is actual promise chain
getData(1).then((res) => {
    return getData(2);
})
.then((res) => {
    console.log(res);
});
