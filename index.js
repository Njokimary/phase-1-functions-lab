// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; 
    return Math.abs(pickupLocation - hqLocation);
  }

  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264; 
    return blocks * feetPerBlock;
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocks = Math.abs(endBlock - startBlock);
    const feetPerBlock = 264; 
    return blocks * feetPerBlock;
  }

  function calculatesFarePrice(start, destination) {
    const distanceInFeet = Math.abs(destination - start) * 264;
  
    if (distanceInFeet <= 400) {
      return 0; 
    } else if (distanceInFeet <= 2000) {
      const farePrice = (distanceInFeet - 400) * 0.02; 
      return parseFloat(farePrice.toFixed(2));
    } else if (distanceInFeet <= 2500) {
      return 25; 
      return 'cannot travel that far'; 
    }
  }
  