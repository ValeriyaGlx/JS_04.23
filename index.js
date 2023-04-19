//task 1

class Stack {
  storage = {};
  size = 0;

  constructor(length = 10) {
    if (
      typeof length !== "number" ||
      !Number.isFinite(length) ||
      length <= 0 ||
      !Number.isInteger(length)
    ) {
      throw new Error("Invalid limit value");
    }
    this.length = length;
  }

  push(data) {
    let size = this.size++;
    this.storage[size] = data;

    if (this.size > this.length) {
      throw new Error("Limit exceeded");
    }
  }

  pop() {
    if (this.size === 0) {
      throw new Error("Empty stack");
    }
    const deleteElement = this.storage[this.size - 1];
    delete this.storage[this.size - 1];
    this.size--;
    return deleteElement;
  }

  peek() {
    if (this.size === 0) {
      return null;
    }
    const deleteElement = this.storage[this.size - 1];
    return deleteElement;
  }

  isEmpty() {
    return !this.size;
  }

  toArray() {
    const arr = [];
    for (let key in this.storage) {
      arr.push(this.storage[key]);
    }
    return arr;
  }

  static fromIterable(iterable) {
    try {
      for (let key of iterable) {
        break;
      }
    } catch {
      throw new Error("Not iterable");
    }

    let newStack = new Stack(iterable.length || iterable.size);

    if (iterable.length) {
      for (let key in iterable) {
        let size = newStack.size++;
        newStack.storage[size] = iterable[key];
      }
    } else {
      for (let key of iterable.values() || iterable) {
        let size = newStack.size++;
        newStack.storage[size] = key;
      }
    }

    return newStack;
  }
}
