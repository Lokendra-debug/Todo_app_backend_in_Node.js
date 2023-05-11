const {Router}=require("express")
const userRoute=Router()
const {register,login,logout}=require("../controllers/user.controller")


userRoute.post("/register",register)






module.exports={userRoute}