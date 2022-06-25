class User_class<T> {
  static adminName: string = "uhyo";
  static getAdminUser() {
    return new User_class<string>(User_class.adminName, 26, "test");
  }

  name: string;
  #age: number;
  readonly data: T;

  constructor(name: string, age: number, data: T) {
    this.name = name;
    this.#age = age;
    this.data = data;
  }

  isAdult(): boolean {
    return this.#age >= 20;
  }

  setAge(newAge: number) {
    this.#age = newAge;
  }
}

const uhyo_class = new User_class("name1", 23, "data");

uhyo_class.setAge(90);
console.log(uhyo_class.isAdult());
