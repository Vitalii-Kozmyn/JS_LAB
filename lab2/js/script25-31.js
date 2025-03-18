//1.2.25 - 26:
function Triangular(a, b, c) {
    const obj = {
        a: a,
        b: b,
        c: c,
    };

    const { a: A = 3, b: B = 4, c: C = 5 } = obj;

    return { a: A, b: B, c: C };
}

console.log(Triangular());
console.log(Triangular(12, 4, 10));
console.log(Triangular(102, 1, 0));
console.log(" ");
//.................................................

//1.2.27 - 28:
function PiMultiplier(n){
    return function() {
        return Math.PI * n;
    };
}

const res1 = PiMultiplier(2);
console.log(res1());

const res2 = PiMultiplier(2/3);
console.log(res2());

const res3 = PiMultiplier(1/2);
console.log(res3());
console.log(" ");
//.................................................

//1.2.29:
function Painter(color) {
    return function(type) {
        if(type) {
            return console.log(`Color: ${color}, Type: ${type}.`)
        } else {
            return "No ‘type’ property occurred!"
        }
    }
}

const PaintBlue = Painter("blue");
const PaintRed = Painter("red");
const PaintYellow = Painter("yellow");

let obj1 = {
    maxSpeed: 280,
    type: "Sportcar",
    color: "magenta",
};

let obj2 = {
    type: "Truck",
    avg_speed: 90,
    load_capacityr: 2400,
};

let obj3 = {
    maxSpeed: 180,
    color: "purple",
    isCarr: true,
};

console.log(PaintBlue(obj1.type));
console.log(PaintRed(obj2.type));
console.log(PaintYellow(obj3.type));

console.log(" ");
//.................................................

