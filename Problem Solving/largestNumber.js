// Find largest number in the array.
// Output: 9
const list = [3, 5, 7, 9, 3, 2];
let max = list[0];

for (let i = 0; i < list.length; i++) {
    if(list[i] > max) {
        max = list[i];
    }
}

console.log('Max is ' + max);
