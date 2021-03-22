class Parent{
    name;

    constructonr(name){
        this.name = name;
    }

    hello(){
        console.log("Hello", this.name);
    }
}

class Child extends Parent{
    age;

    constructor(name,age){
        super(name);
        this.age = age;
    }

    hello(){
        console.log("Hello", this.name,this.age);
    }
}

const p = new Parent("222");
const c = new Child("222",37);

console.log(p,c);
c.hello();