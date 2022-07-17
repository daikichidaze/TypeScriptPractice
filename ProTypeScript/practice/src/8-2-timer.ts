import { readFile } from "fs";
import { performance } from "perf_hooks";

setTimeout((ss: string) => {
  console.log(ss, "start");
}, 3000);
console.log("called");

const startTime = performance.now();
readFile("foo.txt", "utf8", (err, result) => {
  const endTime = performance.now();
  console.log(`result time: ${endTime - startTime}`);
  console.log(result);
});
