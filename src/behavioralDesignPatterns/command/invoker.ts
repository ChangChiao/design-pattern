import { Command } from "./command";

export class Invoker {
  command: Command | null = null;
  constructor() {
    this.command = null;
  }

  setCommand(command: Command) {
    this.command = command;
  }

  executeCommand() {
    this.command?.execute();
  }
}
