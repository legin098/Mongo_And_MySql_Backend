const express = require("express");
const { createItem } = require("../controllers/storage");
const uploadMiddleware = require("../utils/handleStorage");
const router = express.Router();

//TODO: http://localhost:3001/api/storage GET, POST, PUT, DELETE

router.post("/", uploadMiddleware.single("myfile"), createItem);

module.exports = router;
