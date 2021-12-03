import { readLineByLine } from "../shared/readInputString";

const findMostCommonBit = (arr: string[]): {} => {
  const commons = arr.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});
  return commons;
};

const splitDigitsToArrays = (arr: string[]): string[][] => {
  let calcs = [];
  for (let k = 0; k < arr[0].length; k++) {
    calcs[k] = [];
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      calcs[j][i] = arr[i][j];
    }
  }
  return calcs;
};

const getDiagnostic = (arr: string[]): number => {
  let gamma = "";
  let epsilon = "";
  let values = splitDigitsToArrays(arr);

  for (let l = 0; l < values.length; l++) {
    let digit = findMostCommonBit(values[l]);
    if (digit["0"] > digit["1"]) {
      gamma += "0";
      epsilon += "1";
    } else {
      gamma += "1";
      epsilon += "0";
    }
  }

  return parseInt(gamma, 2) * parseInt(epsilon, 2);
};

const getOxigen = (arr: string[]): string => {
  const digitsArrays = splitDigitsToArrays(arr);
  let oxigen = arr;

  while (oxigen.length > 1) {
    for (let i = 0; i < digitsArrays.length; i++) {
      const digits = findMostCommonBit(splitDigitsToArrays(oxigen)[i]);
      if (digits["0"] <= digits["1"]) {
        //filter by 1
        oxigen = oxigen.filter((el) => el[i] === "1");
        if (oxigen.length === 1) return oxigen[0];
      } else {
        //filter by 0
        oxigen = oxigen.filter((el) => el[i] === "0");
        if (oxigen.length === 1) return oxigen[0];
      }
    }
  }

  return "";
};

const getCO2 = (arr: string[]): string => {
  const digitsArrays = splitDigitsToArrays(arr);
  let co2 = arr;

  while (co2.length > 1) {
    for (let i = 0; i < digitsArrays.length; i++) {
      const digits = findMostCommonBit(splitDigitsToArrays(co2)[i]);
      if (digits["0"] <= digits["1"]) {
        //filter by 0
        co2 = co2.filter((el) => el[i] === "0");
        if (co2.length === 1) return co2[0];
      } else {
        //filter by 1
        co2 = co2.filter((el) => el[i] === "1");
        if (co2.length === 1) return co2[0];
      }
    }
  }

  return co2[0];
};

readLineByLine("../inputs/day3.txt").then((res) =>
  console.log(getDiagnostic(res))
);

readLineByLine("../inputs/day3.txt").then((res) => {
  console.log("oxigen", getOxigen(res));
  console.log("CO2 ", getCO2(res));
  console.log(parseInt(getOxigen(res), 2) * parseInt(getCO2(res), 2))
});
