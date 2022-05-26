import * as Data from "./data";

const Patterns: any = {};

Object.keys(Data).forEach((item) => {
  // @ts-ignore
  Patterns[item] = Data[item];
});

export default Patterns;
