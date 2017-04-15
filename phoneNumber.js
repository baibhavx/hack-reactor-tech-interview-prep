/*
Problem statement

Accept an array of numbers that represent a phone number.
E.g., [6, 5, 0, 8, 3, 5, 9, 1, 7, 2]
Return as a string in this format: '(650) 835-9172'.
*/

function PhoneNumberFormatter(numbers) {
  if(numbers.length !== 10) {
    throw 'Phone number must be 10 digits'
  }
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  string = this.parenthesize(this.getAreaCode()) + ' ' +
             this.getExchangeCode() + '-' + this.getLineNumber();

  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  return this.numbers.slice(0,3).join('');
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  return this.numbers.slice(3,6).join('');
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  return this.numbers.slice(6,10).join('');
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};



function assertEqual(actual, expected, testName) {
  testName = '[' + testName + ']';
  if(actual === expected) {
    console.log('PASSED ' + testName);
  } else {
    console.log('FAILED ' + testName +
                'Expected ' + expected +
                ', but got ' + actual);
  }
}

var output = new PhoneNumberFormatter([4, 1, 5, 4, 1, 2, 6, 8, 2, 8]).render();
assertEqual(output, '(415) 412-6828', 'Renders a 10-digit telephone number');
