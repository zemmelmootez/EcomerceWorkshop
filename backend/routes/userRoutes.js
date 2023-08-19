const Router=require("express").Router()
const userController=require("../controllers/userController")
const isAuth = require("../middleware/authMiddleware")

Router.get("/getUsers",userController.getUsers)
Router.post("/AddUser",isAuth,userController.AddUser)
Router.post("/UpdateUser",isAuth,userController.UpdateUser)
Router.post("/DeleteUser",isAuth,userController.DeleteUser)
Router.get("/me",isAuth,userController.me)
Router.post("/register",userController.register)
Router.post("/login",userController.login)


module.exports=Router