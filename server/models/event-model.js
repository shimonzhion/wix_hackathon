const mongoose = require("mongoose");
const eventScema = new mongoose.Schema(
  {
    publisher: { type: mongoose.Types.ObjectId, ref: "Coordinators" },
    name: { type: String },
    about: { type: String },
    location: { type:String },
    date: { type: Date },//I fixed from data to date
    invited: [{ type: mongoose.Types.ObjectId, ref: "ClassOf" }],
    RSVPs:{type:String,enum: ['Yes','No', 'Maybe'],default:'No'},
    image: { type: String },
  },
  { 
    timestamps: true,
  }
);

const EventModel = mongoose.model("Events", eventScema);
module.exports = EventModel;