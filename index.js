function iterativeLog(array) {
  array.forEach((element, index) => {console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  var evens = [0, 2, 4, 6, 8, 10];
  evens.forEach(callback);
  return evens;
}

function doToArray(array, callback) {
  array.forEach(callback);
}


// 3) index doToArray(array, callback) uses `callback` as the callback for `array`.forEach:
//   ReferenceError: doToArray is not defined
//     at Context.<anonymous> (test/index-test.js:41:7)
      
      
// function doToElementsInArray(array, callback) {
//   array.forEach(callback);
// }

// // Add your changeCompletely() function here:

// function changeCompletely(element, index, array) {
//   array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
// }