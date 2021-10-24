const express = require('express');
const router = express.Router();
const authMiddleware = require("../middleware/auth");


const {
    login,
    dashboard
} = require("../controllers/main")

// before we give dashboard we use the auth middleware to check if authorized
router.route("/dashboard").get(authMiddleware, dashboard)
router.route("/login").post(login)




module.exports = router;