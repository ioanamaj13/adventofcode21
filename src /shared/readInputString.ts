const fs = require("fs");
const readline = require("readline");

//reads inputs as array of string 

export async function readLineByLine(path: string): Promise<string[]> {
  const input = [];
  const fileStream = fs.createReadStream(path);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    input.push(line);
  }
  
  return input;
}