export class Handler {
  successor: Handler | null = null;
  constructor() {}

  setSuccessor(successor: Handler) {
    this.successor = successor;
  }

  handleRequest(request: string) {
    if (this.successor) {
      this.successor.handleRequest(request);
    } else {
      console.log("The request has not been processed yet");
    }
  }
}
