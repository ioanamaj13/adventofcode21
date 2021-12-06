import { readFirstLine } from "../shared/readFirstLine";

const addFishies = (arr: number[], number: number): number[] => {
  for (let i = 0; i < number; i++) {
    arr.push(8);
  }
  return arr;
};

// 4294967296 - max
// 26984457539 - expected length to cover?
// 9007199254740991 - maxint

const countThemFish = (arr: number[], days: number): number => {
  for (let day = 0; day < days; day++) {
    let newFish = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        arr[i]--;
      } else if (arr[i] === 0) {
        arr[i] = 6;
        newFish++;
      }
    }
    addFishies(arr, newFish);
    //console.log(arr.toString());
  }

  return arr.length;
};

const eachFishProgression = (fish: number, days: number): number => {
  let fishProgression = [fish];

  countThemFish(fishProgression, days);

  return fishProgression.length;
};

const allFish = (arr: number[], days: number): number => {
  let allFishies = 0;

  arr.forEach((fish) => {
    console.log(eachFishProgression(fish, days)); 
    allFishies += eachFishProgression(fish, days);
  });

  console.log(allFishies); 
  return allFishies;
};

readFirstLine("../inputs/day6_0.txt").then((res) => {
  let fishies = res.split(",").map((fish) => parseInt(fish));

  console.log(countThemFish(fishies, 18));
  //   console.log(countThemFish(fishies, 80));
  //console.log(countThemFish(fishies, 256));  //- Fail FATAL ERROR: invalid array length Allocation failed - JavaScript heap out of memory

  //console.log(allFish(fishies, 80));

//   let dailyFish = countThemFish([0],256);
//   console.log('dailyFish', dailyFish); 

console.log(allFish(fishies, 18)); 
});
