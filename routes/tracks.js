const express = require("express");
const router = express.Router();

//TODO: http://localhost:3001/api/tracks GET, POST, PUT, DELETE

router.get("/", (req, res) => {
  const data = ["Hello", "world"];

  res.send({ data });
});

module.exports = router;
