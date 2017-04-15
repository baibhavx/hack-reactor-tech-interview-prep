/*
You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return:
H W
e o
l r
l l
o d
*/

function transposeTwoStrings(arrayOfStrings) {
  var transposedStrings = [];
  var individualStringSplit = arrayOfStrings.map(function(string) {
    return string.split('');
  });
  //[['h','e','l','l','o'], ['w','o','r','l','d']];
  // now iterate through ^ array
  //until all of the inner arrays are empty. Make a helper function
  while(!areAllInnerArraysEmpty(individualStringSplit)) {
    var stringItems = [];
    individualStringSplit.forEach(function(innerArray) {
      var item = innerArray.shift();
      if(item !== undefined) {
        stringItems.push(item);
      } else {
        stringItems.push('0');
      }

    });
    transposedStrings.push(stringItems.join(' '));
  }
  return transposedStrings;
}

function areAllInnerArraysEmpty(arrayOfArrays) {
  return arrayOfArrays.every(function(innerArray) {
    return innerArray.length === 0;
  });
}

var output =  transposeTwoStrings(['Hello','World']);
console.log(output);
