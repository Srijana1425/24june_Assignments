class QueueOperations {
  constructor() {
    this.queue = [];
  }

  pushFront(val) {
    this.queue.unshift(val);
  }

  pushMiddle(val) {
    const mid = Math.floor(this.queue.length / 2);
    this.queue.splice(mid, 0, val);
  }

  pushBack(val) {
    this.queue.push(val);
  }

  popFront() {
    if (this.queue.length === 0) {
      return -1;
    }
    return this.queue.shift();
  }

  popMiddle() {
    if (this.queue.length === 0) {
      return -1;
    }
    const mid = Math.floor((this.queue.length - 1) / 2);
    return this.queue.splice(mid, 1)[0];
  }

  popBack() {
    if (this.queue.length === 0) {
      return -1;
    }
    return this.queue.pop();
  }
}

// Example 1:
const queue = new QueueOperations();
queue.pushFront(1);
queue.pushBack(2);
queue.pushMiddle(3);
queue.pushMiddle(4);
console.log(queue.popFront()); 
console.log(queue.popMiddle()); 
console.log(queue.popMiddle()); 
console.log(queue.popBack()); 
console.log(queue.popFront());
