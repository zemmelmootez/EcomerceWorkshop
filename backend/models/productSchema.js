const mongoose=require("mongoose")



const productSchema=mongoose.Schema({
    name:String,
    description:{type:String},
    imgLink:String,
    price:Number
})

const Product= mongoose.model("Product",productSchema)


module.exports=Product
