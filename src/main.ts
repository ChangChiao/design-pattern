import { Sun } from "./pattern/singleton.js";
import { Airplane } from "./pattern/factory/airplane.js";
import {
  ConcreteFactory1,
  ConcreteFactory2,
} from "./pattern/AbstractFactory/abstractFactory.js";
import { CarBuilder } from "./pattern/builder/carBuilder.js";
import { AudioFacade } from "./pattern/facade/audioFacade.js";
import { Coffee } from "./pattern/decorator/coffee.js";
import {
  MilkDecorator,
  SugarDecorator,
} from "./pattern/decorator/decorator.js";

// singleton
const instance1 = new Sun();
const instance2 = new Sun();
instance1.addNum();
instance2.addNum();

console.log("singleTon", instance1.getNum());

// factory
const airplane = new Airplane(1, 2);
airplane.show();

//Abstract Factory
const clientCode = (factory: ConcreteFactory1 | ConcreteFactory2) => {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  productA.display();
  productB.display();
};

const factory1 = new ConcreteFactory1();
clientCode(factory1);

const factory2 = new ConcreteFactory2();
clientCode(factory2);

// builder

const carBuilder = new CarBuilder();
const myCar = carBuilder
  .buildBrand("Toyota")
  .buildModel("Camry")
  .buildColor("Blue")
  .buildEngine("V6")
  .getResult();

myCar.displayInfo();

// facade
const audioSystem = new AudioFacade();

audioSystem.turnOnAudioSystem();

audioSystem.turnOffAudioSystem();

//Decorator
const coffee = new Coffee();
console.log("Cost of simple coffee:", coffee.cost());

const sugarCoffee = new SugarDecorator(coffee);
console.log("Cost of coffee with sugar:", sugarCoffee.cost());

const milkCoffee = new MilkDecorator(coffee);
console.log("Cost of coffee with milk:", milkCoffee.cost());

const sugarMilkCoffee = new SugarDecorator(new MilkDecorator(coffee));
console.log("Cost of coffee with sugar and milk:", sugarMilkCoffee.cost());
