import Sun from "./singleton.js";

const instance1 = new Sun();
const instance2 = new Sun();
instance1.addNum();
instance2.addNum();

console.log("singleTon", instance1.getNum());
