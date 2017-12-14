
function mergeSort(arr) {
  if(arr.length < 2) {
    return arr;
  }
  let middle = Math.floor(arr.length/2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);
  
  return mergeArrays(mergeSort(left), mergeSort(right))
}

function mergeArrays(left, right) {
  var sorted = [];
  
  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift())
    }
    else {
      sorted.push(right.shift())
    }
  }
  while(left.length) {
    sorted.push(left.shift());
  }
  while(right.length) {
    sorted.push(right.shift());
  }
  return sorted;
}

module.exports =  mergeSort