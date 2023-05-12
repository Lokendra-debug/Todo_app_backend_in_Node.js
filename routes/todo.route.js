const {Router}=require("express")
const todoRoute=Router()
const {auth}=require("../middlewares/auth.middleware")
const{todoAdd,todoGet,todoGetOne,todoUpdate,todoDelete}=require("../controllers/todo.controller")

todoRoute.post("/add",auth,todoAdd)
todoRoute.get("/get",auth,todoGet)
todoRoute.get("/get/:todoID",auth,todoGetOne)
todoRoute.patch("/update/:todoID",auth,todoUpdate)
todoRoute.delete("/delete/:todoID",auth,todoDelete)

module.exports={todoRoute}