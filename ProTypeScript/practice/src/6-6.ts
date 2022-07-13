function doWhatever(obj: any) {
  console.log(obj.n.t);
  obj();
  const result = obj * 9;
  return result;
}

console.log(doWhatever(1));

function doNothing(val: unknown) {
  if (typeof val === "number") {
    console.log(val * 5);
  }
}
