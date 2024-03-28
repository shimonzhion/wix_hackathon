const mongoose = require("mongoose");
const eventScema = new mongoose.Schema(
  {
    publisher: { type: mongoose.Types.ObjectId, ref: "Coordinators" , required: [true, 'Please add a publisher'] },
    name: { type: String, require: [true, 'Please add a name to the event'] },
    about: { type: String, require: [true, 'Please add details about the event'] },
    location: { type:String,  require: [true, 'Please add a location'] },
    data: { type: Date, require: [true, 'Please add a date of event'] },
    invited: [{ type: mongoose.Types.ObjectId, ref: "ClassOf" }],
    RSVPs:{type:String,enum: ['Yes','No'],default:'No'},
    image: { type: String },
  },
  { timestamps: true,
   }
);

const EventModel = mongoose.model("Events", eventScema);
module.exports = EventModel;