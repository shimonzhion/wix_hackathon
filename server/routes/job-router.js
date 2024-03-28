const jobRouter = require("express").Router();
const {getJobs, deleteJob, getJobById, addJob, updateJob} = require("../controllers/job-ctrl");

jobRouter.get('/', getJobs);
jobRouter.get('/byId/:id', getJobById);
jobRouter.post('/add', addJob);
jobRouter.put('/update/:id', updateJob);
jobRouter.delete('/delete/:id', deleteJob);

module.exports = jobRouter;