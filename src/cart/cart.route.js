const express=require("express")
const Users = require("../users/user.model")
const Cart=require("./cart.model")

const app=express.Router()



// const authMiddleware=async(req,res,next)=>
// {
//     let {token}=req.body
//     let [username,password]=token.split("#");
     
//     try
//     {
//         const users=await Users.findOne({username}) || ""
//     if(users.username===username)
//     {
//         if(users.password===password)
//         {
//             req.userId=users.id
//             next()
//         }
//         else
//         {
//             res.status(404).send("Wrong Password")
//         }
//     }
//     else
//     {
//         res.status(404).send("Wrong Username") 
//     }     
//     }
//     catch(e)
//     {
//        res.status(404).send(e)
//     }
// }


app.get("/",async(req,res)=> 
{
   
    let cart=await Cart.findOne({user:"636c9b56f128a25d79a75bee"})    
    res.send(cart) 
})

app.post("/",async(req,res)=>
{
     
    const {id}=req.body
    console.log(req.userId)
    const instalData={user:req.userId,plan:id}
    
    let cart=await Cart.create(instalData)
    res.send(cart)

    
    

    

})


module.exports=app