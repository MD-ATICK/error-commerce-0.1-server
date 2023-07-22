require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { MongoConnect } = require('./databases/dbConnect')
const productModel = require('./models/dbModel')
const router = require('./routes/productRoute')
const routeruser = require('./routes/UsreRoute')
const app = express()
const Port = process.env.Port
const cookieParser = require("cookie-parser");



app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use('/api' , router)
app.use('/api/user' , routeruser)

app.get('/' , (req , res) => {
    res.send({
        name : "Atick" ,
        roll : 01 ,
        class : "Nine"    
    })
})

app.listen(Port, () => {
    console.log(`server is running at http://localhost:${Port}`)
    MongoConnect()
})