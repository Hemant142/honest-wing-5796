const express= require("express");
const { FavoriteSongModel } = require("../Model/Favorite.model");
const { auth } = require("../Middleware/auth.middleware");

const FavoriteSongRoute= express.Router();
FavoriteSongRoute.use(auth)

FavoriteSongRoute.get("/",async(req,res)=>{
    // console.log({req:req.body});
    const {  q, page, limit } =
    req.query;
    // console.log(q, page, limit );
    try {
    let query={}
    if (q) {
        query.$or = [
          { title: new RegExp(q, "i") },
          { artist: new RegExp(q, "i") },
          { catogary: new RegExp(q, "i") },
        ];
      }
// console.log({query});
      const pageNumber = parseInt(page) || 1; // page come form query if not then by default 1
      const pageSize = parseInt(limit) || 10; // limit come form query if not then by default 10
      const totalproduct = await FavoriteSongModel.countDocuments(query); // it is use for count totle Song
      const totalPages = Math.ceil(totalproduct / pageSize); // logic for find total page
    
        const FavoriteSong= await FavoriteSongModel.find({userId:req.body.userId},query);
        res.json({
            FavoriteSong, // current page Array of SONG list means how many limit you give
            page: pageNumber, // current page
            totalPages, // total page
            totalResults: totalproduct, //  total number of SONG persent in database
          });
    } catch (error) {
        res.status(400).send({error:"error"})
    }
})
FavoriteSongRoute.post("/add",async(req,res)=>{
    const data = req.body;
  //  console.log(data,"daat")
    try {
     const CreatedData= new FavoriteSongModel(data)
     await CreatedData.save()
      res.status(200).send({message:"song Added"})
    } catch (error) {
        res.status(400).send({error:"error"})
    }
})
FavoriteSongRoute.delete("/delete/:userId",async(req,res)=>{
    const {userId} = req.params
    console.log({userId});
    try {
      const checkSong= await FavoriteSongModel.findOne({_id:userId})
      console.log({checkSong})
      if(checkSong){
    
        if(checkSong.userId==req.body.userId){
          await FavoriteSongModel.findByIdAndDelete({_id:userId})
          res.status(200).send({msg:`Song id ${userId} has been deleted`})
        }else{
            res.status(200).send({msg:`you are not authorized`}) 
        }
      }else{
        res.status(200).send({msg:"song is not found"})
      }
    
    } catch (error) {
        res.status(400).send({error:"error"})
    }
})

module.exports={
    FavoriteSongRoute
}
