/*

Given a list of non-negative integers and a target sum,
//find a pair of numbers that sums to the target sum.

Example:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
*/

// The most inefficient way to do this is by comparing each number
// with all other numbers in a nested loop. This will cost O(n^2)

// The more efficient but not the best way to do it is by
// sorting the array (quick sort),  costs O(log(n)) on average cases
// And then iterating through it only once using two pointers
// one at the beginning and one at the end to check if there's
// a matching pair, which costs O(n). Total cost for this algorithm
// will be O(n log(n))

// The best way to do it is by using a set, because set provides
// constant lookup O(1).

function findPairForSum(array, target) {
  var numHash = {};
  var pair = [];
  array.forEach(function(currNum) {
    var requiredNum = target - currNum;
    if(numHash[requiredNum] !== undefined) {
      pair = [requiredNum, currNum];
    } else {
      numHash[currNum] = true;
    }
  });
  return pair;
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
