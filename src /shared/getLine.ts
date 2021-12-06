const fs = require('fs'); 

export function getInput(fileName: string): string {
  return fs.readFileSync(`../inputs/${fileName}.txt`, 'utf8').replace(/\r/g, '');
}

export function getLine(fileName: string, separator = '\n'): string[] {
  return getInput(fileName).split(separator);
}
