/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    if (this.size === 0){
      let newNode = new Node(val);
      this.first = newNode;
      this.last = newNode;
      this.size += 1;
  }else{
  let newNode = new Node(val);
  this.last.next = newNode;
  this.last = newNode;
  this.size += 1;
  }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this.size === 0){
      throw new Error('List Empty!')
  }else if(this.first === this.last){
      this.first = null;
      this.last = null;
      this.size -=1;
  }else{
      let newHead = this.first.next;
      let removedEl = this.first ;
      this.first = null
      this.first = newHead;
      this.size -= 1; 
      return removedEl.val;       
  }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.size ===0){
      return true;
    }else{
      return false;
    }

  }
}

module.exports = Queue;
