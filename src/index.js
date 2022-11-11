require("dotenv").config()

const express=require("express")

const connect=require("./config/config");
const cors= require("cors")
const PORT=process.env.PORT

const userRoute=require("./users/user.route")
const planRoute=require("./plans/plan.route")
const cartRoute=require("./cart/cart.route")

const app=express()
app.use(express.json())
app.use(cors())
app.use("/users",userRoute)
app.use("/plans",planRoute)
app.use("/cart",cartRoute)


app.listen(PORT,async()=>
{ 
    try
    {
        await connect()
        console.log("connection success") 
    }
    catch(e)
    {
 
        console.log("no connection",e)    
    }
  
})
