// Find intersections between two lists.
// Output: [2,2];
const list1 = [1, 2, 2, 5];
const list2 = [2, 2];

const intersection = list1.filter((value, index) => {
  return list2.includes(value);
});

console.log(intersection);
