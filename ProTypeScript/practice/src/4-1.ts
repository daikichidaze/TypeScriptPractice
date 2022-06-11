function range(min: number, max: number): number[] {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

console.log(range(2, 6));

type Human = {
  height: number;
  weight: number;
};

const calcBMI = function ({ height, weight }: Human): number {
  return weight / height ** 2;
};

const calcBMI2 = ({ height, weight }: Human): number => {
  return weight / height ** 2;
};

const calcBMI3 = ({ height, weight }: Human): number => weight / height ** 2;

const uhyo: Human = { height: 1.84, weight: 72 };
console.log(calcBMI(uhyo));

const sum = (...args: number[]) => {
  let result = 0;
  for (const num of args) {
    result += num;
  }
  return result;
};

console.log(sum(1, 10, 100));
console.log(sum(123, 456));
console.log(sum());

const nums = [1, 2, 3, 4, 5];
console.log(sum(...nums, 1));
