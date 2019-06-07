"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHashTable = exports.calcHash = void 0;

var showHash = function showHash() {
  var form = document.forms.hashForm;
  var inputValue = form.inputHash.value;
  var resultId = 'searchResult';
  var resultElm = document.getElementById(resultId);

  if (resultElm != null) {
    resultElm.textContent = inputValue;
  } else {
    var div = document.createElement('div');
    div.setAttribute('id', resultId);
    div.textContent = inputValue;
    var element = document.getElementById('hashForm');
    element.parentNode.insertBefore(div, element.nextSibling);
  }
};

var calcHash = function calcHash(num, divident) {
  return num % divident;
};

exports.calcHash = calcHash;

var createHashTable = function createHashTable() {
  var arrayD = [12, 25, 36, 20, 30, 8, 42];
  var arrayH = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var divident = arrayH.length;

  for (var i = 0; i < arrayD.length; i++) {
    var value = arrayD[i];
    var k = calcHash(value, divident);

    while (arrayH[k] != 0) {
      k = calcHash(k + 1, divident);
    }

    arrayH[k] = value;
  }

  console.log(arrayH);
  return arrayH;
};

exports.createHashTable = createHashTable;