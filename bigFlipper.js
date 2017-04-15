/*
Flip every chunk of n characters in a string, where n is any positive
integer greater than 1.

Note that this is intentionally very similar to the previous problem.

Please focus on getting a working solution with the tools you know well.

Practice the interactive/collaborative interview style that's described
in the documentation.

Example:
var input = 'a short example';
=> ohs ax
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

Breaking this example down piece by piece:
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'

-> 'ohs axe trelpma'
*/

function flipNChars(nCharString, n) {
  if(nCharString.length < n) {
    return nCharString;
  }
  var flippedString = nCharString[n - 1];
  for(var i = n - 2; i >= 0; i--) {
    flippedString += nCharString[i];
  }
  return flippedString;
}


function flipEveryNChars(sentence, n) {
  var flippedString = '';
  for(var i = 0; i < sentence.length; i = i + n) {
    nSliceWord = sentence.slice(i, i + n);
    flippedString += flipNChars(nSliceWord, n);
  }
  return flippedString;
}
var output = flipEveryNChars('a short example', 5);

console.log(output); // --> ohs axe trelpma
