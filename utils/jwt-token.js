const jwt = require("jsonwebtoken");
const generateToken = (user) => {
    return jwt.sign({username :username , _id:user._id}, process.env.SECRET_KEY)
};

module.exports = generateToken