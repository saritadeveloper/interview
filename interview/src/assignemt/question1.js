//Question 1
// Empty Array represent no even numbers.
// Array length more than 0 indicates the numbers which are even numbers in a list.
function findEvenNumber(list) {
    var resultArray = [];
    list.map((tl) => {
      if (tl % 2 === 0) {
        resultArray.push(tl);
      }
    });
    return resultArray;
  }
console.log(findEvenNumber([0, 1, 2, 3, 4, 5, 6, 7, 8]));
  


