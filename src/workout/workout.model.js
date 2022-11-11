const mongoose=require("mongoose")

const workoutSchema=new mongoose.Schema({})

const Workouts=mongoose.model("workout",workoutSchema);

module.exports=Workouts