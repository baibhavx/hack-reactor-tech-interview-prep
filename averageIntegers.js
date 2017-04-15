/*
Use the skeleton provided to write a working implementation.

Notes:
* Do not leave any functions in the skeleton unused.
* Test that your implementation works.

Specifically -- your code reviewer should be able to just press the [Run]
button and see convincing evidence that your code works, because of:
a) the categorical reasoning displayed by your tests
b) the line(s) of output in the console log saying "passed" coming from those tests
*/
function average(numbers) {
  return sum(numbers) / numbers.length;
}

function sum(numbers) {
  return numbers.reduce(function(accu, ele) {
    return accu + ele;
  }, 0);
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

var output = sum([1, 2, 3, 4]);
assertEquals(output, 10, 'Adds positive numbers');

output = sum([-1, -2, 3, 4, -5]);
assertEquals(output, -1, 'Adds negative numbers');

output = sum([]);
assertEquals(output, 0, 'Returns 0 for an empty array');

/*

PASSED [Adds positive numbers]
PASSED [Adds negative numbers]
PASSED [Returns 0 for an empty array]
*/
