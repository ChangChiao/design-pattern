import { Car } from "./car.js";

export class CarBuilder {
  private car: Car;
  constructor() {
    this.car = new Car();
  }

  buildBrand(brand: string) {
    this.car.brand = brand;
    return this;
  }

  buildModel(model: string) {
    this.car.model = model;
    return this;
  }

  buildColor(color: string) {
    this.car.color = color;
    return this;
  }

  buildEngine(engine: string) {
    this.car.engine = engine;
    return this;
  }

  getResult() {
    return this.car;
  }
}
