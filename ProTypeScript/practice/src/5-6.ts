type User_struct = {
  name: string;
  age: number;
};

const createUser_struct = (name: string, age: number): User_struct => {
  if (name === "") {
    throw new Error("cannot make the name empty");
  }
  return {
    name,
    age,
  };
};

const getMessage_struct = (user: User_struct, message: string): string =>
  `${user.name}(${user.age} [${message}])`;

const uhyo_5_6 = createUser_struct("uhyo", 26);
console.log(getMessage_struct(uhyo_5_6, "hello"));

class User_class_5_6 {
  readonly #name: string;
  readonly #age: number;

  constructor(name: string, age: number) {
    if (name === "") {
      throw new Error("cannot make the name empty");
    }
    this.#name = name;
    this.#age = age;
  }
  getMessage = (message: string): string =>
    `${this.#name}(${this.#age} [${message}])`;
}

const uhyo_5_6_2 = new User_class_5_6("uhyo", 26);
console.log(uhyo_5_6_2.getMessage("hello"));

const createUser = (name: string, age: number) => {
  return (message: string) => `${name}(${age} [${message}])`;
};
