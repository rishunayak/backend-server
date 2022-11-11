const express=require("express")
const Workouts=require("./workout.model")

const app=express.Router()

app.get("/",async(req,res)=>
{
    const {limit=10,page=1}=req.query

    let workout=await Workouts.find().limit(limit).skip(page*limit)     

    res.send(workout) 
})



module.exports=app