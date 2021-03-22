class A{
    static age = 37;
    static hello(){
        console.log(A.age);
    }
}

console.log(A, A.age);
A.hello();

class B{
    static name = "이 클래스의 이름은 b다";
}
console.log(B);