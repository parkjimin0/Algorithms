class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  add(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;

    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  removeHead() {
    let oldHead = this.head;
    let newHead = this.head.next;
    if (!this.head.next) {
      this.head = null;
      return oldHead;
    } else {
      this.head.next = newHead.next;
      this.head = newHead;
      return oldHead;
    }
  }

  remove(val) {
    if (this.head.value === val) {
      this.removeHead();
    } else {
      let currentNode = this.head;
      let previous = currentNode;
      while (currentNode.next) {
        if (currentNode.value === val) {
          previous.next = currentNode.next;
          return currentNode;
        } else {
          previous = currentNode;
          currentNode = currentNode.next;
        }
      }

      if (currentNode.value === val) {
        previous.next = null;
        return currentNode;
      }
    }
  }
}
