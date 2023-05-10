const express=require("express")
const cors=require("cors")
require("dotenv").config()


const {connection}=require("./database/db")


const app=express()
app.use(express.json())
app.use(cors())


app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("DB connected")
    } catch (error) {
        console.log(error.message)
    }

    console.log(`server is running on port ${process.env.port}`)
})