const customError = require('../error/custom-error');
const jwt = require('jsonwebtoken');
const {
    notAuthorizedError
} = require("../error");



const authenticationMiddleware = async (req, res, next) => {

    const authHeader = req.headers.authorization;

    // check for header
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new notAuthorizedError("No token providied")
    }
    const token = authHeader.split(" ")[1];

    // token check
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {
            id,
            username
        } = decoded;
        //! we  add the user property to request and acces it in our conntroler
        req.user = {
            id,
            username
        }

        next()
    } catch (error) {
        throw new notAuthorizedError("Not authorized to access this route")
    }




}

module.exports = authenticationMiddleware;