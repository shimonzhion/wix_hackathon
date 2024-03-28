const mongoose = require("mongoose");
const jobScema = new mongoose.Schema(
  {
    description: { type: String, require: [true, 'Please add a description'] },
    role: { type: String, require: [true, 'Please add a role'] },
    company:{type:String, require: [true, 'Please add a company'] },
    location: { type:String,  require: [true, 'Please add a location'] },
    coordinator: { type: mongoose.Types.ObjectId, ref: "Coordinators" },
    apply: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Graduates",
      },
    ]
  },
  { timestamps: true,

   }
);

const JobModel = mongoose.model("Jobs", jobScema);
module.exports = JobModel;
