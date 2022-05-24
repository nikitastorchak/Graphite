import * as Data from "./data";

console.log(555, Data);
const Patterns = {};

Object.keys(Data).forEach((item) => {
  Patterns[item] = Data[item];
});

console.log(Data, Patterns);

export default Patterns;
