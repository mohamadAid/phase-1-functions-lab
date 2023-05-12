// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    let distance = Math.abs(someValue - 42);
    return distance;
  }
  
  function distanceFromHqInFeet(someValue) {
    const distance = distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    return distance * 264;
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
  
  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs(destination - start) * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
      return 0;
    } 
    else if (distance > 400 && distance <= 2000) {
      return 0.02 * (distance - 400);
    } 
    else if (distance > 2000 && distance <= 2500) {
      return 25 ;
    } 
    else {
      return "cannot travel that far";
    }
  }