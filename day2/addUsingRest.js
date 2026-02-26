let store = []; // global variable
let index = 0;
let add = (...a) => {
  store[index] = a;
  index++;
  let sum = 0;
  for (x of a) {
    sum = sum + x;
  }
  return sum;
};
let r = add(10, 20);
console.log("TWO : ", r);

r = add(1, 4, 3);
console.log("THREE : ", r);

r = add(75, 7, 3, 5, 7, 5, 7, 5, 78);
console.log(r);

console.log(store);
