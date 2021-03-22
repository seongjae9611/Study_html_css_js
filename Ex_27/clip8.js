const a = {};

console.log(a, typeof a);

const b = {
    name : "ddd"
};

console.log(b, typeof b);

const c = {
    name : "eee",
    hello1(){
        console.log("Hello1", this.name);
    },
    hello2: function(){
        console.log("Hello2", this.name);
    },
    hello3: () =>{
    
        console.log("Heelo3", this.name = "FFF");
    }
};

c.hello1();
c.hello2();
c.hello3();