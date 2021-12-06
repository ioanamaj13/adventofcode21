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
var eachFishProgression = function (fish, days) {
    var fishProgression = [fish];
    countThemFish(fishProgression, days);
    return fishProgression.length;
};
var allFish = function (arr, days) {
    var allFishies = 0;
    arr.forEach(function (fish) {
        console.log(eachFishProgression(fish, days));
        allFishies += eachFishProgression(fish, days);
    });
    console.log(allFishies);
    return allFishies;
};
(0, readFirstLine_1.readFirstLine)("../inputs/day6_0.txt").then(function (res) {
    var fishies = res.split(",").map(function (fish) { return parseInt(fish); });
    console.log(countThemFish(fishies, 18));
    //   console.log(countThemFish(fishies, 80));
    //console.log(countThemFish(fishies, 256));  //- Fail FATAL ERROR: invalid array length Allocation failed - JavaScript heap out of memory
    //console.log(allFish(fishies, 80));
    //   let dailyFish = countThemFish([0],256);
    //   console.log('dailyFish', dailyFish); 
    console.log(allFish(fishies, 18));
});
