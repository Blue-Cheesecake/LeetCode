// 11 min

class NodeBrowser {
  value: string;
  next: NodeBrowser | null;
  prev: NodeBrowser | null;

  constructor(value: string, next: NodeBrowser | null, prev: NodeBrowser | null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class BrowserHistory {
  // origin: NodeBrowser;
  head: NodeBrowser;

  constructor(homepage: string) {
    // this.origin = new NodeBrowser(homepage, null, null);
    this.head = new NodeBrowser(homepage, null, null);
  }

  visit(url: string): void {
    this.head.next = new NodeBrowser(url, null, this.head);
    this.head = this.head.next;
  }

  back(steps: number): string {
    let counter: number = 0;
    while (counter < steps) {
      if (this.head.prev !== null) {
        this.head = this.head.prev;
        counter++;
        continue;
      }
      break;
    }
    return this.head.value;
  }

  forward(steps: number): string {
    let i = 0;
    while (i < steps) {
      if (this.head.next !== null) {
        this.head = this.head.next;
        i++;
        continue;
      }
      break;
    }
    return this.head.value;
  }
}
