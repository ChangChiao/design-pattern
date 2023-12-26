export class Product {
  name = "";
  price = 0;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  get totalPrice() {
    return this.price;
  }
}
