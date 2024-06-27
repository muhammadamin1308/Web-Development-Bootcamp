import express from "express";
import morgan from "morgan" // <<< used for getting data from forms or for 
const app = express();
const port = 3000;

// its usually used a USE method for middlewares
app.use(morgan("tiny"))

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
