const mongoose = require("mongoose");
const postScema = new mongoose.Schema(
  {
    publisher: { type: mongoose.Types.ObjectId, ref: "Coordinators" },
    content: { type: String },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("Posts", postScema);
module.exports = PostModel;