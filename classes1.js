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
    }
    showTrailer(){
        return this.trailer;
    }
}

/* Design Class MovieSession and inherited classes 2d and 3dSession */
class MovieSession{
    constructor(film, poster , day , time , format ){
        this.film = film;
        this.poster = poster;
        this.day = day;
        this.time = time;
        this.format = format;
    }
    getSession(){
        return (this.film + this.poster + this.day + this.time + this.format );
    }
}

class d2Session extends MovieSession{
    constructor (film, poster , day , time , format){
        super(film, poster , day , time );
        this.format = '2D';
    }
}
class d3Session extends MovieSession{
    constructor (film, poster , day , time , format){
        super(film, poster , day , time );
        this.format = '3D';
    }
}


/* Rewrite next classes to the ES6 syntax */
class Square{
    constructor(a){
        this.a = a;
    }
    getWidth() {
        return this.a;
    }
    getArea() {
        return this.a*this.a;
    }
}
var s = new Square(4);

class Rectangle extends Square{
    constructor(a , b){
        super(a);
        this.b = b;
    }
    getHeight() {
        return this.b;
    }
    getArea() {
        return this.b*this.a;
    }
}

var rect = new Rectangle(2, 3);


/* Rewrite next classes to the ES5 syntax */
function  Food(name , price) {
        this.name = name;
        this.price = price;
}
Food.prototype.getPrice = function () {
        return this.price;
}
Food.prototype.getName = function () {
        return this.name;
}
function Chocolate (name, price, percentage, weight) {
        Food.call(this, name, price);
        this.percentage = percentage; 
        this.weight = weight;
}
Chocolate.prototype = Object.create(Food.prototype);
Chocolate.prototype.calculateCallories = function() {
        const cals = Chocolate.calloriesPercentageMap[this.percentage];
        if (cals) {
            return (cals/100) * this.weight
        }
}
Chocolate.calloriesPercentageMap = { // каллории на сто грамм в зависимости от процента шоколада
    72: 300,
    85: 350,
    60: 250
}
var alenka = new Chocolate('alenka', 40, 72, 130);
console.log(alenka)




