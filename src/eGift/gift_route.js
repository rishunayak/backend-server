const express=require("express")
const Gift=require("./gift_model")

const app=express.Router()

app.get("/",async(req,res)=>
{
    let gift=await Gift.find()      
    res.send(gift) 
})



module.exports=app