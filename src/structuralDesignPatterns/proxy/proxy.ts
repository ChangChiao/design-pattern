export class RealSubject {
  request() {
    console.log("RealSubject: Handling request.");
  }
}

export class ProxyObj {
  realSubject: null | RealSubject;
  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  request() {
    if (this.checkAccess()) {
      this.realSubject?.request();
      this.logAccess();
    } else {
      console.log("Proxy: Access denied.");
    }
  }

  checkAccess() {
    console.log("Proxy: Checking access.");
    return true;
  }

  logAccess() {
    console.log("Proxy: Logging access.");
  }
}
