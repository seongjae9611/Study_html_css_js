function p() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello");
        }, 1000);
    });
}

p()
    .then(message => {
        console.log("1000ms 후에 fulfilled합니다.", message);
    })
    .catch(() => {
        console.log("1000ms 후에 rejected합니다.");
    });