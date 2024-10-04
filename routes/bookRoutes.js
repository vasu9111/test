const express = require("express");
const { v4: uuidv4 } = require("uuid"); // uuid
const {
  generateBooks,
  generateRandomPrice,
} = require("../utils/bookGenerator");
const router = express.Router();

// Generate initial 50 books
let posts = generateBooks(50);

//get all data
router.get("/books", (req, res) => {
  res.json(posts);
});

module.exports = router;
