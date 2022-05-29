// const arr: readonly number[] = [1, 10, 100];
const arr: number[] = [1, 10, 100];
arr.push(2000);
console.log(arr);

console.log(arr.includes(2000));

for (const elm of arr) {
  console.log(elm);
}
