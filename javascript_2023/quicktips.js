// find unique values from array
const array = [1, 2, 1, 1, 2, 3, 4, 5]
const uniquearray = [...new Set(array)]
console.log(uniquearray) // [ 1, 2, 3, 4, 5 ]

// int to string
const num = 32;
const numstr = num + '';
console.log(numstr) // 32
console.log(typeof (numstr)) // string

// or
console.log(typeof (String(43))) // string

// float to int
const floatno = 3.45;
const intno = parseInt(floatno)
console.log(intno) // 3

// check if variable is no
const value = 10;
if (typeof value === 'number' && !isNaN(value)) {
    console.log(value+" is a number")
}
else{
    console.log(value+" is not a number")
}
// 10 is a number


// swap variables
let a=5;
let b=10;
[a,b]=[b,a]
console.log(a,b) // 10 5

// check if object has property
const user={
"name":"varun",
"age":31
}

if (user.hasOwnProperty("name"))
 {
    console.log("user has this property")     // user has this property
}

// remove falsy values from array
const val=[1,0,'',false,null,NaN,undefined,10,20]
filarray=val.filter(Boolean);
console.log(filarray) // [ 1, 10, 20 ]


// string - upper, lower
const st1="varun";
const u1=st1.toUpperCase()
console.log(u1) // VARUN

const l1=st1.toLowerCase()
console.log(l1) // varun


// check if arrays contains value
const lang=["Python","Java","JS"]
if (lang.includes("Python")) {
    console.log("found")
}

// check if arrays is empty
const empty=[]

if (empty.length===0)
{
    console.log("Array is empty")
}

// generate random no
const min=10;
const max=20;
const randomno=Math.random()+(max-min+1)+min;
console.log(randomno) // 21.191714620766767


// string to number
const st2="32";
const dbl=parseFloat(st2)
console.log(dbl) // 32
console.log(typeof(dbl)) // number


// join array elements into string
const words=["hello","Varun"]
const sentence=words.join(' ')
console.log(sentence) // hello Varun
 

// get Object property
const person=
{
    name:'varun',
    age:31,
    dob:'16-08-1993'
}

console.log(user['name']) // varun


// clone array/object
const marks2=[10,20,30,40]
const marksdup=[...marks2] // // spread operator
console.log(marksdup) // [ 10, 20, 30, 40 ]

const dupuser={...user} // spread operator
console.log(dupuser) // { name: 'varun', age: 31 }


// convert object to array
const det={
    name:'QA',
    age:31
}

// get keys
const keysarray=Object.keys(det)
console.log(keysarray) // [ 'name', 'age' ]

// get values
const valarray=Object.values(det)
console.log(valarray) // [ 'QA', 31 ]

// get keys and values
const valarr=Object.entries(det)
console.log(valarr) // [ [ 'name', 'QA' ], [ 'age', 31 ] ]


// get current date and time
const currdate=new Date();
console.log(currdate.toLocaleString()); // 19/8/2023, 12:38:40 pm


// check variable is defined
let i;
if (typeof(i)==='undefined') {
    console.log("var not defined")
}


//truncate an array
const t1=[1,1,2,3,4,5]
t1.length=3;
console.log(t1) // [ 1, 1, 2 ]


// last name in array/string
const pop=[1,2,3,4,5,6]
n1=pop.slice(-1);
console.log(n1) // [ 6 ]