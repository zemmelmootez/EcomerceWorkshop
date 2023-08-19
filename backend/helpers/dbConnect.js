
require("dotenv").config()

const mongoose =require('mongoose')

 connect=()=>{
 
    try {
        mongoose.connect(process.env.MONGOURL)
        console.log("connected")

    } catch (error) {
        
        console.log("error de connexion")
    }

}

module.exports=connect