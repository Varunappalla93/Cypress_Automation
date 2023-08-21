// arrays

let arr1=[];
let arr2=[1,2,3,4]
let arr3=["apple","banana","orange"]

let lang=["Python","Java","Javascript"]

lang.push("Ruby","PHP")
console.log(lang) // [ 'Python', 'Java', 'Javascript', 'Ruby','PHP']


lang.pop()
console.log(lang) // [ 'Python', 'Java', 'Javascript', 'Ruby' ]


firstfruit=arr3.shift()
console.log(firstfruit) // apple
console.log(arr3) // [ 'banana', 'orange' ]


let colors=["White","Green"]
colors.unshift("Green","yellow")
console.log(colors) // [ 'Green', 'yellow', 'White', 'Green' ]
console.log(colors.length) // 4


let animals=["cat","dog","bird","fish"]
animals.splice(1,2,"bear","elephant")
console.log(animals) // [ 'cat', 'bear', 'elephant', 'fish' ]


let pop=[1,3,4,5,6]
console.log(pop.slice(0,3)) // [ 1, 3, 4 ]

let fr=["apple","banana","orange"]
let no=[1,2,3,4]

let mixed_arr=fr.concat(no)
console.log(mixed_arr) // [ 'apple', 'banana', 'orange', 1, 2, 3, 4 ]


let colors2=["red","green","blue","red"]
let indexred=colors2.indexOf("red")
console.log(indexred) // 0


let redSecondIndex=colors2.indexOf("red",colors2.indexOf("red")+1)
console.log(redSecondIndex) // 3


let des=["admin","QA","dev"]
console.log(des.includes("QA","Demo")) // true, as either one is included
console.log(des.includes("qa")) // false



let nos2=[1,2,3,4,5]
nos2.forEach((ele) => {
    console.log(ele*2)
});

// 2 4 6 8 10