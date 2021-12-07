import { readFirstLine } from "../shared/readFirstLine";

readFirstLine("../inputs/day7.txt").then((res) => {
    let positions = res.split(",").map((pos) => parseInt(pos));
    let distances = []; 

    console.log(positions); 

    for(let i = 0; i < positions.length; i++){
        let temp = 0; 
        let anchor = positions[i]; 
        for(let j = 0; j < positions.length; j++){
            //p2: 
            const newMoves = (Math.abs(positions[j] - anchor) * (Math.abs(positions[j] - anchor) + 1)) / 2;
            temp += newMoves; 
            //p1: temp += Math.abs(positions[j] - anchor; 
        }
        distances.push(temp); 
    }

    console.log(distances); 
    console.log(Math.min(...distances)); 
  });
  