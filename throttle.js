// 函数节流
function throttle(func, delay) {
  let lasttime = Date.now();
  return function () {
    const time = Date.now();
    if (time - lasttime >= delay) {
      func.apply(this, [...arguments]);
      lasttime = time;
    }
  };
}
