"use strict";
exports.__esModule = true;
var readInputString_1 = require("../shared/readInputString");
var findMostCommonBit = function (arr) {
    var commons = arr.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});
    return commons;
};
var splitDigitsToArrays = function (arr) {
    var calcs = [];
    for (var k = 0; k < arr[0].length; k++) {
        calcs[k] = [];
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            calcs[j][i] = arr[i][j];
        }
    }
    return calcs;
};
var getDiagnostic = function (arr) {
    var gamma = "";
    var epsilon = "";
    var values = splitDigitsToArrays(arr);
    for (var l = 0; l < values.length; l++) {
        var digit = findMostCommonBit(values[l]);
        if (digit["0"] > digit["1"]) {
            gamma += "0";
            epsilon += "1";
        }
        else {
            gamma += "1";
            epsilon += "0";
        }
    }
    return parseInt(gamma, 2) * parseInt(epsilon, 2);
};
var getOxigen = function (arr) {
    var digitsArrays = splitDigitsToArrays(arr);
    var oxigen = arr;
    while (oxigen.length > 1) {
        var _loop_1 = function (i) {
            var digits = findMostCommonBit(splitDigitsToArrays(oxigen)[i]);
            if (digits["0"] <= digits["1"]) {
                //filter by 1
                oxigen = oxigen.filter(function (el) { return el[i] === "1"; });
                if (oxigen.length === 1)
                    return { value: oxigen[0] };
            }
            else {
                //filter by 0
                oxigen = oxigen.filter(function (el) { return el[i] === "0"; });
                if (oxigen.length === 1)
                    return { value: oxigen[0] };
            }
        };
        for (var i = 0; i < digitsArrays.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    }
    return "";
};
var getCO2 = function (arr) {
    var digitsArrays = splitDigitsToArrays(arr);
    var co2 = arr;
    while (co2.length > 1) {
        var _loop_2 = function (i) {
            var digits = findMostCommonBit(splitDigitsToArrays(co2)[i]);
            if (digits["0"] <= digits["1"]) {
                //filter by 0
                co2 = co2.filter(function (el) { return el[i] === "0"; });
                if (co2.length === 1)
                    return { value: co2[0] };
            }
            else {
                //filter by 1
                co2 = co2.filter(function (el) { return el[i] === "1"; });
                if (co2.length === 1)
                    return { value: co2[0] };
            }
        };
        for (var i = 0; i < digitsArrays.length; i++) {
            var state_2 = _loop_2(i);
            if (typeof state_2 === "object")
                return state_2.value;
        }
    }
    return co2[0];
};
(0, readInputString_1.readLineByLine)("../inputs/day3.txt").then(function (res) {
    return console.log(getDiagnostic(res));
});
(0, readInputString_1.readLineByLine)("../inputs/day3.txt").then(function (res) {
    console.log("oxigen", getOxigen(res));
    console.log("CO2 ", getCO2(res));
    console.log(parseInt(getOxigen(res), 2) * parseInt(getCO2(res), 2));
});
