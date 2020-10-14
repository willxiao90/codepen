/**
* 插入排序
* 从第2个元素开始遍历
* 依次跟它前面的元素进行比较，找到一个位置，使得前面的元素比他小后面的元素比它大，将其插入
* 直到最后一个元素处理完毕
*/
function insertionSort(arr){
  for(let i = 1; i < arr.length; i ++){
    const val = arr[i];
    let j;
    for(j = i - 1; j >= 0; j --){
      if(arr[j] > val){
        arr[j + 1] = arr[j];
      }else{
        break;
      }
    }
    arr[j + 1] = val;
  }
}

const arr = [4, 5, 6, 1, 3, 2]
insertionSort(arr)
console.log(arr)
