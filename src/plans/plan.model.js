const mongoose=require("mongoose")

const plansSchema=new mongoose.Schema({
    exclusive_item:String,
    lazyfade_src:String,
    week:Number,
    min:Number,
    x_small:String,
    price:Number
})

const Plans=mongoose.model("plans",plansSchema);

module.exports=Plans