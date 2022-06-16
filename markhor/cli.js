#! /usr/bin/env node
const variants = require("./index");

// console.log(
//   "What kind of architecture/design pattern you would like (mv style|three layered style)"
// );

switch (process.argv[2]) {
  case "mv":
    variants.createMV();
    break;

  case "3l":
    variants.createThreeLayeredArchitecture();
    break;

  default:
    break;
}
