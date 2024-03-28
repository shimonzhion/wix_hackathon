const ClassOfModel = require("../models/classOf");
const { getAll, getById, deleteOne, create, updateOne } = require("./main");

const getClassesOf = (req, res) => {
  getAll(req, res, ClassOfModel);
};

const getClassOfById = (req, res) => {
  getById(req, res, ClassOfModel);
};
const addClassOf = (req, res) => {
  create(req, res, ClassOfModel);
};
const updateClassOf = (req, res) => {
  updateOne(req, res, ClassOfModel);
};
const deleteClassOf = (req, res) => {
  deleteOne(req, res, ClassOfModel);
};

module.exports = {
  getClassesOf,
  deleteClassOf,
  getClassOfById,
  addClassOf,
  updateClassOf,
};
