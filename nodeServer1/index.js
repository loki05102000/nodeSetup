const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const USERS = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
  },
];

app.get("/", (req, res) => {
  res.send("Its Working now");
});

app.get("/users", (req, res) => {
  res.json(USERS);
});

app.get("/register", (req, res) => {
  // Use to display a HTML file in different route.
  res.sendFile(__dirname + "/register.html");
});

// This post method use for a form page both action and route are same also we use bodyParser package to get middle where data of a form page.
// req.body is use to get data of input value.
app.post("/api/register", (req, res) => {
  res.send(req.body.firstName + " " + req.body.lastName);
});

app.listen(3000, () => {
  console.log("Server runing succesfully on LocalHost 3000");
});
