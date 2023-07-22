const productModel = require("../models/dbModel")


exports.GetProducts = async (req, res) => {
    try {
        const allproduct = await productModel.find()
        res.send({ success: true, products: allproduct })
    } catch (error) {
        console.log({ success: false, error: 'Get product unsuccessfull..!!' })
    }
}

exports.SingleGetProducts = async (req, res) => {
    try {
        const {id} = req.params
        console.log(id)
        const product = await productModel.findById(id)
        res.send({
            success: true,
            product
        })
    } catch (error) {
        res.send({success : false , error : "Post product unsucessfull..!!"})
    }
}

exports.PostProducts = async (req, res) => {
    try {
        const NewProduct = new productModel(req.body)
        const SaveProduct = await NewProduct.save()
        res.send({success : true , products : SaveProduct})
    } catch (error) {
        res.send({success : false , error : "Post product unsucessfull..!!"})
    }
}
