let num=[10,2,3,4,5]
let flag=num.every((e)=>e<10);
console.log(flag) // false


let num2=[10,2,3,4,5]
let evennos=num2.some((e)=>e%2==0)
console.log(evennos) // true

let total=[11,21,30,40]
let fe=total.find((e)=>e%2==0)
console.log(fe) // 30


let arr=["Apple","banana","mango"]
let strindex=arr.indexOf("banana")
console.log(strindex) // 1


let fru=["Apple","banana","mango","Apple"]
console.log(fru.lastIndexOf("Apple")) // 3


let fru2=["red","green","blue"]
fru2.reverse()
console.log(fru2) // [ 'blue', 'green', 'red' ]


let products=["iphone","12macbook","apple watch","Tshirt"]
let sortedarray=products.sort()
console.log(sortedarray) // [ '12macbook', 'Tshirt', 'apple watch', 'iphone' ]