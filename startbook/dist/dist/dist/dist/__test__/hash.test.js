"use strict";

var _hash = require("../hash");

test('calc hash', function () {
  expect((0, _hash.calcHash)(10, 11)).toBe(10);
});
test('calc hash collision', function () {
  expect((0, _hash.calcHash)(10 + 1, 11)).toBe(0);
});
test('hash table', function () {
  expect((0, _hash.createHashTable)()[0]).toBe(42);
});