      //Declaring a function called reserveString that holds the argument of word
      function reverseString(word) {
   
        //Decalring a variable called wordArray - this is going to equal the argumnt of reverseString, word, and use dotnotation to then utilise the split method which splits a string sentence up into individual arrays => alex become "a","l","e","x" and "alex is" becomes "alex", "is"
        const wordArray = word.split("");
        
        //reversedWordArray is containing the value of word.split and then usiing the built in reverse method to reverse the order of each letter => a l e x becomes x e l a
        const reversedWordArray = wordArray.reverse();
       
        //reversedWord contains the value of reservedWordArray and then uses the built in join method to join the reversed letters up => x e l a now becomes xela 
        const reversedWord = reversedWordArray.join("");
        
        //We return the value of reversedWord => xela
        return reversedWord;
      }
      
        //This function takes in the argument of word
      function isPalindrome(word) {
    
        //We take the reservedWord variable (which is equal to xela) and set that equal to reserveString(word)
       const reversedWord = reverseString(word);
        
       //This statement states that if the argument of "word" is equal to the variable value of reversedWord then execute and return "true". However, if the strings are not equal, then it must return false. In other words, the strings "alex" and "xela" are not in the same order. Therefore, the argument "word" is not === to "reversedWord", so the execution is not made, and the statement moves onto else, where it is executed, and returned false.
        if (word === reversedWord) {
          return true;
        } else {
          return false;
        }
      }


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
