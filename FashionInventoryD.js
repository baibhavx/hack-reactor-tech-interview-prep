/*
This is a variation of the "Fashion Inventory" problem.

Please DO NOT paste code from before, however. Tackle each problem on its own.

It's the same inventory data structure:

var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

The task now is to find all the laced shoes. Output shoe names that contain
"lace" in them, and indicate which word contains "lace".

The output format should be structured like this:

[
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
]

Assert the validity of the values and structure of your output.
*/
var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

var expected = [
                 {
                   "nameWords": [
                                  "tasselled",
                                  "black",
                                  "low-top",
                                  "lace-up"
                                ],
                    "targetWordIndex": 3
                  },
                  {
                    "nameWords": [
                                   "tasselled",
                                   "green",
                                   "low-top",
                                   "lace-up"
                                 ],
                    "targetWordIndex": 3
                  },
                  {
                    "nameWords": [
                                   "red",
                                   "leather",
                                   "laced",
                                   "sneakers"
                                 ],
                    "targetWordIndex": 2
                  },
                  {
                    "nameWords": [
                                   "black",
                                   "leather",
                                   "laced",
                                   "sneakers"
                                 ],
                    "targetWordIndex": 2
                  }
                ]

function getLaceIndex(string) {
  var targetIndex;
  string.split(' ').forEach(function(word, i) {
    if(word.includes('lace')) {
      targetIndex =  i;
    }
  });
  return targetIndex;
}

function getShoesWithLaces(inventory) {
  var lacedWordsWithTargetIndices = [];

  inventory.forEach(function(designerEntry) {
    designerEntry.shoes.forEach(function(shoe) {
      if(shoe.name.includes('lace')) {
        var wordsWithTargetIndex = {
                                      nameWords: shoe.name.split(' '),
                                      targetWordIndex: getLaceIndex(shoe.name)
                                    };
        lacedWordsWithTargetIndices.push(wordsWithTargetIndex);
      }
    });
  });

  return lacedWordsWithTargetIndices;
}

var output = getShoesWithLaces(inventory);

function assertEqual(actual, expected, testName) {
  testName = '[' + testName + ']';
  var stringifiedActual = JSON.stringify(actual);
  var stringifiedExpected = JSON.stringify(expected);
  if(stringifiedActual === stringifiedExpected) {
    console.log('PASSED ' + testName);
  } else {
    console.log('FAILED ' + testName +
                '\nExpected\n' + stringifiedExpected +
                '\nBut Got, \n' + stringifiedActual);
  }
}


assertEqual(output, expected, 'Finds all the laced shoe,' +
                                        'and returns correct target index');
