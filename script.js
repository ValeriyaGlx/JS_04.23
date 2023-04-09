//task 1

function makeDeepCopy(data) {
  if (typeof data !== "object" || data === null) {
    throw new Error();
  }

  const copyObj = Array.isArray(data) ? [] : {};

  for (let i in data) {
    copyObj[i] =
      typeof data[i] === "object" && data[i] !== null
        ? makeDeepCopy(data[i])
        : data[i];
  }
  return copyObj;
}

//task 2

function selectFromInterval(arr, start, finish) {
  if (
    !Array.isArray(arr) ||
    !arr.every((el) => typeof el === "number" && Number.isFinite(el))
  ) {
    throw new Error();
  }

  if (!Number.isFinite(start) || !Number.isFinite(finish)) {
    throw new Error();
  }
  const res = arr
    .filter(
      (el) => el >= Math.min(start, finish) && el <= Math.max(start, finish)
    )
    .sort((a, b) => a - b);
  return res;
}


