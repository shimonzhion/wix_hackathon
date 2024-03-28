const mongoose = require("mongoose");
const postScema = new mongoose.Schema(
  {
    publisher: { type: mongoose.Types.ObjectId, ref: "Coordinators" , required: [true, 'Please add a publisher'] },
    content: { type: String, require: [true, 'Please add content'] },
    image: { type: String ,required: [true, 'Please add an image'] },

  },
  { timestamps: true,

   }
);

const PostModel = mongoose.model("Posts", postScema);
module.exports = PostModel;