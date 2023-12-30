import { Receiver } from "./receiver";

export class Command {
  execute() {}
}

export class ConcreteCommand1 extends Command {
  receiver: null | Receiver = null;
  constructor(receiver: Receiver) {
    super();
    this.receiver = receiver;
  }

  execute() {
    this.receiver?.action1();
  }
}

export class ConcreteCommand2 extends Command {
  receiver: null | Receiver = null;
  constructor(receiver: Receiver) {
    super();
    this.receiver = receiver;
  }

  execute() {
    this.receiver?.action2();
  }
}
