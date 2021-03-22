function p(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },1000);
    });
}

p().then(() => {
    return p();
})
.then(() => p())
.then(p)
.then(() => {
    console.log("4000ms 후에 fulfilled됩니다.")
});