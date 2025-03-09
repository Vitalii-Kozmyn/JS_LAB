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
    diver: {
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
car2.drive();
//...........................................................