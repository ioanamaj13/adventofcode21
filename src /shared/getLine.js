"use strict";
exports.__esModule = true;
exports.getLine = exports.getInput = void 0;
var fs = require('fs');
function getInput(fileName) {
    return fs.readFileSync("../inputs/".concat(fileName, ".txt"), 'utf8').replace(/\r/g, '');
}
exports.getInput = getInput;
function getLine(fileName, separator) {
    if (separator === void 0) { separator = '\n'; }
    return getInput(fileName).split(separator);
}
exports.getLine = getLine;
