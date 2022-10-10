const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
    let token = req.header('x-auth-token')
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded.user
        next()
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' })
    }
}
)
module.exports = {protect}