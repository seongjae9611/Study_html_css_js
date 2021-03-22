function p(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("reason"));
        }, ms);
    });
}

async function asyncP(){
    return "222";
}

(async function main(){
    try{
        const name = await asyncP();
        console.log(name);
    } catch (error) {
        console.log(error);
    }
})();