export default class Sun {
  static instance = null;
  static num = 0;
  constructor() {
    if (Sun.instance === null) {
      Sun.instance = this;
    }
    return Sun.instance;
  }
  addNum() {
    Sun.num += 1;
  }
  getNum() {
    return Sun.num;
  }
}
