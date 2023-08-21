// loops

// for loops
for(let i=1;i<=10;i++)
{
    console.log(i)
}


// for of loop - for iterating over arrays, strings and maps etc.
const arr=["a","b","c","d"]

for (const i of arr) {
    console.log(i)
}


// or iterate using array indexes to print array values.
const arr1=["a1","b1","c1","d1"]
for(let j=0;j<arr1.length;j++)
{
    console.log(arr1[j])
}


// while - loop
let k=1;
while(k<11)
{
    console.log(k)
    k++;
}


// do-while
let m=1
do {
    console.log(m);
    m++;
} while (m<=5);



let num=5;
while (num<=20) {
    console.log(num)
    if (num%5==0)
     {
        console.log("Hi")    
        break;
    }
    num++;
} 
// 5  Hi


// for of using break
const browser=["chrome","firefox","safari"]
for(const b of browser)
{
    console.log(b)
    if (b=="firefox")
    {
        console.log("launch firefox")
        break;
    }
}

// chrome
// firefox
// launch firefox



// for in loop - for iterating over objects
const user = {
    name:"Varun",
    age:30,
    city:"NY"
}

for(const key in user)
{
    console.log(key+" : "+user[key])
}

// name : Varun
// age : 30
// city : NY