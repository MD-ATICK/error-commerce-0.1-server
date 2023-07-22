const express = require('express')
const { GetProducts, PostProducts, SingleGetProducts } = require('../controllers/productControllers')
const router = express.Router()

router.get('/getproducts' , GetProducts)
router.get('/singlegetproducts/:id' , SingleGetProducts)
router.post('/postproducts' , PostProducts)

module.exports = router