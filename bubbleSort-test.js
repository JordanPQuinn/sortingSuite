const bubbleSort = require('./bubbleSort.js');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

chai.use(require("chai-sorted"));

describe('bubbleSort', function() {
  it('should return true', function() {
    assert.equal('true', 'true');
  });

  it('should be able to sort an array of [1]',function() {
    let array = [1]
    bubbleSort(array);
    expect(array).to.be.sorted()
  });

  it('should be able to sort an array of [2,1]',function() {
    let array = [2,1]
    bubbleSort(array);
    expect(array).to.be.sorted()
  });  

  it('should be able to sort an array of [5,1,10,2,17,3,9]',function() {
    let array = [5,1,10,2,17,3,9]
    bubbleSort(array);
    expect(array).to.be.sorted()
  });  

  it('should be able to sort an array of negative numbers',function() {
    let array = [-5,-1,-10,-2,-17,-3,-9]
    bubbleSort(array);
    expect(array).to.be.sorted()
  });  

  it('should be able to sort an array of letters',function() {
    let array = ['e','a','b','d','f']
    bubbleSort(array);
    expect(array).to.be.sorted()
  });

  it('should be able to sort an already sorted array',function() {
    let arrayToSort = [];
    for(let i = 0; i < 100; i++) {
      let num = i;
      arrayToSort.push(num);
    }
    bubbleSort(arrayToSort);
    expect(arrayToSort).to.be.sorted()
  }); 

  it('should be able to sort a randomly generated array of 500 integers',function() {
    randomArray = (length, max) => [...new Array(length)]
    .map(() => Math.round(Math.random() * max));
    let arrayToSort = randomArray(20, 50);
    bubbleSort(arrayToSort);
    expect(arrayToSort).to.be.sorted()
  }); 

  it('should be able to sort a randomly generated array of 1000 integers',function() {
    randomArray = (length, max) => [...new Array(length)]
    .map(() => Math.round(Math.random() * max));
    let arrayToSort = randomArray(1000, 50);
    bubbleSort(arrayToSort);
    expect(arrayToSort).to.be.sorted()
  });

  it('should be able to sort a randomly generated array of 5000 integers',function() {
    randomArray = (length, max) => [...new Array(length)]
    .map(() => Math.round(Math.random() * max));
    let arrayToSort = randomArray(5000, 50);
    bubbleSort(arrayToSort);
    expect(arrayToSort).to.be.sorted()
  });  

  it('should be able to sort a randomly generated array of 8000 integers',function() {
    randomArray = (length, max) => [...new Array(length)]
    .map(() => Math.round(Math.random() * max));
    let arrayToSort = randomArray(8000, 50);
    bubbleSort(arrayToSort);
    expect(arrayToSort).to.be.sorted()
  }); 

  it('should be able to sort a randomly generated array of 9000 integers',function() {
    let arrayToSort = [];
    for(var i=0; i<9000;i++){
      let num = Math.floor(Math.random() * 100 + 1)
      arrayToSort.push(num)
    }
    bubbleSort(arrayToSort);
    expect(arrayToSort).to.be.sorted()
  }); 
});