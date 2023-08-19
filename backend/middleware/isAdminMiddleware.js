
var jwt = require('jsonwebtoken');

const isAdmin=async(req,res,next)=>{

  if(req.user.role=="Admin")
  next()
    

}

module.exports=isAuth