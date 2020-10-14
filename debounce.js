// 函数防抖
function debounce(func, delay) {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, [...arguments]);
    }, delay);
  };
}
