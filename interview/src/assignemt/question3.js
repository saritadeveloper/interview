//Question 3

//You can test it using Array.from(Array(100).keys())
function printRepeating(arr) {
  var i, j;
  var result = [];
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}
// printRepeating([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1]);
a = Array.from(Array(100).keys());
// console.log(a)
a.push(1);
// console.log(a)
console.log(printRepeating(a));