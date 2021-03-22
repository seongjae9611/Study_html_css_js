function p() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("error");
        }, 1000);
    });
}

p()
    .then(message => {
        console.log("1000ms 후에 fulfilled합니다.", message);
    })
    .catch(reason => {
        console.log("1000ms 후에 rejected합니다.", reason);
    });