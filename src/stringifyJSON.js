// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return '' + null;
  }
  if (typeof obj === 'number') {
    return '' + obj;
  }
  if (typeof obj === 'boolean') {
    return '' + obj;
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var resultArray = [];
    for (var i = 0; i < obj.length; i++) {
      resultArray.push(stringifyJSON(obj[i]));
    }
    return '[' + resultArray + ']';
  }
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    var resultArray = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function') {
        break;
      }
      var objKey = key;
      var objVal = stringifyJSON(obj[key]);
      resultArray.push('"' + objKey + '":' + objVal);
    }
    return '{' + resultArray + '}';
  }
};
