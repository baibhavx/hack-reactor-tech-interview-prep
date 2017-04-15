/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive.

Write and test a function that determines whether a string is an isogram.

Notes:
* Assume your input is only letters.
* Assume the empty string is an isogram.
* Ignore case.
* Follow the pseudocode exactly!
*/
function isIsogram(text) {
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set

  var textSet = new Set();
    text.split('').forEach(function(ele) {
      textSet.add(ele);
    });
  return textSet.size === text.length;
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

var output = isIsogram('ballon');//=> false
assertEquals(output, false, 'returns false if word is not an isogram');

output = isIsogram('orange'); // => true
assertEquals(output, true, 'returns true if word is an isogram');

output = isIsogram(''); // => true
assertEquals(output, true, 'returns true for an empty string');
