// 排序的一些算法方法、
// 冒泡排序 升序
// 第一轮比较下去，最后一个应该是最大的数
// 第二轮比较下去，倒数第二个应该除第一个最大的数
var n= 0;
var arr = [2,3,3,4,57,5,6,6,7,21,88,223,32,9,9,9,89,100,773,2,23,34,4,5,6,7,7,43,23]
var arr1 = [2,3,3,4,57,5,6,6,7,21,88,223,32,9,9,9,89,100,773,2,23,34,4,5,6,7,7,43,23]
var arr2 = [2,3,3,4,57,5,6,6,7,21,88,223,32,9,9,9,89,100,773,2,23,34,4,5,6,7,7,43,23]
function bubbleSort (arr) {
  for (var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length-1-i; j++) {
      n++
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}
console.log('冒泡排序', bubbleSort(arr),'循环次数：'+n)

// 插入排序 升序
//从第1个下标开始，将0下标想象成默认的
var n2=0;
function insertSort(arr) {
  for(var i = 1; i < arr.length; i++) { //先设0是有序的
    if(arr[i] < arr[i-1]){//将无序的第一个跟前面的有序的进行比较
      var max = arr[i]  // 如果无序的小于有序的，则将大的值找到
      arr[i] = arr[i-1] // 并将有序中大的换成这个小的
      var index = i -1; // 再获得有序中的个数
      while(index >= 0 && arr[index] > max ){//遍历所有有序数大于这个无序的个数
        n2++
        arr[index+1] = arr[index] ;// 因为大于最后面的那个，所以有可能大于有序前面所有的，
        index--; //所以只要大于这个无序的数，都将值向后移动一位
      }
      arr[index+1] = max;//当条件不满足时，这个值就是应该插入的位置
    }
  }
  return arr;
}
console.log('插入排序', insertSort(arr1),'循环次数：'+n2)


// 快速排序 升序
// 先将数组中中间的那个数删除
// 再将中间那个数值拿到
// 最后再对此次传入的数组中的每个元素进行比较
// 如果小于这个数的放在左边
// 如果大于这个数的放在右边
// 最后反复对左右数组进行重复操作即可
var n1= 0;
function quickSort (arr) {
  if(arr.length <= 1) return arr;
  var left = [];
  var right = [];
  var centerIndex = Math.floor(arr.length/2);
  var centerNum = arr[centerIndex];
  arr.splice(centerIndex,1);
  for(var i = 0; i<arr.length; i++){
    n1++
    if(arr[i]<centerNum){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([centerNum],quickSort(right))
}
console.log('快速排序',quickSort(arr2),'循环次数：'+ n1)

