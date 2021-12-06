const fs = require('fs'); 
const readline = require('readline');

export async function getLine(path: string, lineNo: number): Promise<string[]> {
    const input = [];
    const fileStream = fs.createReadStream(path);

    console.log(fileStream); 
  
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
  
    for await (const line of rl) {
      input.push(line);
    }
    
    return input;
  }

getLine('../inputs/day4.txt', 0).then(res => console.log(res)); 
