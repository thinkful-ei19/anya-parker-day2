function average(numbers) {
  let sum= 0;
  numbers.forEach(function(num){
    sum += num;
  })
  return sum/numbers.length;
}

function average2(numbers) {
  return numbers.reduce(function(a,b) {
    return a + b;
  })/numbers.length;
}




let arr=[1,2,3,4,5];
console.log(average(arr));
console.log(average2(arr));