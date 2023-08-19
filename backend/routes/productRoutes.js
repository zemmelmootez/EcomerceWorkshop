const productController = require("../controllers/productController")

const Router=require("express").Router()


Router.get("/getProducts",productController.getProducts)
Router.post('/addProduct',productController.addProduct)

module.exports=Router