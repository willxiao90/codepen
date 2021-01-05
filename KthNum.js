/**
 * 查找第 K 大元素（利用快排思想实现）
 */
function KthNum(arr, k) {
  return _KthNum(arr, k, 0, arr.length - 1);
}

function _KthNum(arr, k, p, r) {
  if (k < 1 || k > arr.length) return false;
  if (p >= r) return arr[p];
  const q = partition(arr, p, r);
  if (q === k - 1) {
    return arr[q];
  } else if (q > k - 1) {
    return _KthNum(arr, k, p, q - 1);
  } else {
    return _KthNum(arr, k, q + 1, r);
  }
}

/**
 * 分区算法
 */
function partition(arr, p, r) {
  const pivot = arr[r];
  let i = p; // i 指向比 pivot 大的部分的尾部
  for (let j = p; j <= r - 1; j++) {
    if (arr[j] > pivot) {
      // 当有元素比 pivot 大的时候，跟下标为 i 的元素交换位置，i ++
      if (j !== i) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      i++;
    }
  }

  // 最后，交换 pivot 元素
  if (i !== r) {
    arr[r] = arr[i];
    arr[i] = pivot;
  }

  return i;
}

const arr = [8, 10, 2, 3, 6, 1, 5];
console.log(KthNum(arr, 1));
console.log(KthNum(arr, 2));
console.log(KthNum(arr, 3));
