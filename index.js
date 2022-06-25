const { reverse } = require("lodash");

function stringLengthFun(stringOne) {
  let text = stringOne.length;
   return text;
}

const lengthofString = stringLengthFun ('Hello');

function reverseStringFun (stringTwo) {
  let textTwo = reverse(stringTwo);
  return textTwo;
}

const reverseText = reverseStringFun('hello world');