/**
* 快递排序的关键是这个分区算法
*/
function partition(arr, p, r){
  const pivot = arr[r];
  let i = p; // i 指向比 pivot 小的部分的尾部
  for(let j = p; j <= r - 1; j ++){
    if(arr[j] < pivot){
      // 当有元素比 pivot 小的时候，跟下标为 i 的元素交换位置，i ++
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
* 快速排序的思想是：从数组中任意选择一个元素，将这个元素放到一个合适的位置，使得这个位置前面的元素都比它小，后面的元素都比它大
* 使用递归的思想，当区间等于 1 的时候，整个数组就自然有序了
* 递推公式：quickSort(arr, p, r) = quickSort(arr, p, q - 1) + quickSort(arr, q + 1， r)
* 终止条件：q >= r
*/
function quickSort(arr, p, r){
  if(p >= r) return;
  const q = partition(arr, p, r);
  quickSort(arr, p, q - 1);
  quickSort(arr, q + 1, r);
}

const arr = [8, 10, 2, 3, 6, 1, 5];
quickSort(arr, 0, 6);
console.log(arr)
