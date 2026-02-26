let arr = [1, 5, 3, 57, 4, 6, 3, 7, 2];
let max = arr[0];

for (x of arr) {
  // compare
  if (x > max) {
    max = x;
  }
}

console.log("Largest : ", max);
