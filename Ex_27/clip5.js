function hello(c){
    console.log("Hello");
    c();
}

hello(function(){
    console.log("콜백");
    
})

console.log(hello);