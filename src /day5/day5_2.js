"use strict";
exports.__esModule = true;
var readInputString_1 = require("../shared/readInputString");
var findWidth = function (seg) {
    var maxStart = Math.max.apply(Math, seg.map(function (point) { return point.start.x; }));
    var maxEnd = Math.max.apply(Math, seg.map(function (point) { return point.end.x; }));
    return Math.max(maxStart, maxEnd);
};
var findDepth = function (seg) {
    var maxStart = Math.max.apply(Math, seg.map(function (point) { return point.start.y; }));
    var maxEnd = Math.max.apply(Math, seg.map(function (point) { return point.end.y; }));
    return Math.max(maxStart, maxEnd);
};
(0, readInputString_1.readLineByLine)("../inputs/day5.txt").then(function (res) {
    console.log(res);
    var segments = [];
    res.forEach(function (item) {
        segments.push({
            start: {
                x: parseInt(item.split("->")[0].split(",")[0]),
                y: parseInt(item.split("->")[0].split(",")[1])
            },
            end: {
                x: parseInt(item.split("->")[1].split(",")[0]),
                y: parseInt(item.split("->")[1].split(",")[1])
            }
        });
    });
    var grid = Array.from(Array(Math.max(findWidth(segments), findDepth(segments)) + 1), function () { return new Array(Math.max(findWidth(segments), findDepth(segments)) + 1); });
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid.length; j++) {
            grid[i][j] = 0;
        }
    }
    var drawLine = function (seg) {
        //vertical
        if (seg.start.x === seg.end.x) {
            for (var i = Math.min(seg.start.y, seg.end.y); i <= Math.max(seg.start.y, seg.end.y); i++) {
                grid[i][seg.start.x] += 1;
            }
        }
        else if (seg.start.y === seg.end.y) {
            //horisontal
            for (var i = Math.min(seg.start.x, seg.end.x); i <= Math.max(seg.start.x, seg.end.x); i++) {
                grid[seg.start.y][i] += 1;
            }
        }
    };
    var swapCoords = function (seg) {
        var swap = seg;
        var aux = seg.end;
        if (seg.start.x > seg.end.x) {
            swap.end = seg.start;
            swap.start = aux;
        }
        return swap;
    };
    var drawDiagonal = function (seg) {
        if (Math.abs(seg.start.x - seg.end.x) === Math.abs(seg.end.y - seg.start.y)) {
            console.log("diagonal", seg);
            if (seg.start.x > seg.end.x)
                seg = swapCoords(seg);
            console.log('swapped', seg);
            var i = seg.start.x;
            var j = void 0;
            if (seg.end.y > seg.start.y) {
                j = seg.start.y;
                while (i <= seg.end.x &&
                    j <= seg.end.y) {
                    grid[j][i] += 1;
                    i++;
                    j++;
                }
            }
            else {
                j = seg.start.y;
                while (i <= seg.end.x &&
                    j >= seg.end.y) {
                    //console.log('i,j', i, j);
                    grid[j][i] += 1;
                    i++;
                    j--;
                }
            }
        }
    };
    //   drawDiagonal(segments[5]);
    //   drawDiagonal(segments[1]);
    segments.forEach(function (segment) {
        drawLine(segment);
        drawDiagonal(segment);
    });
    //   grid.forEach((line) =>
    //     console.log(line.toString().replace(/,/g, " ").replace(/0/g, "."))
    //   );
    grid.forEach(function (line) { return console.log(line.toString().replace(/,/g, " ")); });
    var safeSpots = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] > 1)
                safeSpots++;
        }
    }
    console.log("safeSpots", safeSpots);
});
