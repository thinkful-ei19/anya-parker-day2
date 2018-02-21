'use strict';

let turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function tSteps(arr){
  return arr.filter(num => num[0] > 0 && num[1] > 0);
}

console.log(tSteps(turtleSteps));

function howManySt(arr) {
  let newArr = arr.map(num => num[0]+num[1]);
  return newArr;
}

console.log(howManySt(turtleSteps));

function howManySt2(arr) {
  arr.forEach(num => console.log(num[0]+num[1]));
  
}

howManySt2(turtleSteps);