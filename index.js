/*function hasTargetSum(array, target) {
  
  const firstNum = array[0];
  const lastNum = array[array.length -1]
  const addNum = firstNum + lastNum
  
  if (addNum === target)  return true
  else {
    return false 
}
}*/



/*function hasTargetSum (array, target) {
  for (let i = 0; i < array.length; i++) {
    //n steps
    for (let j = i + 1; j < array.length; j++) {
      //n * n steps
      if (array[j] === target - array[i]) return true
    }
  } return false
} //runtime: O(n^2) not great
*/


/*function hasTargetSum(array, target){
  const seenNumbers = {}
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i]
      if (seenNumbers[complement]) return true; 
      seenNumbers[array[i]] = true 
  }
  return false 
}*/

function hasTargetSum(array, target){
  const trackNumbers = {}
  for (const number of array) {
    const complement = target - number
      if (complement in trackNumbers) return true; 
      trackNumbers[number] = true 
  }
  return false 
}








/* 
  Write the Big O time complexity of your function here
*/

/* 
  -write a function that receives 2 arguments - an array of integers and a target intger
  -the function should return true if any pair of numbers in the array adds up to the target number
  -if th pair of numbers in the array do NOT add up to the target the function should return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
