/**
 * 冒泡排序需要比较 n - 1 轮
 * 每轮从第一个元素开始，依次跟后面一个元素比较，如果前面的元素大，就交换位置
 * 第一轮结束，最大的元素会放到最后面；第二轮结束，第二大的元素会放到倒数第二个位置
 * 依次类推，第 i 轮（i 从 0开始），只需要比较前 n - 1 - i 个元素
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

const arr = [5, 2, 4, 8, 3, 1];
bubbleSort(arr);
console.log(arr);
