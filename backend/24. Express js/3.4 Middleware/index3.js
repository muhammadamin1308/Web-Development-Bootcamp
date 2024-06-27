import express from "express";

const app = express();
const port = 3000;
// ↓ we made our own middleware
function logger(req, res, next){
  console.log("Method: ", req.method)
  console.log("URL", req.url)
  next()
}
// ^
// ↓ called the logger function
app.use(logger);
// ^
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
