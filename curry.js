function curry(func, ...args) {
  return function () {
    return func.apply(null, [...args, ...arguments]);
  };
}

function curry2(func, ...args) {
  const len = func.length; // 参数个数
  if (args.length >= len) {
    return func.apply(null, args);
  } else {
    return function () {
      return curry2.apply(null, [func, ...args, ...arguments]);
    };
  }
}

function add(a, b) {
  return a + b;
}

const add5 = curry(add, 5);
console.log(add5(5));

function concat(a, b, c, d) {
  return a + b + c + d;
}
const concatAB = curry2(concat, "A", "B");
console.log(concatAB("C")("D"));
