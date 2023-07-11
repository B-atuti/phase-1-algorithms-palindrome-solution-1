function isPalindrome(word) {
  // Write your algorithm here
  // iterate from the beginning to the middle
  for (let i = 0; i < word.length / 2; i++) {
    // check each letter to the corresponding letter from the end
    const l = word.length -1 -i;
    const startChar = word[i];
    const endChar = word[l];
    // if any letter don't match,return false
    if (startChar !== endChar) return false;
  }
  return true;
}

/* 
  Add your pseudocode here
  - If the first letter is the same as the last letter, and the second letter is the same as the second to the last letter,etc. until we reach the middle, return true.
  -Iterate from the beggining to the middle 
  check each letter to the corresponding letter from the end
  if any letter doesn't match, return false.

*/

/*
  Add written explanation of your solution here
  -Iterate from the beginning to the middle of the word 
  -Check each letter to the corresponding letter from the end
  -If any letter doesn't match, return flase
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
