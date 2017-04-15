/*
Flip every pair of characters in a string.

Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';

console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
*/

function flipPairs(sentence) {
  var flipped = '';

  for(var i = 0; i < sentence.length; i++) {
    if(i % 2 !== 0) {
      flipped += sentence[i];
      flipped += sentence[i - 1];
    }
  }
  if(sentence.length % 2 !== 0) {
    flipped += sentence[sentence.length - 1];
  }
  return flipped;
}


function assertEquals(actual, expected, testName) {
  testName = '[' + testName + ']';
  if(actual === expected) {
    console.log('PASSED ' + testName);
  } else {
    console.log('FAILED ' + testName +
                'Expected ' + expected +
                ', but got ' + actual);
  }
}
var output = flipPairs(input);
var expected = "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!";
assertEquals(output, expected, 'flips pairs in a string.');
