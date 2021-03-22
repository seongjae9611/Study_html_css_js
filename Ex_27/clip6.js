function A(){
    this.name = "ddd";
}

const a = new A();
console.log(a);

function B(){
    this.hello3 = function(){
        console.log("Hello");
    };
}

new B().hello3();