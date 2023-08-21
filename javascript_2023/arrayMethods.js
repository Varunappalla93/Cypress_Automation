// map
let nos = [10, 20, 30]
let dblnos = nos.map((e) => e * 2)
console.log(dblnos) // [ 20, 40, 60 ]

let fahtemp = [32, 68, 86, 104, 212]
function fahtocel(fah) {
    return (fah - 32) * (5 / 9)
}

let celtemp = fahtemp.map(fahtocel)
console.log(celtemp) // [ 0, 20, 30, 40, 100 ]


// filter 
let nos1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenos = nos1.filter((e) => e % 2 == 0)
console.log(evenos) // [ 2, 4, 6, 8, 10 ]

let emp = [
    {
        name: "varun",
        age: 30,
        dws: "QA"
    },
    {
        name: "Vineet",
        age: 27,
        dws: "MS"
    },
]

let filteredarray = emp.filter((e) => {
    return e.age > 29 && e.name == "varun"
})

console.log(filteredarray) // [ { name: 'varun', age: 30, dws: 'QA' } ]

// reduce
const arr3 = [1, 2, 3, 4, 5]
reduce_array = arr3.reduce((acc, num) => acc * num, 1)
console.log(reduce_array) // 120


let top = [1, 32, 45, 99]
let maxno = top.reduce((max, num) => {
    if (num > max) {
        return num;
    }
    else {
        return max;
    }
}, top[0])


console.log(maxno) // 99



let cartItems = [
    { name: "jeans", price: 500 },
    { name: "shirt", price: 300 },
]

let totalitemsprice = cartItems.reduce((total, item) => total + item.price, 0)
console.log(totalitemsprice) // 800