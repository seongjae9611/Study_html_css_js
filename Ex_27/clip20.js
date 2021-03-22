function p() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Bad"));
        }, 1000);
    });
}

p()
    .then(message => {
        console.log("1000ms 후에 fulfilled합니다.", message);
    })
    .catch(error => {
        console.log("1000ms 후에 rejected합니다.", error);
    })
    .finally(() => {
        console.log("end");
    });