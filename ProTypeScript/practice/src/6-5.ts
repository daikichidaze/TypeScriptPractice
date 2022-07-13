function getFirstFiveLetters(strOrNum: string | number) {
  const str = strOrNum as string;
  return str.slice(0, 5);
}

console.log(getFirstFiveLetters("uhyohyouhyo"));

type Animal_6_5 = {
  tag: "animal";
  species: string;
};

type Human_6_5 = {
  tag: "human";
  name: string;
};

type User_6_5 = Animal_6_5 | Human_6_5;

function getNamesIfAllHuman(users: readonly User_6_5[]): string[] | undefined {
  if (users.every((user) => user.tag === "human")) {
    return (users as Human_6_5[]).map((user) => user.name);
  }
  return undefined;
}

const names1 = ["u", "j", "t"] as const;
type Name = typeof names1[number];
