require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const wrap = require("express-async-wrap");

const mongoose = require("mongoose");
const Quotes = require("./quotes");

const db = mongoose.connection;
db.on("error", console.error);
db.once("open", () => {
  console.log("connect to mongoDB Server");
});
mongoose.connect(process.env.MONGO_URL);

const searchQuotes = async (req, res) => {
  const searchTerm = req.params.searchTerm;
  const { limit, skip } = req.query;
  const query = [
    { title: new RegExp(searchTerm) },
    { quote: new RegExp(searchTerm) },
  ];
  await Quotes.find({ $or: query }, (err, quote) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (!quote) {
      return res.status(404).json({ error: "quote not found" });
    }
    res.json(quote);
  })
    .skip(Number(skip))
    .limit(Number(limit));
};

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "build")));
app.get("/api/quotes/:searchTerm", wrap(searchQuotes));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(9000);

console.log(`server start on http://localhost:9000`);
