function quickSort(array) {
  let lesser = []; 
  let greater = [];
  if (array.length <= 1){
    return array;
  }
  let i = 1;

 while(i < array.length) {
    if (array[i] < array[0]) {
      lesser.push(array[i]); 
    }
    else if (array[i] >= array[0]) {
      greater.push(array[i]); 
    }
    i++;
  }
  return quickSort(lesser).concat(array[0], quickSort(greater));
}

module.exports = quickSort;