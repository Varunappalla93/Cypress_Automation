let x=30;

x="QA";

console.log(x) // QA
console.log(typeof(x)) // string

x={
    name:"Varun"
}


console.log(x) //{ name: 'Varun' }
console.log(typeof(x)) // object


console.log(typeof([1,2,3,4])) // object

console.log(typeof(null)) // object


let m;
console.log(typeof(m)) // undefined

function print(name)
{
    console.log(name)
}

console.log(typeof(print)) // function

