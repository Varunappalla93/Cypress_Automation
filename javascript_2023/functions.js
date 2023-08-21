// func declaration
function add(a, b) {
    return a + b
}

const sum = add(2, 10)
console.log(sum) // 12


// func expression, anonymous function
const multiply = function (x, y) {
    return x * y
}

console.log(multiply(10, 20)) //200

// arrow function,anonymous function
const divide = (a, b) => a / b

const divided_value = divide(10, 2)
console.log(divided_value) // 5

// function constructor
const subtract = new Function('a', 'b', 'return a-b')
const subs = subtract(10, 4)
console.log((subs)); // 6


// IIFE
(function () {
    console.log("Server is up and running")
})

(); // Server is up and running

// Geneator function
function* generateNumbersSequence() {
    yield 10;
    yield 20;
    yield 30;

}

const gen=generateNumbersSequence(5);

console.log(gen.next().value) // 10
console.log(gen.next().value) // 20
console.log(gen.next().value) // 30


// anonymous function
const nos=[1,2,3,4,5,6]
const squarenos=nos.map(function(e){
    return e*e;
});

console.log(squarenos) // [ 1, 4, 9, 16, 25, 36 ]


// anonymous arrow function
const nos2=[1,2,3,4,5,6]
const squarenos2=nos.map((e)=>{
    return e*e;
});

console.log(squarenos) // [ 1, 4, 9, 16, 25, 36 ]


// recursive function
function fact(n)
{
    if (n==0|| n==1)
    {
        return 1;
    }
    else
    {
        return n*fact(n-1)
    }
}

console.log(fact(4)) // 24


// Higher order function
function addition(a1,b1)
{
    return a1+b1
}

function subtraction(a1,b1)
{
    return a1-b1
}


function operate(funcName,a2,b2)
{
    return funcName(a2,b2)
}

const additionfunc=operate(addition,4,5)
console.log(additionfunc) // 9


const subtractfunc=operate(subtraction,40,20)
console.log(subtractfunc) // 20