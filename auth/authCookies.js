require('dotenv').config()
const jwt = require('jsonwebtoken');
const userModel = require('../models/UserModel');


exports.isAuthenticateUser = async (req , res , next) => {
    try {
        const {token}  = req.cookies;
       console.log(token)
        if(!token){
            return res.send({success : false , error : 'No login no entry..!!'})
        }
        const { id } = jwt.verify(token , process.env.JWT_SECRET)
        req.user = await userModel.findById(id)
        next()
    } catch (error) {
        res.send({success : false , error : 'inAuthenticateUser unsuccessful..!!'})
    }
}