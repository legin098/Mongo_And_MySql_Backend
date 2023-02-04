const express = require("express");
const { getItems, createItem } = require("../controllers/tracks");
const router = express.Router();

//TODO: http://localhost:3001/api/tracks GET, POST, PUT, DELETE

router.get("/", getItems);
router.post("/", createItem);

module.exports = router;
