import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input your number: ", (line) => {
  const num: number = Number(line);
  console.log(`${num} was inputed. Result: ${num + 1000}`);
  rl.close();
});
