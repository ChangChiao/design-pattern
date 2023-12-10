import { Enemy } from "./enemy.js";

export class Airplane extends Enemy {
  private x = 0;
  private y = 0;
  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
  }

  show() {
    console.log("factory", this.x);
  }
}
