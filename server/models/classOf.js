const mongoose = require("mongoose");

const classOfScema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    Identifier: {
      type: String,
      unique: true   //I fixed
    },
    startDate: { type: Date },
    endDate: { type: Date },
    engagementPercentage: {
      type: Number,
      min: 0,
      max: 100,
    },
    placementPercentages: {
      type: Number,
      min: 0,
      max: 100,
    },
    coordinator: { type: mongoose.Types.ObjectId, ref: "Coordinators" },
    graduates: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Graduates",
      },
    ],
  },
  { timestamps: true }
);

const ClassOfModel = mongoose.model("ClassOf", classOfScema);
module.exports = ClassOfModel;
