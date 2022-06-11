import { start } from "repl";

const getFizzBuzzString = (i: number): string => {
  const dev_3: boolean = i % 3 === 0;
  const dev_5: boolean = i % 5 === 0;

  let result: string;

  if (!dev_3 && !dev_5) {
    result = String(i);
  } else if (dev_3 && !dev_5) {
    result = "Fizz";
  } else if (!dev_3 && dev_5) {
    result = "Buss";
  } else if (dev_3 && dev_5) {
    result = "FizzBuzz";
  } else {
    result = "";
  }
  return result;
};

const sequence = (start: number, end: number): number[] => {
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

for (const i of sequence(1, 100)) {
  const message = getFizzBuzzString(i);
  //   console.log(message);
}

const map = <T, U>(array: T[], callback: (n: T) => U): U[] => {
  const result: U[] = [];
  for (const n of array) {
    result.push(callback(n));
  }
  return result;
};

const data = [1, 1, 2, 3, 5, 8, 13];
const result = map(data, (x) => x * 10);
console.log(result);
