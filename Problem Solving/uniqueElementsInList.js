// Find unique elements in an array.
// Output [1,8,2,3,4,5]
const list = [1, 8, 1, 2, 3, 2, 4, 5, 4, 5];
const uniqueList = [];

list.forEach((value) => {
  if (!uniqueList.includes(value)) {
    uniqueList.push(value);
  }
});

console.log(uniqueList);