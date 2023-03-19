const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

//hbs
const expressHbs = require("express-handlebars");

app.set("view engine", ".hbs");
// bodyParser.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//
app.engine(
  ".hbs",
  expressHbs.engine({
    extname: "hbs",
    defaultLayout: false,
    layoutsDir: "views/",
  })
);
app.listen(port);
app.get("/", (req, res) => {
  res.render("form");
});
app.post("/", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const operator = req.body.operator;
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }

  res.render("form", { result });
});
