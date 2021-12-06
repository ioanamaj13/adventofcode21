"use strict";
exports.__esModule = true;
var readInputString_1 = require("../shared/readInputString");
var numbers = [];
var tickets = [];
var checkNumber = function (tickets, bingoNumber) {
    tickets.forEach(function (ticket) {
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 5; j++) {
                if (ticket[i][j].number === bingoNumber) {
                    ticket[i][j].found = true;
                }
            }
        }
    });
};
var checkLines = function (tickets) {
    var fullLine = false;
    var lineSum = 0;
    var ticketNumbers = [];
    var ti = 0;
    for (var t = 0; t < tickets.length; t++) {
        for (var i = 0; i < 5; i++) {
            //lines
            if (tickets[t][i][0].found &&
                tickets[t][i][1].found &&
                tickets[t][i][2].found &&
                tickets[t][i][3].found &&
                tickets[t][i][4].found) {
                ticketNumbers = [
                    tickets[t][i][0],
                    tickets[t][i][1],
                    tickets[t][i][2],
                    tickets[t][i][3],
                    tickets[t][i][4],
                ];
                fullLine =
                    tickets[t][i][0].found &&
                        tickets[t][i][1].found &&
                        tickets[t][i][2].found &&
                        tickets[t][i][3].found &&
                        tickets[t][i][4].found;
                lineSum =
                    tickets[t][i][0].number +
                        tickets[t][i][1].number +
                        tickets[t][i][2].number +
                        tickets[t][i][3].number +
                        tickets[t][i][4].number;
                ti = t;
            }
            else {
                //colums
                if (tickets[t][0][i].found &&
                    tickets[t][1][i].found &&
                    tickets[t][2][i].found &&
                    tickets[t][3][i].found &&
                    tickets[t][4][i].found) {
                    ticketNumbers = [
                        tickets[t][0][i],
                        tickets[t][1][i],
                        tickets[t][2][i],
                        tickets[t][3][i],
                        tickets[t][4][i],
                    ];
                    fullLine =
                        tickets[t][0][i].found &&
                            tickets[t][1][i].found &&
                            tickets[t][2][i].found &&
                            tickets[t][3][i].found &&
                            tickets[t][4][i].found;
                    lineSum =
                        tickets[t][0][i].number +
                            tickets[t][1][i].number +
                            tickets[t][2][i].number +
                            tickets[t][3][i].number +
                            tickets[t][4][i].number;
                    ti = t;
                }
            }
        }
    }
    return {
        fullLine: fullLine,
        lineSum: lineSum,
        ticketNumbers: ticketNumbers,
        ticketIndex: ti
    };
};
var getWinningTicket = function () {
    for (var i = 0; i < numbers.length; i++) {
        checkNumber(tickets, numbers[i]);
        if (checkLines(tickets).fullLine) {
            var val = checkLines(tickets);
            console.log("val", val);
            numbers.splice(numbers[i], 1);
            return { index: val.ticketIndex, bingoNumberValue: numbers[i] };
        }
    }
};
var getFalseSum = function (ticket) {
    var falseSum = 0;
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            if (!ticket[i][j].found)
                falseSum += ticket[i][j].number;
        }
    }
    return falseSum;
};
var rawInput = (0, readInputString_1.readLineByLine)("../inputs/day4.txt").then(function (res) {
    //read numbers input
    numbers = res[0].split(",").map(function (el) { return parseInt(el); });
    var index = 2;
    var ticketsNo = 0;
    //build array of "tickets"
    while (index < res.length) {
        var tempTicket = [];
        for (var i = 0; i < 5; i++) {
            var row = res[index + i]
                .split(" ")
                .filter(function (el) { return el.length > 0; })
                .map(function (el) {
                return { number: parseInt(el), found: false };
            });
            tempTicket.push(row);
        }
        tickets[ticketsNo] = tempTicket;
        index += 6;
        ticketsNo++;
    }
    getFalseSum(tickets[getWinningTicket().index]);
    while (tickets.length > 1) {
        console.log(getWinningTicket());
        tickets.splice(getWinningTicket().index, 1);
        console.log(tickets.length);
        console.log(tickets[tickets.length - 1]);
    }
    console.log("falseSumLast", getFalseSum(tickets[0]));
    console.log("lastNumber", getWinningTicket().bingoNumberValue);
    console.log("lastScore ", getFalseSum(tickets[0]) * getWinningTicket().bingoNumberValue);
});
