//1.2.12 -> 1.2.15:
class Square {
    a;

    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("Квадрат - це чотирикутник, у якого всі сторони рівні, а кути прямі s дорівнюють 90 градусів).");
    }

    length() {
        console.log(`Сума сторін квадрата: ${this.a * 4}`)
    }

    square() {
        console.log(`Площа квадарата: ${this.a**2}`)
    }

    info() {
        console.log(`Довжини всіх сторін: ${this.a}, ${this.a}, ${this.a}, ${this.a}`);
        console.log(`Величини всіх 4 кутів: 90 градусів`);
        this.length();
        this.square();
    }
}

// let square = new Square(5);
// square.help();
// square.info();
//................................................................

//1.2.16 -> 1.2.17:
class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    //1.2.22:
    get getA() {
        return `${this.a}`
    }

    get getB() {
        return `${this.b}`
    }

    set setA(a) {
        this.a = a;
    }

    set setB(b) {
        this.b = b;
    }
    //...........................................................

    static help() {
        console.log("Прямокутник — це плоска геометрична фігура, чотирикутник, усі кути якого прямі.");
    }

    length() {
        console.log(`Сума сторін прямокутника: ${2 * (this.a + this.b)}`);
    }

    square() {
        console.log(`Площа прямокутника: ${this.a * this.b}`);
    }

    info() {
        console.log(`Довжини всіх сторін: ${this.a}, ${this.b}, ${this.a}, ${this.b}`);
        console.log(`Величини всіх 4 кутів: 90 градусів`);
        this.length();
        this.square();
    }
}

// let rec = new Rectangle(5, 4);
// Rectangle.help();
// rec.info();
//................................................................

//1.2.18 -> 1.2.19:
class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Ромб (грец. ρομβος) — це паралелограм, у якого всі сторони рівні.");
    }

    length() {
        console.log(`Сума сторін ромба: ${4 * this.a}`);
    }

    square() {
        console.log(`Площа ромба: ${(this.a**2) * Math.sin(this.alpha * Math.PI / 180)}`);
    }

    info() {
        console.log(`Довжини всіх сторін: ${this.a}, ${this.a}, ${this.a}, ${this.a}`);
        console.log(`Тупий кут: ${this.alpha}`);
        console.log(`Гострий кут: ${this.beta}`);
        this.length();
        this.square();
    }
}

// let rom = new Rhombus(5, 120, 60);
// Rhombus.help();
// rom.info();
//................................................................

//1.2.20 -> 1.2.21:
class Parallelogram extends Rhombus {
    constructor(a, b, alpha, beta) {
        super(a, alpha, beta); 
        this.b = b;
    }

    static help() {
        console.log("Паралелогра́м — чотирикутник, протилежні сторони якого попарно паралельні, тобто лежать на паралельних прямих.");
    }

    length() {
        console.log(`Сума сторін паралелограма: ${2 * (this.a + this.b)}`);
    }

    square() {
        console.log(`Площа паралелограма: ${this.a * this.b * Math.sin(this.alpha * Math.PI / 180)}`);
    }

    info() {
        console.log(`Довжини всіх сторін: ${this.a}, ${this.b}, ${this.a}, ${this.b}`);
        console.log(`Тупий кут: ${this.alpha}`);
        console.log(`Гострий кут: ${this.beta}`);
        this.length();
        this.square();
    }
}
//................................................................
//1.2.23:
// Square.help();
// console.log(" ");
// Rectangle.help();
// console.log(" ");
// Rhombus.help();
// console.log(" ");
// Parallelogram.help();
//................................................................

//1.2.24:
// let square = new Square(5);
// let rectangle = new Rectangle(5, 4);
// let rhombus = new Rhombus(5, 150, 60);
// let parallelogram = new Parallelogram(5, 6, 130, 60);

// console.log("............................")
// square.info();
// console.log(" ");
// rectangle.info();
// console.log(" ");
// rhombus.info();
// console.log(" ");
// parallelogram.info();
//................................................................