const mongoose=require("mongoose")

const giftSchema=new mongoose.Schema({
    lazyfade_src:String,
    price:Number
})

const Gift=mongoose.model("gift",giftSchema);

module.exports=Gift