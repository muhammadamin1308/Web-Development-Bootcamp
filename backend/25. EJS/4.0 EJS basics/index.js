import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date()
    const day = today.getDay()

    let time = "Week day!"
    let advice = "It's time to code."

    if(day === 0 || day === 6){
        time = "Weekend"
        advice = " Let's have some time off."
    }
    res.render("index.ejs", {
        dayTime: time, 
        advice: advice,
    });
  });

// app.post("/submit", (req, res) => {
//   res.render("index.ejs", { name: req.body["name"] });
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

