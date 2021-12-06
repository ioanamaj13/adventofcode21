"use strict";
exports.__esModule = true;
var readFirstLine_1 = require("../shared/readFirstLine");
var addFishies = function (arr, number) {
    for (var i = 0; i < number; i++) {
        arr.push(8);
    }
    return arr;
};
// 4294967296 - max 
// 26984457539 - expected length to cover? 
// 9007199254740991 - maxint 
var countThemFish = function (arr, days) {
    for (var day = 0; day < days; day++) {
        var newFish = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                arr[i]--;
            }
            else if (arr[i] === 0) {
                arr[i] = 6;
                newFish++;
            }
        }
        addFishies(arr, newFish);
        //console.log(arr.toString());
    }
    return arr.length;
};
(0, readFirstLine_1.readFirstLine)("../inputs/day6.txt").then(function (res) {
    var fishies = res.split(",").map(function (fish) { return parseInt(fish); });
    //console.log(countThemFish(fishies, 18)); 
    console.log(countThemFish(fishies, 80));
    //console.log(countThemFish(fishies, 256));  //- Fail FATAL ERROR: invalid array length Allocation failed - JavaScript heap out of memory
});
