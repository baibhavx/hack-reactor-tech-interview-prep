/*
You have a fashion catalog, an inventory of items from various high-fashion designers.
Each designer has a lineup of shoes. Each shoe has a name and a price.

It looks like this:
var currentInventory = [
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

Look up all the shoes across all the designers and list them out in a flat list:
{designer name}, {shoe name}, {price}
{designer name}, {shoe name}, {price}

E.g.,
Brunello Cucinelli, tasselled black low-top lace-up, 1000
Brunello Cucinelli, tasselled green low-top lace-up, 1100
...
Write your own unit tests.
*/

function areArraysEqual(array1, array2) {
  var isEqual = true;
  if(array1.length !== array2.length) {
    isEqual = false;
  }
  array1.forEach(function(ele, i) {
    if(array2[i] !== ele) {
      isEqual = false;
    }
  });
  return isEqual;
}

function areObjectsEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function stringifyItems(array) {
  var string = '';
  array.forEach(function(object) {
    string += '\n' + JSON.stringify(object);
  });
  return string;
}

var currentInventory = [
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

function renderInventory(inventory) {
  var flatListOfDesignerShoes = [];

  inventory.forEach(function(designerEntry) {
    designerEntry.shoes.forEach(function(shoe) {
        var individualShoeList = [{designerName: designerEntry.name},
                                  {shoeName: shoe.name},
                                  {price: shoe.price}
                                  ];
        flatListOfDesignerShoes = flatListOfDesignerShoes.concat(individualShoeList);
    });
  });
  return flatListOfDesignerShoes;
}


function assertArrayEquals(actual, expected, testName) {
  testName = '[' + testName + ']';
  var areArraysEqual = true;
  if(actual.length != expected.length) {
    areArraysEqual = false;
  }
  actual.forEach(function(ele, i) {
    if(!areObjectsEqual(expected[i], ele)) {
      areArraysEqual = false;
    }
  });
  if(areArraysEqual) {
    console.log('PASSED ' + testName);
  } else {
    console.log('FAILED ' + testName +
                '\nExpected ' + stringifyItems(expected) +
                '\n,But got ' + stringifyItems(actual));
  }
}

var output = renderInventory(currentInventory);
var expectedOutput =
                    [
                      { designerName: 'Brunello Cucinelli' },
                      { shoeName: 'tasselled black low-top lace-up' },
                      { price: 1000 },
                      { designerName: 'Brunello Cucinelli' },
                      { shoeName: 'tasselled green low-top lace-up' },
                      { price: 1100 },
                      { designerName: 'Brunello Cucinelli' },
                      { shoeName: 'plain beige suede moccasin' },
                      { price: 950 },
                      { designerName: 'Brunello Cucinelli' },
                      { shoeName: 'plain olive suede moccasin' },
                      { price: 1050 },
                      { designerName: 'Gucci' },
                      { shoeName: 'red leather laced sneakers' },
                      { price: 800 },
                      { designerName: 'Gucci' },
                      { shoeName: 'black leather laced sneakers' },
                      { price: 900 }
                    ];

assertArrayEquals(output, expectedOutput, 'Returns a flat list for all shoes');
