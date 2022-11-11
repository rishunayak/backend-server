const express=require("express")
const Pilot=require("./pilot.model")

const app=express.Router()

app.get("/",async(req,res)=>
{
    const {limit=10}=req.query
    let pilot=await Pilot.find().limit(limit)  
    res.send(pilot) 
})



module.exports=app