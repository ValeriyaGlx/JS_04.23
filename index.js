//task 1

Array.prototype.customFilter = function (callback, nThis) {
  const result = [];
  const len = this.length;

  for (let i = 0; i < len; i++) {
    if (i in this && callback.call(nThis, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

//task 2

function createDebounceFunction(callback, delay) {
  let time;
  return function (...arguments) {
    clearTimeout(time);
    const context = this;
    time = setTimeout(() => callback.call(context, arguments), delay);
  };
}
