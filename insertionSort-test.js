const insertionSort = require('./insertionSort.js');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

chai.use(require("chai-sorted"));

describe('insertionSort', function() {
  it('should return true', function() {
    assert.equal('true', 'true');
  });

  it('should be able to sort an array with a length of one', function() {
    let array = [1];
    insertionSort(array);
    expect(array).to.be.sorted();
  });

  it('should be able to sort an already sorted array',function() {
    let arrayToSort = [];
    for(let i = 0; i < 100; i++) {
      let num = i;
      arrayToSort.push(num);
    }
    insertionSort(arrayToSort);
    expect(arrayToSort).to.be.sorted()
  }); 

  it('should be able to sort an array of negative numbers',function() {
    let array = [-5,-1,-10,-2,-17,-3,-9]
    insertionSort(array);
    expect(array).to.be.sorted()
  });  

  it('should be able to sort an array of letters',function() {
    let array = ['e','a','b','d','f']
    insertionSort(array);
    expect(array).to.be.sorted()
  });

  it('should be able to sort an array with a length of ten', function() {
    let array = [];
    for(let i = 0; i < 10; i++) {
      let num = Math.floor(Math.random() * 10 + 1);
      array.push(num);
    }
    insertionSort(array);
    expect(array).to.be.sorted();
  });  

  it('should be able to sort an array with a length of 100', function() {
    let array = [];
    for(let i = 0; i < 100; i++) {
      let num = Math.floor(Math.random() * 50 + 1);
      array.push(num);
    }
    insertionSort(array);
    expect(array).to.be.sorted();
  });

   it('should be able to sort an array with a length of 1000', function() {
    let array = [];
    for(let i = 0; i < 1000; i++) {
      let num = Math.floor(Math.random() * 50 + 1);
      array.push(num);
    }
    insertionSort(array);
    expect(array).to.be.sorted();
  });

   it('should be able to sort an array with a length of 5000', function() {
    let array = [];
    for(let i = 0; i < 5000; i++) {
      let num = Math.floor(Math.random() * 50 + 1);
      array.push(num);
    }
    insertionSort(array);
    expect(array).to.be.sorted();
  });

   it('should be able to sort an array with a length of 10000', function() {
    let array = [];
    for(let i = 0; i < 10000; i++) {
      let num = Math.floor(Math.random() * 50 + 1);
      array.push(num);
    }
    insertionSort(array);
    expect(array).to.be.sorted();
  });
   it('should be able to sort an array with a length of 20000', function() {
    let array = [];
    for(let i = 0; i < 20000; i++) {
      let num = Math.floor(Math.random() * 50 + 1);
      array.push(num);
    }
    insertionSort(array);
    expect(array).to.be.sorted();
  });

   it('should be able to sort an array with a length of 23000', function() {
    let array = [];
    for(let i = 0; i < 23000; i++) {
      let num = Math.floor(Math.random() * 50 + 1);
      array.push(num);
    }
    insertionSort(array);
    expect(array).to.be.sorted();
  });


});