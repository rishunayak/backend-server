require("dotenv").config()

const express=require("express")

const connect=require("./config/config");
const cors= require("cors")
const PORT=process.env.PORT

const userRoute=require("./users/user.route")
const planRoute=require("./plans/plan.route")
const cartRoute=require("./cart/cart.route")
const mealplanRoute=require("./meal-plans/mealPlans.route")
const fbRotue=require("./fb_plus/fb_plus.route")
const giftRoute=require("./eGift/gift_route")
const workoutRoute=require("./workout/workout.route")
const app=express()
app.use(express.json())
app.use(cors())
app.use("/users",userRoute)
app.use("/plans",planRoute)
app.use("/cart",cartRoute)
app.use("/mealplans",mealplanRoute);
app.use("/fb_plus",fbRotue)
app.use("/gift",giftRoute)
app.use("/workouts",workoutRoute)

app.get("/",(req,res)=>
{
    try
    {
        res.send("Working fine ")
    }
    catch(e)
    {
        res.send(e)
    }
   
})

app.listen(PORT,async()=>
{ 
    try
    {
        await connect()
        console.log("connection success") 
        console.log(connect())
    }
    catch(e)
    {
 
        console.log("no connection",e)    
    }
  
})
