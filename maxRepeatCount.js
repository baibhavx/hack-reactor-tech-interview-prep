/*
**Basic instructions**
Flesh out the implementation described by this "skeleton", and test it.

**More instructions**
Implementation of WHAT, you say? What's the problem statement???

Well, you should be able to tell what this code is intended to do just from
reading the starter "skeleton".

Assuming you find the above statement to be true upon reading the outline, well,
then that illustrates the power of good outlining. You don't need a bunch of
comments explaining the code. The code is effectively SELF-EXPLANATORY,
even at this early, not-fully-implemented stage.
This is the level of clarity that you should aim for in your own coding too.

**Some notes about this skeleton**

When you create such "skeletons" for your own programs, this is a good
full-fledged sample to bear in mind.

Note the mixture of real "stub" code and pseudocode.

The stubs are just a few function names and a few key variable names,
not whole for-loops and whatnot.

The pseudocode style we want for this purpose is at the level of precise
English. It also is not describing for-loops and whatnot.
It also is only inside functions. Don't pseudocode functions,
just write the functions as empty stubs. That saves you precious time later,
with less rewriting.
*/

function findMaxRepeatCountInWord(word) {
  // Break up individual words into individual letters.
  // Count the instances of each letter
  // Iterate all the counts and find the highest
  // Return this word's max repeat count
  var letters = word.split('');
  var letterCount = {};
  letters.forEach(function(ele) {
    if(letterCount[ele] === undefined) {
      letterCount[ele] = 1
    } else {
      letterCount[ele]++;
    }
  });

  var maxCount = 0;
  for(var key in letterCount) {
    if(letterCount[key] > maxCount) {
      maxCount = letterCount[key];
    }
  }
  return maxCount;
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';
  // Break up input text into words (space-delimited).
  var words = text.split(' ');
  // For each word...
  words.forEach(function(word) {
    var repeatCountForWord = findMaxRepeatCountInWord(word);
      if(repeatCountForWord > maxRepeatCountOverall) {
        maxRepeatCountOverall = repeatCountForWord;
        wordWithMostRepeatCount = word;
      }
  });
  return wordWithMostRepeatCount;
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


var output = findFirstWordWithMostRepeatedChars('Hungry panda trying to eat');
assertEquals(output, 'panda', 'finds most repeated for a normal case');

output = findFirstWordWithMostRepeatedChars('panda in an apple tree');
assertEquals(output, 'panda', 'returns the first word with most repeated' +
                                ' chars when there is a tie');
