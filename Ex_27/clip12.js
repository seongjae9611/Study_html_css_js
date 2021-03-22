class Parent{
    name = "Lee";

    hello(){
        console.log("Hello", this.name);
    }
}

class Child extends Parent{
    age = 37;

    hello(){
        console.log("Hello", this.name, this.age);
    }
}

const p = new Parent();
const c = new Child();

console.log(p,c);
c.hello;

c.name = "CCCC";
c.hello();