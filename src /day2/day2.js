"use strict";
exports.__esModule = true;
var readInputString_1 = require("../shared/readInputString");
var getFinalPosition = function (arr) {
    var depth = 0;
    var position = 0;
    var value = 0;
    for (var i = 0; i < arr.length; i++) {
        value = parseInt(arr[i].match(/\d/)[0]);
        var direction = arr[i].split(" ")[0];
        switch (direction) {
            case "forward":
                position += value;
                break;
            case "up":
                depth -= value;
                break;
            case "down":
                depth += value;
                break;
        }
        console.log(value, direction);
    }
    console.log(depth, position, depth * position);
    return value;
};
var getFinalPosition2 = function (arr) {
    var depth = 0;
    var position = 0;
    var value = 0;
    var aim = 0;
    for (var i = 0; i < arr.length; i++) {
        value = parseInt(arr[i].match(/\d/)[0]);
        var direction = arr[i].split(" ")[0];
        switch (direction) {
            case "forward":
                position += value;
                depth += (value * aim);
                break;
            case "up":
                aim -= value;
                break;
            case "down":
                aim += value;
                break;
        }
        console.log(value, direction);
    }
    console.log(depth, position, depth * position);
    return value;
};
(0, readInputString_1.readLineByLine)("../inputs/day2.txt").then(function (res) {
    return console.log(getFinalPosition(res));
});
(0, readInputString_1.readLineByLine)("../inputs/day2.txt").then(function (res) {
    return console.log(getFinalPosition2(res));
});
