const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

const User = mongoose.model("Book", {
  name: String,
  author: String,
  price: Number,
});

app.get("/", (req, res) => {
  res.json({ massage: "server is working" });
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.json({
      status: "SUCCESS",
      data: users,
    });
  } catch (error) {
    res.json({
      status: "FAILED",
      message: "Something went wrong",
    });
  }
});

app.post("/users", async (req, res) => {
  try {
    // console.log(req.body)
    const {name, author, price} = req.body;
    await User.create({name, author, price});
    res.json({
      status: "success",
      massage : "User create succussfully"
    });
  } catch (error) {
    res.json({
      status: "failed",
      massage: "something went wrong",
    });
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    // console.log(req.body)
    const {id} = req.params;
    const {name, author, price} = req.body;
    await User.findByIdAndUpdate(id, {name, author, price});
    res.json({
      status: "success",
      massage : "User updated succussfully"
    });
  } catch (error) {
    res.json({
      status: "failed",
      massage: "something went wrong",
    });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    // console.log(req.body)
    const {id} = req.params;
    const {name, author, price} = req.body;
    await User.findByIdAndDelete(id, {name, author, price});
    res.json({
      status: "success",
      massage : "User updated succussfully"
    });
  } catch (error) {
    res.json({
      status: "failed",
      massage: "something went wrong",
    });
  }
});

app.listen(3000, () => {
  mongoose
    .connect(
      "mongodb+srv://admin:admin123@cluster0.vnx1q30.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("Server is runing on port 3000"))
    .catch((error) => console.log(error));
});
