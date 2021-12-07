"use strict";
exports.__esModule = true;
var readFirstLine_1 = require("../shared/readFirstLine");
(0, readFirstLine_1.readFirstLine)("../inputs/day7.txt").then(function (res) {
    var positions = res.split(",").map(function (pos) { return parseInt(pos); });
    var distances = [];
    console.log(positions);
    for (var i = 0; i < positions.length; i++) {
        var temp = 0;
        var anchor = positions[i];
        for (var j = 0; j < positions.length; j++) {
            //p2: 
            var newMoves = (Math.abs(positions[j] - anchor) * (Math.abs(positions[j] - anchor) + 1)) / 2;
            temp += newMoves;
            //p1: temp += Math.abs(positions[j] - anchor; 
        }
        distances.push(temp);
    }
    console.log(distances);
    console.log(Math.min.apply(Math, distances));
});
