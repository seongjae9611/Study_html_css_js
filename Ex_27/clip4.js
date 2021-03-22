function plus(base){
    return function(num){
        return base + num;
    }
}

const plus5 = plus(5);

plus5(10);
console.log(plus5(10));