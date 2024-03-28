const JobModel = require("../models/job-model");
const { getAll, getById, deleteOne, create, updateOne } = require("./main");



const getJobs = (req, res) => {
  getAll(req, res, JobModel);
};

const getJobById = (req, res) => {
  getById(req, res, JobModel);
};

const addJob = (req, res) => {
  create(req, res, JobModel);
};

const updateJob = (req, res) => {
  updateOne(req, res, JobModel);
};

const deleteJob = (req, res) => {
  deleteOne(req, res, JobModel);
};

module.exports = {
    getJobs,
    deleteJob,
    getJobById,
    addJob,
    updateJob,
};