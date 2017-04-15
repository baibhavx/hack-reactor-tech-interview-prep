/*Find the longest single-word palindrome within a phrase.

The sorting implementation required by this particular implementation strategy / outline has been provided in this case, as a convenience. Study it carefully to make sure you can create custom sort functions of your own, later.

Notes:
* Use all the functions in the skeleton.
* If there are multiple longest palindromes of equal length, return the last one.
* The phrase will only contain letters (no symbols, punctuation, or numbers).
* Your palindrome detection should be case-insensitive.
*/

function findLongestPalindrome(sentence) {
  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list
  var words = sentence.split(' ');
  var palindromes = [];

  words.forEach(function(word) {
    if(isPalindrome(word)) {
      palindromes.push(word);
    }
  });

  if(palindromes.length === 0) {
    return null;
  }

  palindromes.sort(sortAscendingByLength);
  return palindromes[palindromes.length - 1];
}

function reverseString(string) {
  if(string.length === 1) {
    return string;
  } else {
    return string[string.length - 1] +
      reverseString(string.slice(0, string.length - 1));
  }
}

function isPalindrome(word) {
  return word === reverseString(word);
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

function assertEquals(actual, expected, testName) {
  testName = '[' + testName + ']';
  if(actual === expected) {
    console.log('PASSED ' + testName);
  } else {
    console.log('FAILED ' + testName +
                ' Expected ' + expected +
                ', but got ' + actual);
  }
}

var output = findLongestPalindrome('nitinitin check out the next level racecar');
assertEquals(output, 'nitinitin', 'returns the longest palindrome');

output = findLongestPalindrome('what if there are no palindromes');
assertEquals(output, null, 'returns null when there are no palindromes');
