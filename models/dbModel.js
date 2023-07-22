const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    url : String ,
    detailUrl : String ,
    title : Object ,
    price : Object ,
    description : String , 
    discount : String ,
    tagline : String ,
})


const productModel = mongoose.model('products' , ProductSchema)

module.exports = productModel