import { readFile } from "fs/promises";

const p = readFile("foo.txt", "utf8");

p.then(
  (result) => {
    console.log(1);
  },
  (error: unknown) => {
    console.log(2);
  }
);

const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};

sleep(300).then(() => {
  console.log("0.3 second");
});

import("fs/promises")
  .then(({ readFile }) => readFile("foo.txt", "utf8"))
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
