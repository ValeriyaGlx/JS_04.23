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

    const newStack = new Stack(iterable.length || iterable.size);

    if (iterable.length) {
      for (let key in iterable) {
        let size = newStack.size++;
        newStack.storage[size] = iterable[key];
      }
    } else {
      for (let key of iterable.values()) {
        let size = newStack.size++;
        newStack.storage[size] = key;
      }
    }

    return newStack;
  }
}

//task 2

class ListNode {
  constructor(x) {
    this.element = x;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(elem) {
    const node = new ListNode(elem);
    let currentNode;

    if (this.head === null) {
      this.head = node;
    } else {
      currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }

  prepend(elem) {
    const node = new ListNode(elem);
    if (this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  find(elem) {
    if (this.head === null) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.element === elem) {
        return elem;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  toArray() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode) {
      arr.push(currentNode.element);
      currentNode = currentNode.next;
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

    const newList = new LinkedList();
    if (iterable.length) {
      for (let key in iterable) {
        newList.append(iterable[key]);
      }
    } else {
      for (let key of iterable.values()) {
        newList.append(key);
      }
    }
    return newList;
  }
}

//task 3
class Car {
  constructor() {}
  #brand = "";
  #model = "";
  #yearOfManufacturing = 1950;
  #maxSpeed = 100;
  #maxFuelVolume = 20;
  #fuelConsumption = 1;
  #damage = 1;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;
  #health = 100;

  set brand(value) {
    if (
      typeof value !== "string" ||
      value.trim().length < 1 ||
      value.trim().length > 50
    ) {
      throw new Error("Invalid brand name");
    }

    value = value.trim();
    this.#brand = value;
  }

  get brand() {
    return this.#brand;
  }

  set model(value) {
    if (
      typeof value !== "string" ||
      value.trim().length < 1 ||
      value.trim().length > 50
    ) {
      throw new Error("Invalid model name");
    }

    value = value.trim();
    this.#model = value;
  }

  get model() {
    return this.#model;
  }

  set yearOfManufacturing(value) {
    if (
      typeof value !== "number" ||
      !Number.isFinite(value) ||
      value < 1950 ||
      value > 2023 ||
      !Number.isInteger(value)
    ) {
      throw new Error("Invalid year of manufacturing");
    }

    this.#yearOfManufacturing = value;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set maxSpeed(value) {
    if (
      typeof value !== "number" ||
      !Number.isFinite(value) ||
      value < 100 ||
      value > 330 ||
      !Number.isInteger(value)
    ) {
      throw new Error("Invalid max speed");
    }

    this.#maxSpeed = value;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxFuelVolume(value) {
    if (
      typeof value !== "number" ||
      !Number.isFinite(value) ||
      value < 20 ||
      value > 100 ||
      !Number.isInteger(value)
    ) {
      throw new Error("Invalid max fuel volume");
    }

    this.#maxFuelVolume = value;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set fuelConsumption(value) {
    if (
      typeof value !== "number" ||
      !Number.isFinite(value) ||
      value < 1 ||
      !Number.isInteger(value)
    ) {
      throw new Error("Invalid fuel consumption");
    }

    this.#fuelConsumption = value;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set damage(value) {
    if (
      typeof value !== "number" ||
      !Number.isFinite(value) ||
      value < 1 ||
      value > 5 ||
      !Number.isInteger(value)
    ) {
      throw new Error("Invalid damage");
    }
    this.#damage = value;
  }

  get damage() {
    return this.#damage;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get health() {
    return this.#health;
  }

  get mileage() {
    return this.#mileage;
  }

  start() {
    if (this.#isStarted) {
      throw new Error("Car has already started");
    }
    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error("Car hasn't started yet");
    }
    this.#isStarted = false;
  }

  fillUpGasTank(liters) {
    if (
      typeof liters !== "number" ||
      !Number.isFinite(liters) ||
      liters <= 0 ||
      !Number.isInteger(liters)
    ) {
      throw new Error("Invalid fuel amount");
    }

    if (liters + this.#currentFuelVolume > this.#maxFuelVolume) {
      throw new Error("Too much fuel");
    }

    if (this.#isStarted) {
      throw new Error("You have to shut down your car first");
    }
    this.#currentFuelVolume += liters;
  }

  drive(speed, duration) {
    if (
      typeof speed !== "number" ||
      !Number.isFinite(speed) ||
      speed <= 0 ||
      !Number.isInteger(speed)
    ) {
      throw new Error("Invalid speed");
    }

    if (
      typeof duration !== "number" ||
      !Number.isFinite(duration) ||
      duration <= 0 ||
      !Number.isInteger(duration)
    ) {
      throw new Error("Invalid duration");
    }

    if (speed > this.#maxSpeed) {
      throw new Error("Car can't go this fast");
    }

    if (!this.#isStarted) {
      throw new Error("You have to start your car first");
    }

    const dist = speed * duration;
    const usageFuel = (dist * this.#fuelConsumption) / 100;
    const usageHealth = (dist * this.#damage) / 100;

    if (usageFuel > this.#currentFuelVolume) {
      throw new Error("You don't have enough fuel");
    }

    if (usageHealth > this.#health) {
      throw new Error("Your car won’t make it");
    }

    this.#health = this.#health - usageHealth;
    this.#currentFuelVolume = this.#currentFuelVolume - usageFuel;
    this.#mileage = this.#mileage + dist;
  }

  repair() {
    if (this.#isStarted) {
      throw new Error("You have to shut down your car first");
    }
    if (this.#currentFuelVolume !== this.#maxFuelVolume) {
      throw new Error("You have to fill up your gas tank first");
    }
    this.#health = 100;
  }

  getFullAmount() {
    return this.#maxFuelVolume - this.#currentFuelVolume;
  }
}
