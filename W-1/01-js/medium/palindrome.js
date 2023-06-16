/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if (str.length > 1) {
    let regex = /[^a-zA-Z0-9\s]$/;

    if (regex.test(str)) {
      str = str.replace(regex, "");
    }
    let subj = String(str).toLowerCase();

    for (let j = 0; j < subj.length; j++) {
      let rindex = subj.length - (j + 1);
      if (subj[j] === subj[rindex]) {
        return true;
      } else {
        return false;
      }
    } 
  } else if (str === "") {
    return true;
  } else {
    let subj = String(str).toLowerCase();
    for (let j = 0; j < subj.length; j++) {
      let rindex = subj.length - (j + 1);
      if (subj[j] === subj[rindex]) {
        return true;
      } else {
        return false;
      }
    }
  }
}
module.exports = isPalindrome;
