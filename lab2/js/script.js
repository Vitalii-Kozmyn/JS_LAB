//1.2.3......................................................
let car1 = new Object();

car1.color = "green";
car1.maxSpeed = 90;
car1.driver = new Object();
    car1.driver.name = "Vitalii Kozmyn";
    car1.driver.category = "C";
    car1.driver.personalLimitations = "No driving at night";
car1.tuning = true;
car1.numberOfAccidents = 0;

// console.log(car1);
//......................................................

//1.2.4......................................................
let car2 = {
    color: "scarlet",
    maxSpeed: 120,
    driver: {
        name: "Vitalii Kozmyn",
        category: "B",
        personalLimitations: null,
    },
    tuning: false,
    numberOfAccidents: 2,
    drive: function() {
        console.log("I can drive anytime");
    }
}

// console.log(car2);
//......................................................

//1.2.5......................................................
car1.drive = function() {
    console.log("I am not driving at night");
}

// car1.drive();
//...........................................................

//1.2.6......................................................
// car2.drive();
//...........................................................

//1.2.7......................................................
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
    this.driver = null;
}
//...........................................................

//1.2.8......................................................
Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience,
    }
}
//...........................................................

//1.2.9......................................................
Truck.prototype.trip = function () {
    if(this.driver) {
        let checknightDriving;
        if(this.driver.nightDriving == true) {
            checknightDriving = " drives at night";
        } else {
            checknightDriving = " does not drive at night";
        }
        console.log(`Driver ${this.driver.name} ${checknightDriving} and has ${this.driver.experience} years of experience.`);
    } else {
        console.log("No driver assigned");
    }
}
//...........................................................

//1.2.10......................................................
// let carTruck1 = new Truck("Red", 5000, 80, "Ford", "Fiesta");
// carTruck1.trip()//No driver assigned

// let carTruck2 = new Truck("Green", 4500, 85, "Ford", "Edge");
// carTruck2.AssignDriver("Vitalii Kozmyn", true, 5);
// carTruck2.trip(); //drives at night

// let carTruck3 = new Truck("Green", 6500, 60, "Ford", "F-150 Lightning");
// carTruck3.AssignDriver("Vitalii Kozmyn", false, 5);
// carTruck3.trip(); //does not drive at night
//...........................................................
