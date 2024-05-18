function getData(dataId) {
    console.log('data',dataId);
}

function getData2(dataId2,getNextData) {
    setTimeout(() => {
        console.log('dataNew',dataId2);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

//callback hell 
getData2(1, () => {
    console.log('getting data2 .....');
    getData2(2, () => {
        console.log('getting data3 .....');
        getData2(3, () => {
            console.log('getting data4 .....');
            getData2(4);
        });
    });  
});


