// HINTS:
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",  async (req, res) => {
  const response = await axios.get("https://secrets-api.appbrewery.com/random")
  const secret = response.data.secret
  const user = response.data.username
  res.render("index.ejs", { secret: secret, user: user});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
