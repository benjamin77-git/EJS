import express from "express";

const app = express();
const port = 3000;
// var newDay = getDay();

// function getDay() {
//   const days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   const today = new Date();
//   var day = prompt("Please select ");
//   for (var i = 0; i < days.length; i++) {
//     if (days[0] === day || days[6] === day) {
//       return "Weekend";
//     } else {
//       return "Weekday";
//     }
//   }
//   return days[today.getDay()];
// }
let per = " ";
let adv = " ";

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();
  if (day === 0 || day === 6) {
    per = "It's a weekend";
    adv = "Have alot of fun.";
  } else {
    per = "It's a weekday";
    adv = "Work hard to make progress.";
  }
  console.log(day);
  res.render("index.ejs", {
    period: per,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
