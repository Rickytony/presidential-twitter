const express = require("express");
const twitter = require("./api/twitter");

const app = express();
app.use(express.static("public"));

app.get("/twitter/:searchQuery", (req, res) => {
  twitter.searchTweets(req.params.searchQuery).then(
    tweets => {
      res.json(tweets);
    },
    error => {
      res.status(400).json(error);
    }
  );
});

const server = app.listen(3000, () => {
  console.log("server started");
});
