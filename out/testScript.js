// let message: string = 'Hello World';
// console.log(message);
// /*
// window.onload = function () {
//     var car = new Car('2.0 CDI');
//     car.start();
//     car.stop();
// };*/
// var num: number = 2;
// var tekst: string = "primjer";
// declare var $;
// //$("div").text("tekst");
// var names: string[] = ['John'];
// var name1 = names[1];
// function sum(num: number, text: string, optional?: string): string {
//     return num + text + optional;
// }
// var rectangle = {
//     h: 20,
//     w: 40,
//     calcArea() {
//         return this.h * this.w;
//     }
// }
// var mult = (h: number, w: number) => h * w;
// console.log(mult(5, 5));
// var update: (h: number) => void;
// var square: (rect: { h: number, w?: number }) => number;
// square = function (rect) {
//     if (rect.w === undefined) {
//         return rect.h * rect.w;
//     }
//     return rect.h * rect.w;
// }
// interface Person {
//     ime: string;
//     age: number;
//     kids: number;
//     calcPets: () => number;
//     makeYounger: (years: number) => void;
//     greet: (msg: string) => string;
// };
// var p: Person = {
//     ime: "Bakir",
//     age: 20,
//     kids: 2,
//     calcPets: function () {
//         return this.kids * 2;
//     },
//     makeYounger: function (years: number) {
//         this.age -= years;
//     },
//     greet: function (msg: string) {
//         return msg;
//     }
// }
// interface sessionEval {
//     addRating: (rating: number) => void;
//     calcRating: () => number;
// }
// function sessionEvaluator(): sessionEval {
//     var ratings: number[] = [];
//     var addRatingImpl = (rating: number) => {
//         ratings.push(rating);
//     }
//     var calcRatingImpl = () => {
//         var sum: number = 0;
//         ratings.forEach(function (el) {
//             sum += el;
//         });
//         return sum / ratings.length;
//     }
//     return {
//         addRating: addRatingImpl,
//         calcRating: calcRatingImpl
//     }
// }
// var s = sessionEvaluator();
// s.addRating(5);
// s.addRating(5);
// s.addRating(5);
// s.addRating(5);
// console.log(s.calcRating());
// /*
// class Engine {
//     constructor(public horsePower: number, public engineType: string) { }
// }
// class Car {
//     private _engine: Engine;
//     constructor(engine: Engine) {
//         this.engine = engine;
//     }
//     get engine(): Engine {
//         return this._engine;
//     }
//     set engine(value: Engine) {
//         if (value == undefined) throw 'Please supply an engine';
//         this._engine = value;
//     }
//     start(): void {
//         alert('Car engine started ' + this._engine.engineType);
//     }
// }
// var x: HTMLInputElement = <HTMLInputElement>document.getElementById("xId");
// */
// interface IEngine {
//     start(callback: (startStatus: boolean, engineType: string) => void): void;
//     stop(callback: (stopStatus: boolean, engineType: string) => void): void;
// }
// interface IAutoOptions {
//     basePrice: number;
//     engine: IEngine;
//     state: string;
//     make: string;
//     model: string;
//     year: number;
// }
// interface ITruckOptions extends IAutoOptions {
//     bedLength: string;
//     fourByFour: boolean;
// }
// class Engine implements IEngine {
//     constructor(public horsePower: number, public engineType: string) { }
//     start(callback: (startStatus: boolean, engineType: string) => void) {
//         window.setTimeout(() => {
//             callback(true, this.engineType);
//         }, 1000);
//     }
//     stop(callback: (stopStatus: boolean, engineType: string) => void) {
//         window.setTimeout(() => {
//             callback(true, this.engineType);
//         }, 1000);
//     }
// }
// class CustomEngine implements IEngine {
//     start(callback: (startStatus: boolean, engineType: string) => void) {
//         window.setTimeout(() => {
//             callback(true, 'Custom Engine');
//         }, 1000);
//     }
//     stop(callback: (stopStatus: boolean, engineType: string) => void) {
//         window.setTimeout(() => {
//             callback(true, 'Custom Engine');
//         }, 1000);
//     }
// }
// class Accessory {
//     constructor(public accessoryNumber: number, public title: string) { }
// }
// class Auto {
//     private _basePrice: number;
//     private _engine: IEngine;
//     state: string;
//     make: string;
//     model: string;
//     year: number;
//     accessoryList: string;
//     constructor(options: IAutoOptions) {
//         this.engine = options.engine;
//         this.basePrice = options.basePrice;
//         this.state = options.state;
//         this.make = options.make;
//         this.model = options.model;
//         this.year = options.year;
//     }
//     calculateTotal(): number {
//         var taxRate = .08;
//         return this.basePrice + (taxRate * this.basePrice);
//     }
//     addAccessories(...accessories: Accessory[]) {
//         this.accessoryList = '';
//         for (var i = 0; i < accessories.length; i++) {
//             var ac = accessories[i];
//             this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
//         }
//     }
//     getAccessoryList(): string {
//         return this.accessoryList;
//     }
//     get basePrice(): number {
//         return this._basePrice;
//     }
//     set basePrice(value: number) {
//         if (value <= 0) throw 'price must be >= 0';
//         this._basePrice = value;
//     }
//     get engine(): IEngine {
//         return this._engine;
//     }
//     set engine(value: IEngine) {
//         if (value == undefined) throw 'Please supply an engine.';
//         this._engine = value;
//     }
// }
// class Truck extends Auto {
//     bedLength: string;
//     fourByFour: boolean;
//     constructor(options: ITruckOptions) {
//         super(options);
//         this.bedLength = options.bedLength;
//         this.fourByFour = options.fourByFour;
//     }
// }
// window.onload = function () {
//     var truck = new Truck({
//         engine: new Engine(250, 'V6'),
//         basePrice: 45000,
//         state: 'Arizona',
//         make: 'Ford',
//         model: 'F-150',
//         year: 2013,
//         bedLength: 'Short bed',
//         fourByFour: true
//     });
//     var engine: IEngine = new Engine(250, 'V6');
//     console.log((<Engine>engine).horsePower);
//     alert(truck.bedLength);
// };
//# sourceMappingURL=testScript.js.map