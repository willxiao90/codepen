// 合并两个有序数组（leetcode #88）
function mergeArr(arr1, arr2){
  const len1 = arr1.length;
  const len2 = arr2.length;
  const result = [];
  let i = 0;
  let j = 0;
  while(i < len1 && j < len2){
    if(arr1[i] <= arr2[j]){
      result.push(arr1[i]);
      i++;
      console.log(result, i, j)
    }else{
      result.push(arr2[j]);
      j++;
      console.log(result, i, j)
    }
  }
  
  while(i < len1){
    result.push(arr1[i]);
    i++;
    console.log(result, i, j)
  }
  
  while(j < len2){
    result.push(arr2[j]);
    j++;
    console.log(result, i, j)
  }
  
  return result;
}

const arr3 = mergeArr([3, 5, 7], [2, 4, 6, 8, 10])
console.log(arr3)
