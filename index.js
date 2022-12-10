function isPalindrome(word) {
  // Write your algorithm here
  if(word.length < 2) return true

  let start = 0
  let end = word.length - 1

  while(start <= end){
    if(word[start] != word[end]){
      return false
    }
    start++
    end--
  }

    return true


}


/* 
  Add your pseudocode here
  - I will loop through the string 
  - This will check if the last element is same as that the beginning and vice versa 
  - This returns false if the elements do not match 
  - else the function will return true 
  - increment then starts 
  - decrement ends 
*/

/*
  Add written explanation of your solution here
  - A palindrome is a word that would be pronounced same both ways. My function allows the user to input a word. To start with, I check as to whether 
  the length of the word < 2. A one letter word and an empty are palindromes. The function will thus return true if the word length < 2I loop through the string once 
  if the length is greater or equal to 2. This happens in O(n) time and I do not require any extra space to run the function. I return false when the last element does not match the 
  first element.
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

