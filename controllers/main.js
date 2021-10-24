const {
    badRequest
} = require('../error');

const jwt = require('jsonwebtoken');


const login = async (req, res) => {

    const {
        username,
        password
    } = req.body
    // 3 types of validaton 
    // mongoose valdiation
    // Joi validation
    // check in controler

    // demo only
    const id = new Date().getDate();

    //validation of user input 
    if (!username.trim() || !password.trim()) {
        throw new badRequest("Please provide email and password");
    }

    // creating a jwt token
    // try to keep the payload small, better experience for the user
    // jwt.sign({payload},secret,{options})
    const token = jwt.sign({
        id,
        username
    }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })

    res.status(200).json({
        msg: "user created",
        token
    })
}


const dashboard = async (req, res) => {

    //! we receive the user from the req that we got from our middleware
    const {
        username,
        id
    } = req.user;

    const num = Math.floor(Math.random() * 100);
    res.status(200).json({
        msg: `User: ${username} id: ${id}`,
        secret: ` Data recevied: ${num}`
    })


}

module.exports = {
    login,
    dashboard
}