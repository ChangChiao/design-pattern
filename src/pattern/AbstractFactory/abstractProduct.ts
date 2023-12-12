export class AbstractProductA {
  type: string | null = null;

  display() {
    console.log(`ProductA of type ${this.type}`);
  }
}

export class AbstractProductB {
  type: string | null = null;

  display() {
    console.log(`ProductB of type ${this.type}`);
  }
}
