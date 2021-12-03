import { readLineByLine } from "../shared/readInputString";

const getFinalPosition = (arr: string[]): number => {
  let depth = 0;
  let position = 0;
  let value = 0;
  for (let i = 0; i < arr.length; i++) {
    value = parseInt(arr[i].match(/\d/)[0]);
    const direction = arr[i].split(" ")[0];
    switch (direction) {
      case "forward":
        position += value;
        break;
      case "up":
        depth -= value;
        break;
      case "down":
        depth += value;
        break;
    }
    console.log(value, direction);
  }
  return depth * position;
};

const getFinalPosition2 = (arr: string[]): number => {
  let depth = 0;
  let position = 0;
  let value = 0;
  let aim = 0;
  for (let i = 0; i < arr.length; i++) {
    value = parseInt(arr[i].match(/\d/)[0]);
    const direction = arr[i].split(" ")[0];
    switch (direction) {
      case "forward":
        position += value;
        depth += (value * aim); 
        break;
      case "up":
        aim -= value;
        break;
      case "down":
        aim += value;
        break;
    }
  }
  return depth * position;
};

readLineByLine("../inputs/day2.txt").then((res) =>
  console.log(getFinalPosition(res))
);
readLineByLine("../inputs/day2.txt").then((res) =>
  console.log(getFinalPosition2(res))
);
