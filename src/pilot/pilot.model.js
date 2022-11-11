const mongoose=require("mongoose")

const pilotSchema=new mongoose.Schema({
    
})

const Pilot=mongoose.model("pilot_programs",pilotSchema);

module.exports=Pilot