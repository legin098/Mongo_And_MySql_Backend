const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

/**
 * Get list from database!
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "Error get items");
  }
};

/**
 * Get a detail
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {};

/**
 * Insert a record
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "Error create items");
  }
};

/**
 * Update a record
 * @param {*} req
 * @param {*} res
 */
const updateItem = (req, res) => {};

/**
 * Delete a record
 * @param {*} req
 * @param {*} res
 */
const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
