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
import { Product } from "./structuralDesignPatterns/composite/product.js";
import { Bag } from "./structuralDesignPatterns/composite/bag.js";
import { Box } from "./structuralDesignPatterns/composite/box.js";
import { Invoker } from "./behavioralDesignPatterns/command/invoker.js";
import { Receiver } from "./behavioralDesignPatterns/command/receiver.js";
import {
  ConcreteCommand1,
  ConcreteCommand2,
} from "./behavioralDesignPatterns/command/command.js";
import { NumberIterator } from "./behavioralDesignPatterns/Iterator/numberIterator.js";
import {
  ConcreteHandler1,
  ConcreteHandler2,
} from "./behavioralDesignPatterns/chainOfResponsibility/concreteHandler.js";

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

// composite

const pen = new Product("pen", 60);
const eraser = new Product("eraser", 20);

const bagA = new Bag();
bagA.addProduct(pen);
bagA.addProduct(pen);

const bagB = new Bag();
bagB.addProduct(pen);
bagB.addProduct(pen);
bagB.addProduct(pen);

const box = new Box();
box.addProduct(bagA);
box.addProduct(bagB);
box.addProduct(eraser);

console.log("box.totalPrice", box.totalPrice);

// command
const receiver = new Receiver();
const command1 = new ConcreteCommand1(receiver);
const command2 = new ConcreteCommand2(receiver);

const invoker = new Invoker();

invoker.setCommand(command1);
invoker.executeCommand();

invoker.setCommand(command2);
invoker.executeCommand();

// iterator
const iterator = new NumberIterator(1, 5);

let result = iterator.next();
while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}

// chain of Responsibility

const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();

//create chain
handler1.setSuccessor(handler2);

handler1.handleRequest("Type1");
handler1.handleRequest("Type2");
handler1.handleRequest("Type3");
