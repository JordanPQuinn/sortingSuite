function bubbleSort(array) {
  var swapped;
  do {
    swapped = false;
    for(var i=0; i < array.length; i++) {
      if( array[i] > array[i+1]) {
        [ array [i], array[i+1] ] = [array [i+1], array[i] ];
        swapped = true;
      }
    }
  } while (swapped);
}



module.exports = bubbleSort;