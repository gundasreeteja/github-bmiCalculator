const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  //   res.send("This is a calculator");
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height * height);
  res.send("Your BMI score is : " + bmi);
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});
