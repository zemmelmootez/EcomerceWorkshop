const Product = require("../models/productSchema")



const productController={

        getProducts:async(req,res)=>{
         const products=await Product.find()

            res.send(products)
},
        addProduct:async(req,res)=>{

            const {name,description,imgLink,price}=req.body

            const product=await Product.findOne({name:name})

            if(product)
            res.status(400).json({message:"product exists"})

         const NewProduct=   Product.create({name:name,description:description,imgLink:imgLink,price:price})

                if(!NewProduct)
                res.status(400).json({message:"product creation failed"})

            res.status(200).json({message:"product created successfully"})
            }
       
}

module.exports=productController