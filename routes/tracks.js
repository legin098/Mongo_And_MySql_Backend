const express = require("express");
const {
  getItems,
  createItem,
  getItem,
  updateItem,
  deleteItem,
} = require("../controllers/tracks");
const {
  validatorCreateItem,
  validatorGetItem,
} = require("../validators/tracks");
const router = express.Router();

//TODO: http://localhost:3001/api/tracks GET, POST, PUT, DELETE

/**
 * List items
 */
router.get("/", getItems);

/**
 * Get item detail
 */
router.get("/:id", validatorGetItem, getItem);

/**
 * Create items
 */
router.post("/", validatorCreateItem, createItem);

/**
 * Update item
 */
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);

/**
 * Update item
 */
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;
