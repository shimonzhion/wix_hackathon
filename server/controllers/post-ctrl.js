const PostModel = require("../models/post-model");
const { validatePost } = require("../validation/post-valid");
const { getAll, getById, deleteOne, create, updateOne } = require("./main");

const getPosts = (req, res) => {
  getAll(req, res, PostModel);
};

const getPostById = (req, res) => {
  getById(req, res, PostModel);
};

const addPost = (req, res) => {
  create(req, res, PostModel, validatePost);
};

const updatePost = (req, res) => {
  updateOne(req, res, PostModel, validatePost);
};

const deletePost = (req, res) => {
  deleteOne(req, res, PostModel);
};

module.exports = {
  getPosts,
  deletePost,
  getPostById,
  addPost,
  updatePost,
};
