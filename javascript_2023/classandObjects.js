class Car {
    constructor(name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }

    
// SyntaxError: A class may only have one constructor
    // constructor(name) {
    //     this.name = name;
       
    // }

    refuel() {
        console.log(this.name+" car is refueled")
    }

}

const c1=new Car("BMW",450000,"Blue")
console.log(c1.name)
console.log(c1.price)
console.log(c1.color)
c1.refuel()

// BMW
// 450000
// Blue
// BMW car is refueled

const c2=new Car("Audi")
console.log(c2.name)
console.log(c2.price)
console.log(c2.color)
c2.refuel()
// Audi
// undefined
// undefined
// Audi car is refueled