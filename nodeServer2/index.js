const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
/*
  View/ Template engine (EJS): 
    - Use same template for creating dynamic pages (Dynamic pages)
  Request parameters: 
    - Variable inside route (Dynamic routes)
*/

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Use to set envirnmeent between ejs and express.
app.set("view engine", "ejs");

const USERS = [
  {
    username: "lokesh",
    firstName: "Lokesh",
    lastName: "Patidar",
    email: "lokeeshpati84@gmail.com",
    isPremium: true,
  },
  {
    username: "moin",
    firstName: "Moin",
    lastName: "Ali",
    email: "Moin84@gmail.com",
    isPremium: false,
  },
];

app.get("/", (req, res) => {
  res.send("Its working");
});

app.get("/notfound", (req, res) => {
  res.render("notFound");
});

app.get("/:username", (req, res) => {
  const { username } = req.params;
  const userdetails = USERS.find((user) => user.username === username);
  if (userdetails) res.render("users", userdetails);
  else res.redirect("/notfound");
});

app.listen(3000, () => {
  console.log("Server is working on port 3000");
});
