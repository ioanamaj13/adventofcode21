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
(0, readInputString_1.readLineByLine)("../inputs/day5_0.txt").then(function (res) {
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
    grid.forEach(function (pos, idx) {
        for (var i = 0; i < pos.length; i++) {
            grid[idx][i] = 0;
        }
    });
    console.log("width", findWidth(segments));
    console.log("depth", findDepth(segments));
    console.log(grid.length);
    segments.forEach(function (segment) {
        //vertical
        if (segment.start.x === segment.end.x) {
            for (var i = Math.min(segment.start.y, segment.end.y); i <= Math.max(segment.start.y, segment.end.y); i++) {
                grid[i][segment.start.x] += 1;
            }
        }
        else if (segment.start.y === segment.end.y) {
            //horisontal
            for (var i = Math.min(segment.start.x, segment.end.x); i <= Math.max(segment.start.x, segment.end.x); i++) {
                grid[segment.start.y][i] += 1;
            }
        }
        //diagonal
        // if (
        //   Math.abs(segment.start.x - segment.end.x) ===
        //   Math.abs(segment.end.y - segment.start.y)
        // ) {
        //   console.log('diagonal', segment);
        //   //primart diagonal: row = column
        //   //secondaty diagonal: row = numberOfRows – column - 1
        //   if (segment.start.x >= segment.end.x) {
        //     if (segment.start.y >= segment.end.y) {
        //       console.log("segment bottom right -> top left", segment, "i- , j-");
        //       for (let k = segment.start.x; k >= 0; k--) {
        //         for (let l = segment.start.y; l >= 0; l--) {
        //           if (k === l) {
        //             // console.log("k, l", k + segment.end.x, l + segment.end.y);
        //             grid[l + segment.end.y][k + segment.end.x] += 1;
        //           }
        //         }
        //       }
        //     } else {
        //       console.log("segment bottom left -> top right", segment, "i-, j+");
        //       for (let k = segment.start.x + 1; k >= 0; k--) {
        //         for (let l = 0; l <= segment.end.y + 1; l++) {
        //           if (k === segment.start.x - l - 1) {
        //             // console.log("k, l", k + segment.end.x, l + segment.start.y);
        //             grid[k + segment.end.x][l + segment.start.y] += 1;
        //           }
        //         }
        //       }
        //     }
        //   } else {
        //     if (segment.start.y >= segment.end.y) {
        //       console.log("segment top right -> bottom left", segment, "i+, j-");
        //       for (let k = 0; k <= segment.end.x; k++) {
        //         for (let l = segment.start.y; l >= 0; l--) {
        //           if (k === segment.start.x - l - 1) {
        //             console.log("k, l", k + segment.start.x, l + segment.end.y - 1);
        //             grid[l + segment.end.y][k + segment.start.x] += 1;
        //           }
        //         }
        //       }
        //     } else {
        //       console.log("segment top left -> bottom right", segment, "i+, j+");
        //       for (let k = 0; k <= segment.end.x; k++) {
        //         for (let l = 0; l <= segment.end.y; l++) {
        //           if (k === l) {
        //             // console.log("k, l", k + segment.start.x, l + segment.start.y);
        //             grid[k + segment.start.x][l + segment.start.y] += 1;
        //           }
        //         }
        //       }
        //     }
        //   }
        //   //   for (let k = 0; k <= Math.abs(segment.start.x - segment.end.x); k++) {
        //   //     for (let l = 0; l <= Math.abs(segment.end.y - segment.start.y); l++) {
        //   //       //positive diagonal
        //   //       if (k === l) {
        //   //         //grid[k + Math.min(segment.start.x, segment.end.x)][l + Math.min(segment.end.y, segment.start.y)] += 1;
        //   //         // console.log(grid[k][l]);
        //   //         // console.log('k =', k , 'grid k =' + Math.min(segment.start.x, segment.end.x) );
        //   //         // console.log('l =', l , 'grid l =' + Math.min(segment.start.y, segment.end.y) );
        //   //       }
        //   //       if (k === Math.abs(segment.start.x - segment.end.x) - l - 1) {
        //   //         //grid[k + Math.min(segment.start.x, segment.end.x)][l + Math.min(segment.end.y, segment.start.y)]++;
        //   //       }
        //   //       //negative diagonal
        //   //     }
        //   //   }
        // }
    });
    grid.forEach(function (line) { return console.log(line.toString().replace(/,/g, '').replace(/0/g, '.')); });
    var safeSpots = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] > 1)
                safeSpots++;
        }
    }
    console.log("safeSpots", safeSpots);
});
