import { Coffee } from "./coffee.js";

export class SugarDecorator {
  coffee: Coffee | null = null;
  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee!.cost() + 2;
  }
}

export class MilkDecorator {
  coffee: Coffee | null = null;
  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee!.cost() + 3;
  }
}
