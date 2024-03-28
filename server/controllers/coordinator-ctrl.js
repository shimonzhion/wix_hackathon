const CoordinatorModel = require("../models/coordinator-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { getAll, deleteOne,updateOne } = require("./main");
const { validateCordiantor } = require('../validation/coordinator-valid');

const getCoordinators = async (req, res) => {
  getAll(req, res, CoordinatorModel);
};

const getCoordinatorById = async (req, res) => {
  await CoordinatorModel.findById(req.params.id,).populate("classOf").then(result => {
    return !result? res.status(404).json({ message: "Coordinator not found" }): res.status(200).json({success:true, result})}).catch(err => {
      res.status(400).json({ success: false, err});
    });
  }
   const updateCoordinator = async (req, res) => {
    updateOne(req, res, CoordinatorModel);
  
  }
  const deleteCoordinator = async (req, res) => {
    deleteOne(req, res, CoordinatorModel);
  }
//Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
const register = async (req, res) => {
  const {firstName,lastName,email,password,phone,classOf,employeeNumber ,userType} = req.body;
  const { error } = validateCordiantor(req.body);
  if (error) {
      return res.status(400).json({ message: error.details[0].message , success:false });
  } 
  try {

    //Check if coordinator exists
    const coordinatorExists = await CoordinatorModel.findOne({ email });
    if (coordinatorExists) {
      res.status(400).json({ message: "Coordinator already exists" });
      return;
    }
    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //Create a new coordinator
    const coordinator = await CoordinatorModel.create({firstName,lastName,email,password: hashPassword,classOf,phone,employeeNumber,userType});
    if (coordinator) {
      const token = generateToken(coordinator._id)
      res.cookie('token', token, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 });
      res.status(200).json({
        success: true,
        result:{  _id: coordinator.id,
        firstName: coordinator.firstName,
        lastName: coordinator.lastName,
        phone: coordinator.phone,
        classOf: coordinator.classOf,
        employeeNumber: coordinator.employeeNumber,
        email: coordinator.email,
        userType: coordinator.userType,
        token: token}
      });
    } else {
      res.status(400).json({ message: "Coordinator could not be created" });
    }
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const coordinator = await CoordinatorModel.findOne({ email });
    if (coordinator && (await bcrypt.compare(password, coordinator.password))) {
      const token = generateToken(coordinator._id);
      res.cookie('token', token, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 });
      return res.status(200).json({
        success: true,
       result: {_id: coordinator._id,
        firstName: coordinator.firstName,
        lastName: coordinator.lastName,
        email: coordinator.email,
        userType: coordinator.userType,
        token:token}
      });
    } else {
      return res.status(400).json({ success:false, message: "Invalid credentials" });
    }
  } catch (error) {
    return res.status(400).json({success: false, error});
  }
};



module.exports = {
  register,
  login,
  getCoordinators,
  deleteCoordinator,
  getCoordinatorById,
  updateCoordinator
  
};
