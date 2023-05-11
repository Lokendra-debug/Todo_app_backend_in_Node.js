const {UserModel}=require("../models/user.model")
require("dotenv").config()
const bcrypt = require('bcrypt');


const register=async (req,res)=>{

    let {name,email,password,gender}=req.body

    try {
        let user=await UserModel.findOne({email})
        if(user){
            return res.status(400).send({"msg":"already exist please login"})
        }
        const hash = bcrypt.hashSync(password, 6);
        let newuser=new UserModel({name,email,password:hash,gender})
        await newuser.save()
        res.status(200).send({"msg":"User registered successfully"})

    } catch (error) {
        res.status(400).send(error)
    }
}




const login=async (req,res)=>{

}

const logout=async(req,res)=>{

}


module.exports={register,login,logout}