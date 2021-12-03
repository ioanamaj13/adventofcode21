const fs = require("fs");
const readline = require("readline");

//'../inputs/day1.txt'
//reads inputs as array of numbers 

export async function processLineByLine(path: string): Promise<number[]> {
  const input = [];
  const fileStream = fs.createReadStream(path);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    input.push(parseInt(line));
  }
  
  return input;
}