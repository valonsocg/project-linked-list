import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.headNode = null;
    this.listSize = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.headNode) {
      this.headNode = newNode;
    } else {
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }

    this.listSize++;
  }

  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
    this.listSize++;
  }

  size() {
    return this.listSize;
  }

  head() {
    return this.headNode;
  }

  tail() {
    let current = this.headNode;
    if (!current) return null;

    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    if (index < 0 || index >= this.listSize) return null;

    let current = this.headNode;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }

  pop() {
    if (!this.headNode) return null;

    if (this.listSize === 1) {
      const nodeToRemove = this.headNode;

      this.headNode = null;
      this.listSize--;
      return nodeToRemove;
    }

    let current = this.headNode;
    let previous = null;

    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }

    previous.nextNode = null;
    this.listSize--;
    return current;
  }

  contains(value) {
    let current = this.headNode;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.headNode;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let result = ``;

    let current = this.headNode;

    while (current) {
      result += `(${current.value}) -> `;
      current = current.nextNode;
    }

    return result + "null";
  }
}
