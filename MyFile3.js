/*function sayHello(target:{firstname: string, money:number}){
    return `Hello ${target.firstname}, you have ${target.money} on your bank account.`;
}
const message: string = sayHello({ firstname: 'thierry', money: 5000 });
console.log(message);*/
var Car = /** @class */ (function () {
    function Car(engine, marque) {
        this.engine = engine;
        this.marque = marque;
        this.Engine = engine;
        this.Marque = marque;
    }
    Car.prototype.DisplayCarEngine = function () {
        console.log(this.GetCarEngine());
    };
    Car.prototype.GetCarEngine = function () {
        return 'The engine is: ' + this.engine;
    };
    return Car;
}());
//let bigCar = new Car('V8','Citroen'); 
var littleCar = new Car('2CV', 'Peugeot');
//console.log(littleCar.Engine, littleCar.Marque); 
var carEngine = littleCar.GetCarEngine();
console.log(littleCar.GetCarEngine());
