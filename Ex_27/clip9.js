class A{
    _name = "no name";

    get name(){
        return this.name + "@@@";
    }
    set name(value){
        this._name = value + "!!!";
    }
}


const a = new A();
console.log(a);
a.name = "mark";
console.log(a);


// const b = new B();
// console.log(b);

// B.name = "Mark";
// console.log(b);