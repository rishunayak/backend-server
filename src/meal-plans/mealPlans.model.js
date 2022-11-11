const mongoose=require("mongoose")

const mealPlansSchema=new mongoose.Schema({
    exclusive_item:String,
    lazyfade_src:String,
    week:Number,
    min:Number,
    x_small:String,
    subtitle:String,
    content_actions_msg:String,
    material_icons_outlined:String,
    btn_txt:String,
    price:Number,

})

const MealPlans=mongoose.model("meal_plans",mealPlansSchema);

module.exports=MealPlans