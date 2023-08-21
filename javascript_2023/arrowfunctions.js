const square=(num)=>num*num
console.log(square(6)) // 36



const message=()=>"Hello JS"
console.log(message()) // Hello JS

const add=(a,b)=>a+b
console.log(add(1,99)) // 


const person={
    firsname:"QA",
    lastname:"Demo"
}

const getFullName=(per)=>`${per.firsname} ${per.lastname}`

const fullname=getFullName(person)
console.log(fullname)


const greet=(username='guest',age=30)=>`Hello, ${username}, you are ${age} years old !!!`
console.log(greet("varun",29)) // Hello, varun, you are 29 years old !!!

console.log(greet()); // Hello, guest, you are 30 years old !!!


// rest parameters
const sum=(...numbers) => numbers.reduce((acc,num)=>acc+num,0)
console.log(sum(1,2,3,4,5)); // 15


const browserInfo=(browser='Chrome',...details)=>
{
    console.log(`browser: ${browser}`)
    console.log('Other details:',details)
}


browserInfo("Chrome","qa","test");

//browser: Chrome
// Other details: [ 'qa', 'test' ]



const maxnum=(a,b,c)=>{
    return Math.max(a,b,c)
}

console.log(maxnum(10,20,90)) // 90