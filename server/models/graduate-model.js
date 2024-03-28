const mongoose = require("mongoose");
const graduateScema = new mongoose.Schema(
  {
     firstName: String,
    lastName: String,
    email: String,
    phone: String,
    password: String,
    birthdate: Date,
    address: {city: String ,street: String ,district: String,},
    isActive: Boolean,
    service: String,
    CV: String,
    image: String,
    employmentStatus: {type: String, enum: ["Job seeker","Employed","Retired","Student","Unemployed","Other",],default: "Job seeker",},
    isEmployed: Boolean,
    classOf: {type: mongoose.Types.ObjectId,ref: "ClassOf",},
  },
  { timestamps: true }
);



const GraduateModel = mongoose.model("Graduates", graduateScema);
module.exports =  GraduateModel ;




















// const graduateScema = new mongoose.Schema(
//   {
//     firstName: { type: String, required: [true, 'Please add a first name'] },
//     lastName: { type: String, required: [true, 'Please add a last name'] },
//     email: { type:String,  required: [true, 'Please add an email'] , unique:true},
//     phone: { type: String, required: [true, 'Please add a phone number'], unique:true},
//     password: { type: String, required: [true, 'Please add a password'] },
//     userType:{    type: String,
//       default: 'graduate',
//       immutable: true },
//     adress:{
//       city: { type: String, required: [true, 'Please add an city'] },
//       street: { type: String, required: [true, 'Please add a street'] },
//       district: { type: String, required: [true, 'Please add a district'] }
//          },

//     birthdate: { type: Date, required: [true, 'Please add a date of birth'] },
//     isActive: { type: Boolean },
//     service: {type:String},
//     CV:{type:String},
//     image: { type: String },

//     employmentStatus: {
//       type: String,
//       enum: ['Job seeker', 'Employed', 'Retired', 'Student', 'Unemployed', 'Other'],
//       default: 'Job seeker'
//   },
//   isEmployed: {
//     type: Boolean,
//     default: false
// },

//     classOf: { type:mongoose.Types.ObjectId, ref:'ClassOf',required: [true, 'Please add a class of'] },
//   },
//   { timestamps: true,
//    }
// );
