function p(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

(async function main(){
    const results = await Promise.all([p(1000), p(2000), p(3000)]);
    console.log(results);
})();

(async function main(){
    const results = await Promise.race([p(1000), p(2000), p(3000)]);
    console.log(results);
})();