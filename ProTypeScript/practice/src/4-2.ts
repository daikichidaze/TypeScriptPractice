type HasName = {
  name: string;
};

type HasNameAndAge = {
  name: string;
  age: number;
};

const fromAge = (age: number): HasNameAndAge => ({
  name: "John Smith",
  age: age,
});

const f: (age: number) => HasName = fromAge;

const obj_2: HasName = f(100);

const xRepeat = (num: number): string => "x".repeat(num);
