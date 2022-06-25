type partial_user = {
  name: string;
};

class User_5_3 implements partial_user {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }
}
class PremiumUser_5_3 extends User_5_3 {
  rank: number;

  constructor(name: string, age: number, rank: number) {
    super(name, age);
    this.rank = rank;
    this.name = "new";
  }

  public override isAdult(): boolean {
    return true;
  }
}
const uhyo53 = new PremiumUser_5_3("uhyo", 26, 3);

const u1 = new User_5_3("test", 1);
const u2 = new User_5_3("test2", 2);

console.log(u1.isAdult === u2.isAdult);
