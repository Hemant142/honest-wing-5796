
const express=require("express");
require("dotenv").config()
const cors=require("cors");
const {connection}=require("./db");
const {userRouter} = require("./Routes/user.routes");
const { SongRoute } = require("./Routes/Song.Route");
const app=express();
app.use(express.json())
app.use(cors())

app.get("/",async(req,res)=>{
    res.setHeader("Content-type", "text/html")
    res.send("<h1>Welcome to the Sare Gama server</h1>")
})
app.use("/songs",SongRoute)
app.use("/users", userRouter);
const PORT=process.env.PORT
app.listen(PORT,async()=>{
 try{
await connection
console.log("You are connected to Saregama");
console.log(`Server is running on Port: ${PORT}`)
 }catch(err){
    console.log(err.message)
 }
})




