import * as Data from "./data";

const Patterns: any = {};
const currentData: any = Data;

Object.keys(Data).forEach((item) => {
  Patterns[item] = currentData[item];
});

export default Patterns;
