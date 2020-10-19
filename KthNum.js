/**
 * 分区算法
 */
function partition(arr, p, r) {
  const pivot = arr[r];
  let i = p; // i 指向比 pivot 大的部分的尾部
  for (let j = p; j <= r - 1; j++) {
    if (arr[j] > pivot) {
      // 当有元素比 pivot 大的时候，跟下标为 i 的元素交换位置，i ++
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
    }
  }

  // 最后，交换 pivot 元素
  arr[r] = arr[i];
  arr[i] = pivot;

  return i;
}

/**
 * 查找第 K 大元素（利用快排思想实现）
 */
function KthNum(arr, p, r, k) {
  if (p >= r) return arr[p];
  const q = partition(arr, p, r);
  if (q + 1 === k) {
    return arr[q];
  } else if (q + 1 > k) {
    return KthNum(arr, p, q - 1, k);
  } else {
    return KthNum(arr, q + 1, r, k);
  }
}

const arr = [8, 10, 2, 3, 6, 1, 5];
const res = KthNum(arr, 0, 6, 3);
console.log(res);
