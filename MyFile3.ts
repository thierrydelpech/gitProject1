/*function sayHello(target:{firstname: string, money:number}){
    return `Hello ${target.firstname}, you have ${target.money} on your bank account.`;
}
const message: string = sayHello({ firstname: 'thierry', money: 5000 });
console.log(message);*/

class Car { 
    Engine: string; // par défaut, Engine est public 
    Marque : string;

    constructor(public engine: string, public marque:string) { 
        this.Engine = engine; 
        this.Marque = marque;
        this.Annee = annee;
    } 

    DisplayCarEngine() { 
        console.log(this.GetCarEngine()); 
    } 

    GetCarEngine(): string { 
        return 'The engine is: ' + this.engine; 
    } 
} 

//let bigCar = new Car('V8','Citroen'); 
let littleCar = new Car('2CV', 'Peugeot'); 
//console.log(littleCar.Engine, littleCar.Marque); 
let carEngine = littleCar.GetCarEngine(); 
console.log(littleCar.GetCarEngine());
