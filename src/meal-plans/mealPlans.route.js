const express=require("express")
const MealPlans=require("./mealPlans.model")

const app=express.Router()

app.get("/",async(req,res)=>
{
    const {limit=4}=req.query
  
    let meal=await MealPlans.find().limit(limit)   
    res.send(meal) 
})



module.exports=app