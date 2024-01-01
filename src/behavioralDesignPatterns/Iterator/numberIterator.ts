export class NumberIterator {
  start = 0;
  end = 0;
  current = 0;
  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
    this.current = start;
  }

  next() {
    if (this.current <= this.end) {
      return { value: this.current++, done: false };
    } else {
      return { done: true };
    }
  }
}
