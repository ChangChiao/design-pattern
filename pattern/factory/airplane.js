import Enemy from "./enemy";
export default class Airplane extends Enemy {
    x = 0;
    y = 0;
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }
    show() {
        console.log("hello child", this.x);
    }
}
