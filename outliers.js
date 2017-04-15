/*
Given a string of even and odd numbers,
find which is the sole even number or the sole odd number.

The return value should be 1-indexed, not 0-indexed.

Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd
*/

function hasOneEven(array) {
  var evenNumbers = array.filter(function(ele) {
    return ele % 2 === 0;
  });
  return evenNumbers.length === 1;
}

function hasOneOdd(array) {
  var oddNumbers = array.filter(function(ele) {
    return ele % 2 !== 0;
  });
  return oddNumbers.length === 1;
}

function detectOutlierValue(string) {
  var numbers = string.split(' ').map(function(char) {
    return Number(char);
  });
  if(hasOneEven(numbers)) {
    evenNumber = numbers.filter(function(ele) {
      return ele % 2 === 0;
    });
    return numbers.indexOf(evenNumber[0]) + 1;
  } else if(hasOneOdd(numbers)) {
    oddNumber = numbers.filter(function(ele) {
      return ele % 2 !== 0;
    });
    return numbers.indexOf(oddNumber[0]) + 1;
  }
}
var output = detectOutlierValue("2 4 7 8 10");
output =  detectOutlierValue("1 10 1 1");
console.log(output);
