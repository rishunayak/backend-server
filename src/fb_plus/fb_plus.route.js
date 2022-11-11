const express=require("express")
const FB_Plus=require("./fb_plus.model")

const app=express.Router()

app.get("/",async(req,res)=>
{
    let plus=await FB_Plus.find()      
    res.send(plus) 
})



module.exports=app