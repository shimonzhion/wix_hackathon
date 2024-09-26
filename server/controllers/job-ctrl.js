const JobModel = require("../models/job-model");
const { validateJob } = require("../validation/job-valid");
const { getAll, getById, deleteOne, create, updateOne } = require("./main");

const getJobs = (req, res) => {
  getAll(req, res, JobModel);
};

const getJobById = (req, res) => {
  getById(req, res, JobModel);
};

const addJob = (req, res) => {
  create(req, res, JobModel, validateJob);
};

const updateJob = (req, res) => {
  updateOne(req, res, JobModel, validateJob);
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