export class Car {
  brand: string | null = null;
  model: string | null = null;
  color: string | null = null;
  engine: string | null = null;
  constructor() {}

  displayInfo() {
    console.log(
      `Brand: ${this.brand}, Model: ${this.model}, Color: ${this.color}, Engine: ${this.engine}`
    );
  }
}
