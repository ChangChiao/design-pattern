import { OldSystem } from "./oldSystem.js";
import { NewInterface } from "./newSystem.js";
export class Adapter {
  newInterface: NewInterface | null = null;
  oldSystem: OldSystem | null = null;
  constructor() {
    this.newInterface = new NewInterface();
    this.oldSystem = new OldSystem();
  }

  oldMethod() {
    this.oldSystem?.specificOldMethod();
    this.newInterface?.newMethod();
  }
}
