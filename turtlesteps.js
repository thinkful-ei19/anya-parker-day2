let turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function tSteps(arr){
    console.log(arr);
    return arr.filter(num => num[0] > 0 && num[1] > 0);
}

console.log(tSteps(turtleSteps));