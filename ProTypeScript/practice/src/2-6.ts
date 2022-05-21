let result: string = "";
for (let i = 1; i < 100; i++) {
  const dev_3: boolean = i % 3 === 0;
  const dev_5: boolean = i % 5 === 0;

  if (!dev_3 && !dev_5) {
    result += String(i);
  } else if (dev_3 && !dev_5) {
    result += "Fizz";
  } else if (!dev_3 && dev_5) {
    result += "Buss";
  } else if (dev_3 && dev_5) {
    result += "FizzBuzz";
  } else {
    result += "";
  }
  result += " ";
}
console.log(result);
