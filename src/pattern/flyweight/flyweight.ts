export class Flyweight {
  sharedData: string | null = null;
  constructor(sharedData: string) {
    this.sharedData = sharedData;
  }
  operation(uniqueData: string) {
    console.log(
      `Intrinsic Property: ${this.sharedData}, Extrinsic Property: ${uniqueData}`
    );
  }
}
