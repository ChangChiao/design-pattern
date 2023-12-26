import { Sun } from "./creationalDesignPatterns/singleton/singleton.js";
import { Airplane } from "./creationalDesignPatterns/factory/airplane.js";
import {
  ConcreteFactory1,
  ConcreteFactory2,
} from "./creationalDesignPatterns/abstractFactory/abstractFactory.js";
import { CarBuilder } from "./creationalDesignPatterns/builder/carBuilder.js";
import { AudioFacade } from "./structuralDesignPatterns/facade/audioFacade.js";
import { Coffee } from "./structuralDesignPatterns/decorator/coffee.js";
import {
  MilkDecorator,
  SugarDecorator,
} from "./structuralDesignPatterns/decorator/decorator.js";
import { Adapter } from "./structuralDesignPatterns/adapter/adapter.js";
import {
  ProxyObj,
  RealSubject,
} from "./structuralDesignPatterns/proxy/proxy.js";
import { FlyweightFactory } from "./structuralDesignPatterns/flyweight/flyweightFactory.js";

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

// adapter
const adapter = new Adapter();
adapter.oldMethod();

// proxy
const realSubject = new RealSubject();
const proxy = new ProxyObj(realSubject);

proxy.request();

// flyweight
const factory = new FlyweightFactory();
const flyweight1 = factory.getData("A");
flyweight1.operation("1");
const flyweight2 = factory.getData("B");
flyweight2.operation("2");
const flyweight3 = factory.getData("A");
flyweight3.operation("3");
console.log(`Number of flyweights created: ${factory.getFlyweightsCount()}`);
