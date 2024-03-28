const GraduateModel = require("../models/graduate-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { getAll, getById, deleteOne, updateOne, create } = require("./main");
const { validateGraduate } = require('../validation/graduate-valid');

//Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
  };

  const graduateRegister = async (req, res) => {
      const { firstName, lastName, email, password, birthdate, service, CV, image, address, phone, classOf, userType } = req.body;
  
      // ביצוע וידוא של הנתונים באמצעות Joi
      const { error } = validateGraduate(req.body);
      if (error) {
          return res.status(400).json({ message: error.details[0].message });
      }  
      try {
          // בדיקת קיום הגרסה במסד הנתונים
          const graduateExists = await GraduateModel.findOne({ email });
          if (graduateExists) {
              return res.status(400).json({ message: "Graduate already exists" });
          }
  
          //Hash the password
          const salt = await bcrypt.genSalt(10);
          const hashPassword = await bcrypt.hash(password, salt);
  
          //Create a new graduate
          const graduate = await GraduateModel.create({ firstName, lastName, email, password: hashPassword, classOf, phone, CV, image, address, birthdate, service, userType });
          if (graduate) {
              const token = generateToken(graduate._id);
              res.cookie('token', token, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 });
              return res.status(200).json({
                  success: true,
                  result: {
                      _id: graduate.id,
                      firstName: graduate.firstName,
                      lastName: graduate.lastName,
                      email: graduate.email,
                      CV: graduate.CV,
                      image: graduate.image,
                      address: graduate.address,
                      phone: graduate.phone,
                      birthdate: graduate.birthdate,
                      employmentStatus: graduate.employmentStatus,
                      isEmployed: graduate.isEmployed,
                      classOf: graduate.classOf,
                      service: graduate.service,
                      userType: graduate.userType,
                      token: token
                  }
              });
          } else {
              return res.status(400).json({ message: "Graduate could not be created" });
          }
      } catch (error) {
          console.error("Error in registration:", error);
          return res.status(500).json({ message: "Internal server error: " + error.message });
      }
  };
  


















  
  const graduateLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
      const graduate = await GraduateModel.findOne({ email });
      if (graduate && (await bcrypt.compare(password, graduate.password))) {
        const token = generateToken(graduate._id);
        res.cookie('token', token, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 });
        return res.status(200).json({
          success: true,
         result: {_id: graduate._id,
          firstName: graduate.firstName,
          lastName: graduate.lastName,
          email: graduate.email,
          token: token}
        });
      } else {
        return res.status(400).json({ success:false, message: "Invalid Graduate" });
      }
    } catch (error) {
      return res.status(400).json({success: false, error});
    }
  };

const getGraduates = (req, res) => {
  getAll(req, res, GraduateModel);
};
const getGraduatesById = (req, res) => {
    getById(req, res, GraduateModel);
}

const updateGraduate = (req, res) => {
    updateOne(req, res, GraduateModel);
}
const deleteGraduate = (req, res) => {
    deleteOne(req, res, GraduateModel);
}

module.exports = {getGraduates, getGraduatesById, updateGraduate, deleteGraduate, graduateRegister, graduateLogin,};
