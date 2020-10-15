// 二分查找
function bsearch(arr, val, low, high) {
  if (low > high) return -1;

  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === val) {
    return mid;
  } else if (arr[mid] > val) {
    return bsearch(arr, val, low, mid - 1);
  } else {
    return bsearch(arr, val, mid + 1, high);
  }
}

// 二分查找（非递归实现）
function bsearch2(arr, val) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] > val) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

const arr = [3, 7, 9, 10, 14, 17, 20, 23, 26];
const res = bsearch2(arr, 11, 0, 8);
console.log(res);
