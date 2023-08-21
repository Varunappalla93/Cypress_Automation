// var - old way- before ES6
// var scope can be at function level and global level.

var x=10;
function test()
{
    var y=90;
    console.log(y) 
}


console.log(x) // 10
test() // 90
// console.log(y)  //ReferenceError: y is not defined


var pop="HI JS!!"

function rel()
{
    var top="Hi JS!"
   console.log(top)  
}

rel(); // Hi JS!

// console.log(top)  //ReferenceError: top is not defined



// var can be re-declared and re-initialized.
var browser="chrome";
var browser="firefox";
browser="edge";
console.log(browser) // edge


var g;
console.log(g) // undefined
g="Varun";
console.log(g) // Varun


// var issue
var flag="varun";
var t1=10;

if (t1>3) {
    var flag="Hey narasimha"
}

console.log(flag) // Hey narasimha



// let - block scoped
let m="QA Engineer";
let time=10

if(time>3)
{
    let m="Test Engineer"
    console.log(m) // Test Engineer
}

console.log(m) // QA Engineer

// let cannot be declared but can be re-initialized.
let len=6;
len=9;
console.log(len) // 9
// let len=3;


// const - constant
const name1="Varun Appalla"
// const name1="Appalla"

// cannnot re-declare and re-initialize const
console.log(name1) // TypeError: Assignment to constant variable.


var p;
console.log(p) // undefined


let p1;
console.log(p) // undefined

// const p1; // SyntaxError: Missing initializer in const declaration
// console.log(p)