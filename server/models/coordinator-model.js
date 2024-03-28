const mongoose = require("mongoose");
const coordinatorScema = new mongoose.Schema(
  {
    firstName: { type: String, require: [true, "Please add a first name"] },
    lastName: { type: String, require: [true, "Please add a last name"] },
    email: {
      type: String,
      require: [true, "Please add an email"],
      unigue: true,
    },
    phone: {
      type: String,
      require: [true, "Please add a phone number"],
      unigue: true,
    },
    password: { type: String, require: [true, "Please add a password"] },
    userType:{    type: String, 
      default:'coordinator', 
      immutable: true },
    employeeNumber: { type: String, unique: true , require: [true, "Please add an employee number"] },
    classOf: [{ type: mongoose.Types.ObjectId, ref: "ClassOf", required: true }],
  },

  { timestamps: true }
);

const CoordinatorModel = mongoose.model("Coordinators", coordinatorScema);
module.exports = CoordinatorModel;
