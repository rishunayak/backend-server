const mongoose=require("mongoose")

const mealPlansSchema=new mongoose.Schema({
    
lazyfade_src:String,
price:Number

})

const FB_Plus=mongoose.model("fb_plus",mealPlansSchema);

module.exports=FB_Plus