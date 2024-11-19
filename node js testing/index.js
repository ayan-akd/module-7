//local modules

const {add, a} = require('./local-1');
const {add : add2, a : b} = require('./local-2');

console.log(add(1, a));
console.log(add2(1, 5, b));

// built in modules

const path = require('path');

// console.log(path.dirname(__filename));
console.log(path.parse("G:/Codes/Program_hero/Level 2/Mission 2/Module 3/index.js"));