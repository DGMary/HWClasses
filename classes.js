/* Examples */
// class Human {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     grewOld () {
//         this.age++
//     }
// }

// class Man extends Human{
//     constructor (name, age, beard) {
//         super(name, age);
//         this.beard = beard;
//     }
//     grewOld () {
//         this.age++;
//         if (this.age === 16) {
//             this.beard = true;
//         }
//     }
// }
// let john = new Man('John', 15, false)
// john
// john.grewOld()


// function Human (name, age) { //constructor
//     this.name = name; // field
//     this.age = age; //field
// }

// Human.prototype.grewOld = function () { // method
//     this.age++;
// }

// function Man (name, age, beard) {
//     Human.call(this, name, age);
//     this.beard = beard;
// }

// Man.prototype = Object.create(Human.prototype);
// Man.prototype.grewOld = function () {
//     this.age++;
//         if (this.age === 16) {
//             this.beard = true;
//         }
// }
// Man.prototype.constructor = Man;

// var john = new Man('John', 15, false);
// john
// john.grewOld()
// john


// var peter /* instance */ = new Human('peter', 15);
// var peter2 /* instance */ = new Human('peter', 15);
// console.log(Human.population)
// peter.grewOld();


//Homework

/* Design Class Movie */

class Movie {
    constructor(name , poster, description , year, country , genre, duration , trailer){
       this.name = name ;
       this.poster =  poster;
       this.description = description;
       this.year =  year;
       this.country =  country;
       this.genre =  genre;
       this.duration =  duration;
       this.trailer = trailer;
    }
    getInfo () {
        return (this.name + this.poster + this.description + this.year + this.country + this.genre + this.duration);
        console.log(this.name);
    }
    showTrailer(){
        return this.trailer;
    }
}
console.log(Movie());


/* Design Class MovieSession and inherited classes 2d and 3dSession */


/* Rewrite next classes to the ES6 syntax */

// function Square(a) {
//     this.a = a;
// }
// Square.prototype.getWidth = function () {
//     return this.a;
// }

// Square.prototype.getArea = function () {
//     return this.a*this.a;
// }
// var s = new Square(4);

// function Rectangle(a, b) {
//     Square.call(this, a);
//     this.b = b;
// }
// Rectangle.prototype = Object.create(Square.prototype);
// Rectangle.prototype.constructor = Rectangle;
// Rectangle.prototype.getHeight = function () {
//     return this.b;
// }
// Rectangle.prototype.getArea = function () {
//     return this.b*this.a;
// }
// var rect = new Rectangle(2, 3)



/* Rewrite next classes to the ES5 syntax */

// class Food {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
//     getPrice () {
//         return this.price;
//     }
//     getName () {
//         return this.name;
//     }
// }

// class Chocolate extends Food {
//     constructor (name, price, percentage, weight) {
//         super(name, price, weight);
//         this.percentage = percentage; 
//         this.weight = weight;
//     }
//     calculateCallories() {
//         const cals = Chocolate.calloriesPercentageMap[this.percentage];
//         if (cals) {
//             return (cals/100) * this.weight
//         }
//     }
// }
// Chocolate.calloriesPercentageMap = { // каллории на сто грамм в зависимости от процента шоколада
//     72: 300,
//     85: 350,
//     60: 250
// }
// var alenka = new Chocolate('alenka', 40, 72, 130);






