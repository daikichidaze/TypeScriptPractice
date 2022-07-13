type Animal_6 = {
  species: string;
  age: string;
};
type Human_6 = {
  name: string;
  age: number;
};

type User_6 = Animal_6 | Human_6;

const tama: User_6 = {
  species: "Felis silvestris catus",
  age: "tama san",
};

const uhoy_6_1: User_6 = {
  name: "uhyo",
  age: "6",
  species: "human",
};

const test_age: string | number = tama.age;

const func_age = (user: User_6): string | number => user.age;

type MysteryFunc = ((str: string) => string) | ((str: string) => number);
const useFunc = (func: MysteryFunc) => func("uhyo");

// type Human_6 = Animal_6 & { name: string };

type StrAndNum = string & number;

const getName = (human: Human_6) => human.name;
const getSpecies = (animal: Animal_6) => animal.species;

const mysteryFunc = Math.random() < 0.5 ? getName : getSpecies;
