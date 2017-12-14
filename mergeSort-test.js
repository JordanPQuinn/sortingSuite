const mergeSort = require('./mergeSort.js');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

chai.use(require("chai-sorted"));

describe('mergeSort', function() {
  it('should return true', function() {
    assert.equal('true', 'true');
  });

  it('should be able to sort an array of [1]',function() {
    let array = [1];
    mergeSort(array);
    expect(array).to.be.sorted();
  });

  it('should be able to sort an array of negative numbers', function() {
    let array = [-5,-1,-10,-2,-17,-3,-9]
    let sortedArray = mergeSort(array);
    expect(sortedArray).to.be.sorted()
  }); 

  it('should be able to sort an array of letters', function(){ 
    let array = ['d','c', 'f', 'a', 'z', 'w'];
    let sortedArray = mergeSort(array);
    expect(sortedArray).to.be.sorted()
  });

   it('should be able to sort an already sorted array',function() {
    let arrayToSort = [];
    for(let i = 0; i < 100; i++) {
      let num = i;
      arrayToSort.push(num);
    }
    let sortedArray = mergeSort(arrayToSort);
    expect(sortedArray).to.be.sorted()
  }); 

  it('should be able to sort an array 100 numbers', function(){ 
    let array = [];
    for(let i = 0; i < 100; i++) {
      let num = Math.floor(Math.random() * 100 + 1);
      array.push(num);
    }
    let sortedArray = mergeSort(array);
    expect(sortedArray).to.be.sorted()
  }); 

  it('should be able to sort an array 1000 numbers', function(){ 
    let array = [];
    for(let i = 0; i < 1000; i++) {
      let num = Math.floor(Math.random() * 100 + 1);
      array.push(num);
    }
    let sortedArray = mergeSort(array);
    expect(sortedArray).to.be.sorted()
  });

  it('should be able to sort an array 10000 numbers', function(){ 
    let array = [];
    for(let i = 0; i < 10000; i++) {
      let num = Math.floor(Math.random() * 100 + 1);
      array.push(num);

    }
    let sortedArray = mergeSort(array);
    expect(sortedArray).to.be.sorted()
  });

  it('should be able to sort an array 100000 numbers', function(){ 
    let array = [];
    for(let i = 0; i < 100000; i++) {
      let num = Math.floor(Math.random() * 100 + 1);
      array.push(num);
    }
    let sortedArray = mergeSort(array);
    expect(sortedArray).to.be.sorted()
  });

  // it('should be able to sort an array 120000 numbers', function(){ 
  //   let array = [];
  //   for(let i = 0; i < 120000; i++) {
  //     let num = Math.floor(Math.random() * 100 + 1);
  //     array.push(num);
  //   }
  //   let sortedArray = mergeSort(array);
  //   expect(sortedArray).to.be.sorted();
  // });
});