import { readLineByLine } from "../shared/readInputString";

interface Point {
  x: number;
  y: number;
}

interface Segment {
  start: Point;
  end: Point;
}

const findWidth = (seg: Segment[]): number => {
  const maxStart = Math.max.apply(
    Math,
    seg.map((point) => point.start.x)
  );
  const maxEnd = Math.max.apply(
    Math,
    seg.map((point) => point.end.x)
  );
  return Math.max(maxStart, maxEnd);
};

const findDepth = (seg: Segment[]): number => {
  const maxStart = Math.max.apply(
    Math,
    seg.map((point) => point.start.y)
  );
  const maxEnd = Math.max.apply(
    Math,
    seg.map((point) => point.end.y)
  );
  return Math.max(maxStart, maxEnd);
};

readLineByLine("../inputs/day5.txt").then((res) => {
  console.log(res);

  const segments: Segment[] = [];

  res.forEach((item) => {
    segments.push({
      start: {
        x: parseInt(item.split("->")[0].split(",")[0]),
        y: parseInt(item.split("->")[0].split(",")[1]),
      },
      end: {
        x: parseInt(item.split("->")[1].split(",")[0]),
        y: parseInt(item.split("->")[1].split(",")[1]),
      },
    });
  });

  let grid = Array.from(
    Array(Math.max(findWidth(segments), findDepth(segments)) + 1),
    () => new Array(Math.max(findWidth(segments), findDepth(segments)) + 1)
  );

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      grid[i][j] = 0;
    }
  }

  const drawLine = (seg: Segment) => {
    //vertical
    if (seg.start.x === seg.end.x) {
      for (
        let i = Math.min(seg.start.y, seg.end.y);
        i <= Math.max(seg.start.y, seg.end.y);
        i++
      ) {
        grid[i][seg.start.x] += 1;
      }
    } else if (seg.start.y === seg.end.y) {
      //horisontal
      for (
        let i = Math.min(seg.start.x, seg.end.x);
        i <= Math.max(seg.start.x, seg.end.x);
        i++
      ) {
        grid[seg.start.y][i] += 1;
      }
    }
  };

  const swapCoords = (seg: Segment): Segment => {
      const swap = seg; 
      let aux = seg.end; 
      if(seg.start.x > seg.end.x){
          swap.end = seg.start; 
          swap.start = aux; 
      }
    return swap;
  };

  const drawDiagonal = (seg: Segment) => {
    if (
      Math.abs(seg.start.x - seg.end.x) === Math.abs(seg.end.y - seg.start.y)
    ) {
      console.log("diagonal", seg);
      if(seg.start.x > seg.end.x) seg = swapCoords(seg); 
      console.log('swapped', seg);


      let i = seg.start.x;
      let j: number;

      if (seg.end.y > seg.start.y) {
        j = seg.start.y;
        while (
          i <= seg.end.x &&
          j <= seg.end.y
        ) {
          grid[j][i] += 1;
          i++;
          j++;
        }
      } else {
        j = seg.start.y;
        while (
          i <= seg.end.x &&
          j >= seg.end.y
        ) {

        //console.log('i,j', i, j);
          grid[j][i] += 1;
          i++;
          j--;
        }
      }
    }
  };

  segments.forEach((segment) => {
    drawLine(segment);
    drawDiagonal(segment);
  });

  //grid.forEach((line) => console.log(line.toString().replace(/,/g, " ")));

  let safeSpots = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] > 1) safeSpots++;
    }
  }

  console.log("safeSpots", safeSpots);
});
