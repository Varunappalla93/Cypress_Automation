// Method overriding
// child class can override parent class methods/variables.

class Car {
    minSpeed=10;  
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    startEngine() {
        console.log("Start Engine for Car")
    }


}

class Audi extends Car {
    minSpeed=200;
    // overridden method
    startEngine()
     {
        console.log("Start Engine for Audi")
    }

    refuel()
    {
        console.log("Audi refuel")
    }
}

const a = new Audi()
a.startEngine() // Start Engine for Audi
a.refuel() // Audi refuel
console.log(a.minSpeed) // 200 



const c = new Car("BMW","Q1")
c.startEngine() // Start Engine for Car
console.log(c.make,c.model) // BMW Q1
// Car.refuel() // parent class cannot access child class methods/variables

console.log(c.minSpeed) // 10
