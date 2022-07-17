import path from "path";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";

const sleep_8_5 = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};

async function errorAfter1ms(): Promise<string> {
  await sleep_8_5(1);
  throw new Error("timeout!");
}

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const dataFile = path.join(fileDir, "../uhyo.txt");

const data = await Promise.race([
  readFile(dataFile, { encoding: "utf8" }),
  errorAfter1ms(),
]).catch(() => {
  return " ";
});

let count = 0;
let currentIndex = 0;

while (true) {
  const nextIndex = data.indexOf("uhyo", currentIndex);
  if (nextIndex >= 0) {
    count++;
    currentIndex = nextIndex + 1;
  } else {
    break;
  }
}

console.log(count);
