import { Bag } from "./bag";
import { Product } from "./product";

export class Box {
  price = 0;
  products: (Product | Bag)[] = [];
  constructor() {
    this.price = 50;
    this.products = [];
  }

  get totalPrice() {
    const productsTotalPrice = this.products.reduce(
      (totalPrice, product) => totalPrice + product.totalPrice,
      0
    );
    return productsTotalPrice + this.price;
  }

  addProduct(product: Product | Bag) {
    this.products.push(product);
  }
}
