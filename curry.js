function curry(func, ...args) {
  const len = func.length; // 参数个数
  console.log(args);
  if (args.length >= len) {
    return func.apply(null, args);
  } else {
    return function () {
      return curry.apply(null, [func, ...args, ...arguments]);
    };
  }
}

function add(a, b, c, d) {
  return a + b + c + d;
}

const addFn = curry(add, 1, 2);
console.log(addFn(3)(4));
