/*
This is a variation of the "Fashion Inventory" problem.

Please DO NOT paste code from before, however. Tackle each problem on its own.

It's the same inventory data structure as earlier:

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

Now find all the black shoes. It's the same output as part 1, but filtered to
only shoe names that contain "black" in them.

Brunello Cucinelli,tasselled black low-top lace-up,1000
Gucci,black leather laced sneakers,900

Write your own unit tests.
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


function getFlatListOfBlackShoes(inventory) {
  var flatListOfBlackShoes = [];

  inventory.forEach(function(designerEntry) {
    designerEntry.shoes.forEach(function(shoe) {
      if(shoe.name.includes('black')) {
        flatListOfBlackShoes.push({designer: designerEntry.name});
        flatListOfBlackShoes.push({shoeName: shoe.name});
        flatListOfBlackShoes.push({price: shoe.price});
      }
    });
  });
  return flatListOfBlackShoes;
}

var expected = [
                 { designer: 'Brunello Cucinelli' },
                 { shoeName: 'tasselled black low-top lace-up' },
                 { price: 1000 },
                 { designer: 'Gucci' },
                 { shoeName: 'black leather laced sneakers' },
                 { price: 900 }
               ];

var output = getFlatListOfBlackShoes(inventory);

function assertEqual(actual, expected, testName) {
  testName = '[' + testName + ']';
  stringifiedActual = JSON.stringify(actual);
  stringifiedExpected = JSON.stringify(expected);
  if(stringifiedExpected === stringifiedActual) {
    console.log('PASSED ' + testName);
  } else {
    console.log('FAILED ' + testName +
                '\nExpected\n' + stringifiedExpected +
                '\nbut got\n' + stringifiedActual);
  }
}

assertEqual(output, expected, 'Returns a flat list of black shoes');
