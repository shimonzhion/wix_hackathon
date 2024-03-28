const mongoose = require("mongoose");
const jobScema = new mongoose.Schema(
  {
    description: { type: String },
    role: { type: String },
    company:{type:String },
    location: { type:String },
    coordinator: { type: mongoose.Types.ObjectId, ref: "Coordinators" },
    apply: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Graduates",
      },
    ]
  },
  { 
    timestamps: true,
  }
);

const JobModel = mongoose.model("Jobs", jobScema);
module.exports = JobModel;
