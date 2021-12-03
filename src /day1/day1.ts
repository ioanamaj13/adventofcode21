import { readLineByLine } from "../shared/readInputString";

//https://adventofcode.com/2021/day/1
const solution = (arr: string[]): number => {
  let increased = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (parseInt(arr[i]) < parseInt(arr[i + 1])) increased++;
  }
  return increased;
};

const solution2 = (arr: string[]): number => {
    let increased = 0;
    for (let i = 0; i < arr.length - 3; i++) {
      if (parseInt(arr[i]) + parseInt(arr[i + 1]) + parseInt(arr[i + 2]) < parseInt(arr[i + 1]) + parseInt(arr[i + 2]) + parseInt(arr[i + 3])) increased++;
    }
    return increased;
}

readLineByLine('../inputs/day1.txt').then(res => console.log(solution(res))); 
readLineByLine('../inputs/day1.txt').then(res => console.log(solution2(res))); 
