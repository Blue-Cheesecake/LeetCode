class SmallestInfiniteSet {
  public smallest: number;
  public popped: Set<number>;

  constructor() {
    this.smallest = 1;
    this.popped = new Set();
  }

  popSmallest(): number {
    let temp = this.smallest;
    // console.log("curr smallest", temp);
    // console.log(this.popped);

    this.smallest += 1;
    while (this.popped.has(this.smallest)) {
      this.smallest += 1;
    }

    this.popped.add(temp);
    return temp;
  }

  addBack(num: number): void {
    if (!this.popped.has(num)) {
      return;
    }

    this.popped.delete(num);

    // if it contains, check if incomming num is actually smallest
    // console.log("num", num, "smallest", this.smallest);
    if (num < this.smallest) {
      // console.log("change");
      this.smallest = num;
    }
  }
}
