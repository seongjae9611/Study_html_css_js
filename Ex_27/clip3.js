function Person(name, age){
   
    this.name = name;
    this.age = age;
}

const p = new Person("ddd", 40);

console.log(p,p.name,p.age);

const a= new Person("aaa", 25);
console.log(a, a.name, a.age);

