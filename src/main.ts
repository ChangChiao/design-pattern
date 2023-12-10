import { Sun } from "./pattern/singleton.js";
import { Airplane } from "./pattern/factory/airplane.js";

// singleton
const instance1 = new Sun();
const instance2 = new Sun();
instance1.addNum();
instance2.addNum();

console.log("singleTon", instance1.getNum());

// factory
const airplane = new Airplane(1, 2);
airplane.show();
