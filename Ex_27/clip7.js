function Person(){}

Person.prototype.hello = function(){
    console.log("Hello");
};

function Korean(region){
    this.region = region;
    this.where = function(){
        console.log("where", this.region);
    };
}

Korean.prototype = Person.prototype;

const k =new Korean("Seoul");

k.hello();
k.where();

console.log(k instanceof Korean);
console.log(k instanceof Person);
console.log(k instanceof Object);
