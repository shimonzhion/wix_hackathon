const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET;
const cookieParser = require('cookie-parser');
const CoordinatorModel = require("../models/coordinator-model");


const authToken = (req, res, next) => {
  //get token
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    // add to request
    req.userId = decoded.id;
    next();
  });
};




const getCoordinatorById = async (id) => {
    const coordinator = await CoordinatorModel.findById(id);
    return coordinator;
}

const checkUserType =  async (req, res, next) => {
    cookieParser() (req, res, async () => { 
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }
        jwt.verify(token, SECRET_KEY, async (err, decoded) => { 
            if (err) {
                return res.status(401).json({ message: "Unauthorized: Invalid token" });
            }
            try {
                const user = await getCoordinatorById({_id: decoded.id});
                if (user && user.userType === 'coordinator') {
                    next();
                } else {
                    return res.status(403).json({ message: "Forbidden: Access denied" });
                }
            } catch (error) {
                console.error("Error retrieving coordinator:", error);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
    });
};




module.exports = { authToken, checkUserType };
