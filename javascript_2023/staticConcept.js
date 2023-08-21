class Car {
    static wheels = 4;

    constructor(name, model, price) {
        this.name = name;
        this.model = model;
        this.price = price;
    }

    static stopCar() {
        console.log("Stop car")
    }

    driveCar() {
        console.log("Driving the car " + `${this.name}`)
    }

}


const c1 = new Car("Honda", 2023, 500000)

console.log(c1.name,c1.model,c1.price) // Honda 2023 500000
console.log(c1.wheels) // undefined
console.log(Car.wheels) // 4

c1.driveCar() // Driving the car Honda
Car.stopCar() // Stop car

// cannot call static methods/variables with obj ref,and cannot call instance methods/variables with classname.

