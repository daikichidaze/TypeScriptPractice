async function get3(): Promise<number> {
  console.log(1);
  await sleep2(1000);
  console.log(2);
  return 3;
}

const sleep2 = (duration: number) => {
  return new Promise<void>((resolve) => {
    console.log("sleep!");
    setTimeout(resolve, duration);
  });
};

const p2 = get3();
p2.then((num) => {
  console.log(num);
});

console.log(4);

async function main() {
  const { readFile, writeFile } = await import("fs/promises");

  const fooContent = await readFile("foo.txt", "utf8");
  await writeFile("bar.txt", fooContent + fooContent);
  console.log("writing finished");
}

main().then(() => {
  console.log("main() finished");
});
