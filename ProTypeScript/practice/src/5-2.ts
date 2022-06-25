// const john: User_class<string> = {
//   name: "John",
//   data: "data",
//   #age: 2,
//   isAdult: () => true,
// };

type Item = {
  name: string;
  price: number;
};

const apple: Item = {
  name: "ringo",
  price: 200,
};

const Item: Item = {
  name: "mikan",
  price: 150,
};

class apple_class {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
const orange: apple_class = {
  name: "orange",
  price: 150,
};

type MyAppleConstructor = new (name: string, price: number) => apple_class;
const MyApple: MyAppleConstructor = apple_class;

const a = new MyApple("a", 111);

console.log(a instanceof apple_class);
console.log({} instanceof apple_class);
