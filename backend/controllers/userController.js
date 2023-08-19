
const User=require('../models/userSchema')
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require("dotenv").config()
const userController= {

    getUsers:async(req,res) =>{
         
    const users= await User.find()

      res.send(users)
        
    },
    AddUser:(req,res)=>{
        
        User.create(req.body)


        res.send("user added")

    },
    UpdateUser:async(req,res)=>{

    await  User.findOneAndUpdate({_id:req.body._id},req.body) 
     res.send("updated")
    },
    DeleteUser:async(req,res)=>{
      await  User.findOneAndDelete({_id:req.body._id}) 
      res.send("deleted")
     },
     login:async(req,res)=>{


        const {email,password}=req.body
        if(!email||!password)
        return res.status(400).json({message:"Missing information"})

        const user = await User.findOne({email:email})

        if (!user)
        return res.status(404).json({message:"user not found"})



        const isMatch= await bcrypt.compare(password, user.password)

        if(!isMatch)
        return res.status(400).json({message:"password incorrect"})
       
       
        return res.status(200).json( {_id:user._id,email:user.email,token:genToken(user._id)})




     },
     register:async(req,res)=>{

      const {email,password,passwordConfirm}=req.body

      if(!email||!password||!passwordConfirm)
      return res.status(400).json({message:"Missing information"})
      
      const user= await User.findOne({email:email})
      
      if(user)
      return  res.status(400).json({message:"User already registered"})

      if(password.localeCompare(passwordConfirm)!=0)
      return  res.status(400).json({message:"password must be confirmed"})

      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(password, salt);

      const newUser=await User.create({email:email,password:hash})


      if(!newUser)
       return res.status(400).json({message:"user not created"})
      
      if(newUser)
  {  
  
      return res.status(200).json( {_id:newUser._id,email:newUser.email,token:genToken(newUser._id)})
}

       




     },
     me:async(req,res)=>{
      res.status(200).json(req.user)
     }



}

const genToken=(id)=>{
  return jwt.sign({ _id: id},process.env.JWT_SECRET,{expiresIn:'10d'});
}
module.exports=userController