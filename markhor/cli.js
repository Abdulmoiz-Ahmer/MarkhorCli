#! /usr/bin/env node
const variants = require("./index");

console.log(
  "What kind of architecture/design pattern you would like (mvc|mvvm|layered)"
);

// if (process.argv(2) === "mvc") {
  variants.createMVC();
// }
