function hazardWarningCreator(typeOfWarning) {
    let warningCounter =0;
    return function(location) {
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`)
    }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
const rainWarning = hazardWarningCreator('Rain on the Road');
rainWarning('Rain not on the Road');
const zombieWarning = hazardWarningCreator('Zombie on the Road');
zombieWarning('No zombies on the road');
zombieWarning('No zombies on the road');
zombieWarning('No zombies on the road');
