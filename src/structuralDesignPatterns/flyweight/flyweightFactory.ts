import { Flyweight } from "./flyweight.js";

interface DataObject {
  [key: string]: Flyweight;
}

export class FlyweightFactory {
  data: DataObject = {};

  getData(sharedData: string) {
    if (!this.data[sharedData]) {
      this.data[sharedData] = new Flyweight(sharedData);
    }
    return this.data[sharedData];
  }
  getFlyweightsCount() {
    return Object.keys(this.data).length;
  }
}
