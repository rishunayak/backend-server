const express=require("express")
const Users = require("./user.model")

const app=express.Router()

app.post("/login",async(req,res)=>
{
    const {username,password}=req.body;
    console.log(req.body)
    const users=await Users.findOne({username}) || ""
    if(users.username===username)
    {
        if(users.password===password)
        {
            const token=username+"#"+password
            res.send(token)
        }
        else
        {
            res.status(404).send("Wrong Password")
        }
    }
    else
    {
        res.status(404).send("Wrong Username") 
    }     
     
})



app.post("/signup",async(req,res)=>
{
     const {email,username}=req.body
     let exitingEmail=await Users.findOne({email}) || ""
     let exitingUsername=await Users.findOne({username}) || ""
     
     if(exitingEmail.email==email || exitingUsername.username===username )
     {
        res.status(404).send("Email or User Name Already Exist")
     }

      let user=await Users.create({...req.body}) 
      res.send(user) 
})


module.exports=app  