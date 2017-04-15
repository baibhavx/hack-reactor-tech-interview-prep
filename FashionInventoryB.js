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

Now output the average cost of all shoes per designer in this format:

var expected = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};

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

var expected = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};

function sumArray(array) {
  return array.reduce(function(accu, ele) {
    return accu + ele;
  }, 0);
}

function averageShoePricePerDesigner(inventory) {
  var designersWithAverageShoePrice = { designers: [] };

  inventory.forEach(function(designerEntry) {
    var shoePrices = designerEntry.shoes.map(function(nameAndPrice) {
      return nameAndPrice.price;
    });
    var designerAverage = sumArray(shoePrices) / shoePrices.length;
    var designerWithAverage = {
                                name: designerEntry.name,
                                averagePrice: designerAverage
                              };
    designersWithAverageShoePrice.designers.push(designerWithAverage);
  });

  return designersWithAverageShoePrice;
}

var output = averageShoePricePerDesigner(inventory);

function assertEqual(actual, expected, testName) {
  testName = '[' + testName + ']';
  var stringifiedActual = JSON.stringify(actual);
  var stringifiedExpected = JSON.stringify(expected);
  if(stringifiedExpected === stringifiedActual) {
    console.log('PASSED ' + testName);
  } else {
    console.log('FAILED ' + testName +
                '\nExpected \n' + stringifiedExpected +
                ',\nbut got \n' + stringifiedActual);
  }
}

assertEqual(output, expected, 'Returns name and average shoe price');
