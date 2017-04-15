// Is one string a rotated version of another?

// For example:
// String 1: 'hello world'
// String 2: 'orldhello w'


function getStringMap(string) {
  var stringMap = {};
  string.split('').forEach(function(alphabet) {
    if(stringMap[alphabet] === undefined) {
      stringMap[alphabet] = 1;
    } else {
      stringMap[alphabet]++;
    }
  });
  return stringMap;
}

console.log(getStringMap("hello world"));
console.log(getStringMap('orldhello w'));

function isRotated(str1, str2) {
  var str1Map = getStringMap(str1);
  var str2Map = getStringMap(str2);
  if(Object.keys(str1Map).length !== Object.keys(str2Map).length) {
    return false;
  }
  for(var key in str1Map) {
    if(str1Map[key] !== str2Map[key]) {
      return false;
    }
  }
  return true;
}

output = isRotated('hello world', 'orldhello w');
console.log(output);
