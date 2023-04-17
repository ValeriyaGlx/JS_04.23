//task 1

function curry(f) {
  return function curried(...args) {
    if (args.length >= f.length) {
      return f.apply(null, args);
    } else {
      return function notCurried(...args2) {
        return curried.apply(null, args.concat(args2));
      };
    }
  };
}

// task 2

class Calculator {
  constructor(x, y) {
    if (
      typeof x !== "number" ||
      typeof y !== "number" ||
      !Number.isFinite(x) ||
      !Number.isFinite(y) ||
      arguments.length !== 2
    ) {
      throw new Error();
    }

    this.x = x;
    this.y = y;

    this.setX = this.setX.bind(this);
    this.setY = this.setY.bind(this);
    this.getSum = this.getSum.bind(this);
    this.getMul = this.getMul.bind(this);
    this.getSub = this.getSub.bind(this);
    this.getDiv = this.getDiv.bind(this);
  }

  setX(num) {
    if (typeof num !== "number" || !Number.isFinite(num)) {
      throw new Error();
    }

    this.x = num;
  }

  setY(num) {
    if (typeof num !== "number" || !Number.isFinite(num)) {
      throw new Error();
    }

    this.y = num;
  }

  getSum() {
    return this.x + this.y;
  }

  getMul() {
    return this.x * this.y;
  }

  getSub() {
    return Math.abs(this.x - this.y);
  }

  getDiv() {
    if (this.y === 0) {
      throw new Error();
    }
    return this.x / this.y;
  }
}

//task 3

class RickAndMorty {
  constructor() {}

  getCharacter(id) {
    if (typeof id !== "number" || !Number.isFinite(id)) {
      throw new Error();
    }

    const url = `https://rickandmortyapi.com/api/character/${id}`;
    return fetch(url)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return null;
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  async getEpisode(id) {
    if (typeof id !== "number" || !Number.isFinite(id)) {
      throw new Error();
    }

    const url = `https://rickandmortyapi.com/api/episode/${id}`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (res.status === 200) {
        return data;
      } else {
        return null;
      }
    } catch (err) {
      throw new Error(err);
    }
  }
}
