//Question 5

// The object list you have given it must be arrays of object so I have make them the array of objects
function sorted(list) {
    let finalResult = list.sort((a, b) => {
      return a.id - b.id;
    });
    return finalResult
  }
  var list = [
    { id: 4, name: "abc" },
    { id: 10, name: "ab2" },
    { id: 5, name: "abc3" },
    { id: 6, name: "abc5" },
  ];
console.log(sorted(list));