import fs from "fs";

fs.readFile("../data.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const dataParsed = data.split("\n");
    let calorieTotal = 0;
    let calorieArray = [];
    for (let i = 0; i < dataParsed.length; i++) {
      if (dataParsed[i].length === 0) {
        calorieArray.push(calorieTotal);
        calorieTotal = 0;
      } else {
        calorieTotal += Number(dataParsed[i]);
      }
    }

    calorieArray.push(calorieTotal);
    calorieArray.sort((a, b) => {
      return b - a;
    });

    console.log(
      `Most Calories: ${calorieArray[0]}\nSecond Most Calories: ${
        calorieArray[1]
      }\nThird Most Calories: ${calorieArray[2]}\nAdded Together: ${
        calorieArray[0] + calorieArray[1] + calorieArray[2]
      }`
    );
  }
});
