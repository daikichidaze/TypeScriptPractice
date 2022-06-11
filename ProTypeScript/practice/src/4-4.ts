type User<N> = {
  name: N;
};

function repeat<T>(element: T, length: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
}

console.log(repeat<string>("a", 5));

console.log(repeat<number>(123, 3));

const repeat2 = <T>(element: T, length: number): T[] => {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};

const utils = {
  repeat3<T>(element: T, length: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  },
};

const pair = <Left, Right>(left: Left, right: Right): [Left, Right] => [
  left,
  right,
];
const p = pair<string, number>("uhyo", 26);

const repeat4 = <
  T extends {
    name: string;
  }
>(
  element: T,
  length: number
): T[] => {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};

console.log(
  repeat<HasNameAndAge>(
    {
      name: "uhyo",
      age: 26,
    },
    3
  )
);

const r = repeat<HasNameAndAge>(
  {
    name: "uhyo",
    age: 26,
  },
  3
);

const r2 = repeat("a", 5);
