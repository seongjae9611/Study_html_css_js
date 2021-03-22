function p(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

p(1000)
    .then(() => p(1000))
    .then(() => p(1000))
    .then(() => {
        console.log("3000ms 후에 실행");
    });

(async function main(){
    await p(1000);
    await p(1000);
    await p(1000);
    console.log("3000ms 후에 실행");
})();