// Inheritance
// parent class
class vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `${this.make}, ${this.model}, ${this.year}`
    }

    startEngine() {
        console.log("Start Engine")
    }
}

// child class
class Car extends vehicle {
    constructor(make, model, year, fueltype) {
        super(make, model, year)
        this.fueltype = fueltype;

    }

    DriveCar() {
        console.log("Driving the car " + this.model + " and its fueltype is " + this.fueltype)
    }
}

// child class
class Truck extends vehicle {
    constructor(make, model, year, capacity) {
        super(make, model, year)
        this.capacity = capacity;

    }

    DriveTruck() {
        console.log("Driving the truck " + this.model + " and its capacity is " + this.capacity)
    }
}
const car=new Car("BMW","Q1",2010,"Petrol")

const truck=new Truck("Tata","Sumo",2020,150000)

car.DriveCar() // Driving the car Q1 and its fueltype is Petrol
car.startEngine() // Start Engine
console.log(car.getInfo()) // BMW, Q1, 2010

truck.startEngine() //Start Engine
truck.DriveTruck() // Driving the truck Sumo and its capacity is 150000
console.log(truck.getInfo()) // Tata, Sumo, 2020

// Child class can extend only one parent class.
// Multiple inheritance is not allowed in JS.
// Multilevel inheritance is allowed in JS.

