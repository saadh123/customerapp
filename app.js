let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

let app = express();

// let logger = function (req, res, next) {
//   console.log("Logging...");
//   next();
// };

// app.use(logger);

//View Engine

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//BODYPARSER MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Set static path

app.use(express.static(path.join(__dirname, "public")));

// let people = [
//   { name: "Jeff", age: 30 },
//   { name: "Sam", age: 30 },
//   { name: "Bill", age: 46 },
// ];

// app.get("/", (req, res) => {
//   res.json(people);
// });

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("Server started on Port 3000...");
});
