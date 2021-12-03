"use strict";
exports.__esModule = true;
var readInput_1 = require("../shared/readInput");
var solution = function (arr) {
    var increased = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1])
            increased++;
    }
    return increased;
};
var solution2 = function (arr) {
    var increased = 0;
    for (var i = 0; i < arr.length - 3; i++) {
        if (arr[i] + arr[i + 1] + arr[i + 2] < arr[i + 1] + arr[i + 2] + arr[i + 3])
            increased++;
    }
    return increased;
};
(0, readInput_1.processLineByLine)('../inputs/day1.txt').then(function (res) { return console.log(solution(res)); });
(0, readInput_1.processLineByLine)('../inputs/day1.txt').then(function (res) { return console.log(solution2(res)); });
