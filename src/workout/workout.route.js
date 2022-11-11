const express=require("express")
const Workouts=require("./workout.model")

const app=express.Router()

app.get("/",async(req,res)=>
{
    let workout=await Workouts.find()     
    res.send(workout) 
})



module.exports=app