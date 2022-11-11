const express=require("express")
const Plans=require("./plan.model")

const app=express.Router()

app.get("/",async(req,res)=>
{
    let plans=await Plans.find()     
    res.send(plans) 
})



module.exports=app