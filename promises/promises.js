let promise = new Promise((resolve,reject) => {
    console.log('I am a promise.');
    //resolve('succeed');
    reject('woow error occured');
})

function getData(dataId, getNextData) {
    return new Promise((resolve,reject) => { //it is promising that it will give data

        setTimeout(() => {
            console.log("data",dataId);
            resolve("Great Success"); //promise will be fullfilled & show this message 
            //only if data is printed until that promise is in pending state
            if (getNextData) {
                getNextData();
            }
        }, 5000);
    })
}

//promise are generally get returned and with the help of which we perform operations