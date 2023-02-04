const { tracksModel } = require("../models");

/**
 * Get list from database!
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  const data = await tracksModel.find({})

  res.send({ data });
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
  const {body} = req
  console.log(body)

  const data = await tracksModel.create(body)
  res.send({data}) 
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
