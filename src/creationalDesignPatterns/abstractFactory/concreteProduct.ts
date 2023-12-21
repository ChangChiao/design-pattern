import { AbstractProductA, AbstractProductB } from "./abstractProduct.js";

export class ConcreteProductA1 extends AbstractProductA {
  constructor() {
    super();
    this.type = "Type1";
  }
}

export class ConcreteProductA2 extends AbstractProductA {
  constructor() {
    super();
    this.type = "Type2";
  }
}

export class ConcreteProductB1 extends AbstractProductB {
  constructor() {
    super();
    this.type = "Type1";
  }
}

export class ConcreteProductB2 extends AbstractProductB {
  constructor() {
    super();
    this.type = "Type2";
  }
}
