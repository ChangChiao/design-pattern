import { Handler } from "./handler.js";

export class ConcreteHandler1 extends Handler {
  handleRequest(request: string) {
    if (request === "Type1") {
      console.log("ConcreteHandler1 handle Type1 request。");
    } else {
      super.handleRequest(request);
    }
  }
}

export class ConcreteHandler2 extends Handler {
  handleRequest(request: string) {
    if (request === "Type2") {
      console.log("ConcreteHandler2 handle Type2 request。");
    } else {
      super.handleRequest(request);
    }
  }
}
