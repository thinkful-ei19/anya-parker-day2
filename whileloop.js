function min(numbers) {
    let currentMin = numbers[0];
    let i = 0;
    while (i < numbers.length){
      if (numbers[i] < currentMin){
        currentMin = numbers[i];
      }
      i++;
    }
    return currentMin;
  }
  
  console.log(min([18, 392, 382, 32, -2]));

  function max(numbers) {
    let currentMax = numbers[0];
    let i = 0;
    while (i < numbers.length){
      if (numbers[i] > currentMax){
        currentMax = numbers[i];
      }
      i++;
    }
    return currentMax;
  }
  
  console.log(max([18, 392, 382, 32, -2]));