const express = require("express");
const fs = require("fs");

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));

app.post("/write", (req, res) => {
  const { user, data } = req.body;

  console.log(`req.body`, req.body)

  if (user && data) {
    res.send("data OK");
  } else {
    res.status(400).send("User o Data invalidos");
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
