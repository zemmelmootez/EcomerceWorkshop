
var jwt = require('jsonwebtoken');
const User = require('../models/userSchema');
require("dotenv").config()
const isAuth=async(req,res,next)=>{

    if(!req.headers.authorization && !req.headers.authorization.startsWith('Bearer ')){

        res.status(401).json({
            message:"token not found"
        })
    }

    const token= req.headers.authorization.split(' ')[1]

    if(!token)
        res.status(401).json({message:"token cant be null"})
    
    try{
        const decoded=await jwt.verify(token,process.env.JWT_SECRET)

        console.log(decoded)
        if(!decoded)
        res.status(401).json({message:"unauthorized"})

        const user= await User.findById(decoded._id)

        if(!user)
        res.status(401).json({message:"unauthorized"})

        req.user={
            id:user._id,
            email:user.email,
        }
        next()
    
    
    }
    catch(e)
    {

        res.json({error:e.message})
    }
    

}

module.exports=isAuth