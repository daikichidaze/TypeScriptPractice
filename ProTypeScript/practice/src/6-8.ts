type Some<T> = {
  tag: "some";
  value: T;
};
type None = {
  tag: "none";
};

type Option<T> = Some<T> | None;

function showNumberIfExists(obj: Option<number>) {
  if (isSome(obj)) {
    console.log(obj.value);
  }
}

function isSome<T>(obj: Option<T>): obj is Some<T> {
  return obj.tag === "some";
}

const v: Option<number> = {
  tag: "some",
  value: 5,
};
showNumberIfExists(v);

function mapOption<T, U>(obj: Option<T>, callback: (value: T) => U): Option<U> {
  switch (obj.tag) {
    case "some":
      return {
        tag: "some",
        value: callback(obj.value),
      };
    case "none":
      return {
        tag: "none",
      };
  }
}

function doubleOption(obj: Option<number>) {
  return mapOption(obj, (x) => x * 2);
}
