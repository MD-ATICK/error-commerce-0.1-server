require('dotenv').config()
const userModel = require("../models/UserModel")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

exports.RegisterUser = async (req, res) => {
    try {
        const { url, name, phoneno, email, password } = req.body
        const user = await userModel.findOne({ email })

        if (user) {
            return res.send({ success: false, error: 'Email must be Unique..!!' })
        }

        bcrypt.hash(password, 10, async (err, hash) => {
            const user = new userModel({ url, name, phoneno, email, password: hash })
            await user.save()
            res.send({ success: true, user })
        })

    } catch (error) {
        res.send({ success: false, error: 'Register user Unsuccessful..!!' })
    }
}

exports.LoginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.send({ success: false, error: 'User not found..!!' })
        } 
        if(!bcrypt.compareSync(password , user.password)){
            return res.send({success : false , error : 'Incorrect Password.!!'})
        }
        const paylaod = { id: user._id , email: user.email }
        const token = jwt.sign(paylaod, process.env.JWT_SECRET, { expiresIn: '7d' })

        res.cookie("token" , token , {expires : new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) , httpOnly : true}).send({ success: true, token , user })

    } catch (error) {
        res.send({ success: false, error: 'Register user Unsuccessful..!!' })
    }
}

exports.MeUser = async ( req, res) => {
    try {
        res.send({success : true , user : req.user})
    } catch (error) {
        res.send({ success: false, error: 'Me user Unsuccessful..!!' })
    }
}


