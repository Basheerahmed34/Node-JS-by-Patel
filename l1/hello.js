// let a = 3;
// let b = 3;
// console.log(a + b);

// function statement

function greet(){
    console.log("great");
}
greet();

// function are first class

function loggreeting(fn){
    fn();
}
loggreeting(greet);

//function expression

const fn = function(){
    console.log("Function 1");
    
}
fn();

//use the function on the fly
loggreeting(function(){
    console.log("Function 2");
    
})