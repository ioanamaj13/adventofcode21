import { readLineByLine } from "../shared/readInputString";
//read input

interface BingoNumber {
  number: number;
  found: boolean;
}

let numbers: number[] = [];
let tickets: any[][] = [];

const checkNumber = (tickets: any[], bingoNumber: any) => {
  tickets.forEach((ticket) => {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (ticket[i][j].number === bingoNumber) {
          ticket[i][j].found = true;
        }
      }
    }
  });
};

const checkLines = (
  tickets: any[]
): {
  fullLine: boolean;
  lineSum: number;
  ticketNumbers: BingoNumber[];
  ticketIndex: number;
} => {
  let fullLine = false;
  let lineSum = 0;
  let ticketNumbers = [];
  let ti = 0;
  for (let t = 0; t < tickets.length; t++) {
    for (let i = 0; i < 5; i++) {
      //lines
      if (
        tickets[t][i][0].found &&
        tickets[t][i][1].found &&
        tickets[t][i][2].found &&
        tickets[t][i][3].found &&
        tickets[t][i][4].found
      ) {
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
      } else {
        //colums
        if (
          tickets[t][0][i].found &&
          tickets[t][1][i].found &&
          tickets[t][2][i].found &&
          tickets[t][3][i].found &&
          tickets[t][4][i].found
        ) {
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
    ticketIndex: ti,
  };
};

const getWinningTicket = (): { index: number; bingoNumberValue: number } => {
  for (let i = 0; i < numbers.length; i++) {
    checkNumber(tickets, numbers[i]);
    if (checkLines(tickets).fullLine) {
      let val = checkLines(tickets);
      console.log("val", val);
      numbers.splice(numbers[i], 1); 
      return { index: val.ticketIndex, bingoNumberValue: numbers[i] };
    }
  }
};

const getFalseSum = (ticket: any[]): number => {
  let falseSum = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (!ticket[i][j].found) falseSum += ticket[i][j].number;
    }
  }
  return falseSum;
};

const rawInput = readLineByLine("../inputs/day4.txt").then((res) => {
  //read numbers input
  numbers = res[0].split(",").map((el) => parseInt(el));

  let index: number = 2;
  let ticketsNo: number = 0;

  //build array of "tickets"
  while (index < res.length) {
    let tempTicket = [];
    for (let i = 0; i < 5; i++) {
      const row = res[index + i]
        .split(" ")
        .filter((el) => el.length > 0)
        .map((el) => {
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

  console.log(
    "lastScore ",
    getFalseSum(tickets[0]) * getWinningTicket().bingoNumberValue
  );
  
});
