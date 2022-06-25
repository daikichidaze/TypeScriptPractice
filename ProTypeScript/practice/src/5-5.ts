const throwError = () => {
  const error = new Error("new error");
  throw error;
};

const getAverage = (nums: number[]): number => {
  if (nums.length === 0) {
    throw new Error("it's null");
  }
  return sum2(nums) / nums.length;
};

const sum2 = (args: number[]) => {
  let result = 0;
  for (const num of args) {
    result += num;
  }
  return result;
};

try {
  console.log(getAverage([]));
} catch (err) {
  console.log("found error");
  //   console.log(err);
}
