import Enemy from "./enemy.js";

export default class Airplane extends Enemy {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
  }

  show() {
    console.log("hello child", this.x);
  }
}
