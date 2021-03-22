class Parent{
    name = "Lee";

    hello(){
        console.log("Hello", this.name);
    }
}

class Child extends Parent{}

const p = new Parent();
const c = new Child();

console.log(p,c);

c.hello();
c.name = "BB";
c.hello();