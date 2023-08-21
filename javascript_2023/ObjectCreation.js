const user =
{
    name: "Varun",
    age: 30,
    des: "QA"
}

console.log(user.name) // Varun


function Car(brand, model, price) {
    this.brand = brand
    this.model = model
    this.price = price
}

const car = new Car("BMW", "520d", 10000)
console.log(car) // Car { brand: 'BMW', model: '520d', price: 10000 }
console.log(car.brand + ":" + car.model + ":" + car.price) // BMW:520d:10000


class Customer {
    constructor(name, product) {
        this.name = name;
        this.product = product;
    }

    addtoCart() {
        console.log(`${this.product} added to cart`)
    }
}

const cust1 = new Customer("Varun", "Mac")
console.log(cust1.name) // Varun
console.log(cust1.product) // Mac
cust1.addtoCart()


// prototype

const empprototype=
{
    printInfo:function()
    {
        console.log(`hello emp name is ${this.name}`)
    }
}

const e1=Object.create(empprototype)
e1.name="QA";
e1.printInfo(); // hello emp name is QA


// factory function
function createDept(deptname,hod){
return {
    deptname:deptname,
    hod:hod,
    getDeptInfo:function()
    {
        console.log(`hello dept name is ${this.deptname} and hod is ${this.hod}`)
    }
}
}

const dep1=createDept("IT","QA1")
console.log(dep1) // { deptname: 'IT', hod: 'QA1', getDeptInfo: [Function: getDeptInfo] }
dep1.getDeptInfo() // hello dept name is IT and hod is QA1