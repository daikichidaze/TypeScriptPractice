let input = "";
const t = "ttt";
const obj = {
  foo: 123,
  bar: "Hello",
  name: input ? input : "name",
  [t]: "123",
};

obj.name = "test";

const obj2 = {
  ...obj,
  name: "test2",
};

console.log(obj2);

type MyObj = {
  [key: string]: number;
};
const obj3: MyObj = {
  foo: 123,
};

const n: number = obj3.bar;
console.log(n);

console.log(typeof obj3.foo);
