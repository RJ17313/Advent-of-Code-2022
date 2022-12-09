import fs from "fs";

fs.readFile("../data.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const dataParsed = data.split("\n");
    let currentCol;
    let score = 0;

    for (let i = 0; i < dataParsed.length; i++) {
      currentCol = dataParsed[i].split(" ");
      switch (currentCol[0]) {
        case "A":
          switch (currentCol[1]) {
            case "X":
              score += 4;
              break;
            case "Y":
              score += 8;
              break;
            case "Z":
              score += 3;
              break;
          }
          break;

        case "B":
          switch (currentCol[1]) {
            case "X":
              score += 1;
              break;
            case "Y":
              score += 5;
              break;
            case "Z":
              score += 9;
              break;
          }
          break;

        case "C":
          switch (currentCol[1]) {
            case "X":
              score += 7;
              break;
            case "Y":
              score += 2;
              break;
            case "Z":
              score += 6;
              break;
          }
          break;
      }
    }
    console.log(score);
  }
});
