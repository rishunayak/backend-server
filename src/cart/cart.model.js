const mongoose=require("mongoose")

const cartSchema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    plan:{type:mongoose.Schema.Types.ObjectId,ref:"plans",required:true} ,
})

const Cart=mongoose.model("carts",cartSchema);

module.exports=Cart