type SignType = "plus" | "minus";
function signNumber(type: SignType): number {
  return type === "plus" ? 1 : -1;
}

function numberWithSign(num: number, type: SignType | "none") {
  if (type === "none") {
    return 0;
  } else {
    return num * signNumber(type); // type = SignType
  }
}

console.log(numberWithSign(5, "plus"));
console.log(numberWithSign(5, "minus"));
console.log(numberWithSign(5, "none"));

function numberWithSign2(num: number, type: SignType | "none") {
  if (type === "none") {
    return 0;
  }
  return num * signNumber(type); // type = SignType
}
function numberWithSign3(num: number, type: SignType | "none") {
  return type === "none" ? 0 : num * signNumber(type);
}

console.log(typeof typeof undefined);

function formatNumberOrString(value: string | number) {
  if (typeof value === "number") {
    return value.toFixed(3);
  } else {
    return value;
  }
}

console.log(formatNumberOrString(4.4));
console.log(formatNumberOrString("u"));

type Animal_6_3 = {
  tag: "animal";
  species: string;
};

type Human_6_3 = {
  tag: "human";
  name: string;
};

type User_6_3 = Animal_6_3 | Human_6_3;

const tama_6_3: User_6_3 = {
  tag: "animal",
  species: "Felis silvestris catus",
};

const uhyo_6_3: User_6_3 = {
  tag: "human",
  name: "uhyo",
};

const getUserName = (user: User_6_3): string =>
  user.tag === "human" ? user.name : "no name";

type HumanKeys = keyof Human_6_3;
