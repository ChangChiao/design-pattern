import { Product } from "./product";

export class Bag {
  price = 0;
  products: Product[] = [];
  constructor() {
    this.price = 20;
    this.products = [];
  }

  get totalPrice() {
    const productsTotalPrice = this.products.reduce(
      (totalPrice, product) => totalPrice + product.totalPrice,
      0
    );
    return productsTotalPrice + this.price;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }
}
