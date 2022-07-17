import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter text: ", (line) => {
  console.log(`${line} was inputed`);
  rl.close();
});
