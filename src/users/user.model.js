const mongoose=require("mongoose")

const usersSchema=new mongoose.Schema({
    fname:{type:String,required:true},
    lname:{type:String,required:true},
    email:{type:String,required:true},
    username:{type:String,required:true,min:5},
    password:{type:String,required:true,min:5,max:10},
   })

const Users=mongoose.model("user",usersSchema);

module.exports=Users