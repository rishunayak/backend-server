const express=require("express")
const Plans=require("./plan.model")

const app=express.Router()

app.get("/",async(req,res)=>
{
    const {limit=10,page=1}=req.query
    let plans=await Plans.find().limit(limit)      
    res.send(plans) 
})



module.exports=app