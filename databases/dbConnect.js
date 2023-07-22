require('dotenv').config()
const mongoose = require('mongoose')

exports.MongoConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('connected')
    } catch (error) {
        console.log('not connected')
    }
}
