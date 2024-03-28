const mongoose = require("mongoose");
const classOfScema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    Identifier:{type:String,required:[true, 'Please add an identifier'],unigue:true},

    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },

    engagementPercentage: {
      type: Number,
      // required: true,
      min: 0,
      max: 100,
    },
    placementPercentages: {
      type: Number,
      // required: true,
      min: 0,
      max: 100,
    },

    coordinator: { type: mongoose.Types.ObjectId, ref: "Coordinators" },
    graduates: [
      {
        type: mongoose.Types.ObjectId, ref: "Graduates",
      },
    ],
  },
  { timestamps: true }
);

const ClassOfModel = mongoose.model("ClassOf", classOfScema);
module.exports = ClassOfModel;
