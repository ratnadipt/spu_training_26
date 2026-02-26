let arr = [1, 2, 3, 4];
// length
let len = arr.length;
console.log(len);

// display
// for (let i = 0; i < len; i++) {
//   console.log(arr[i]);
// }

// for (x of arr) {
//   console.log(x);
// }

// calculate square of eachh element of the array
for (item of arr) {
  let sqr = item * item;
  console.log("Square : ", sqr);
}
