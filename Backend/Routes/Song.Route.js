const express= require("express");
const { SongModel } = require("../Model/Song.Model");

const SongRoute= express.Router();

SongRoute.get("/", async(req,res)=>{
    
    try {
        const AllSong= await SongModel.find();
        res.status(200).json({AllSong})

    } catch (error) {
        res.status(400).json({error:"error"})
    }
})
SongRoute.post("/add", async(req,res)=>{
    const song= req.body;
    try {
        const AddedSong= new SongModel(song);
        await AddedSong.save()
        res.status(200).json({message:"New song Added"})

    } catch (error) {
        res.status(400).json({error:"error"})
    }
})
SongRoute.patch("/update/:songId", async(req,res)=>{
   const {songId} = req.params
    try {
         await SongModel.findByIdAndUpdate({_id:songId},req.body);
        res.status(200).json({message:`song id ${songId} updated successful`})

    } catch (error) {
        res.status(400).json({error:"error"})
    }
})
SongRoute.delete("/delete/:songId", async(req,res)=>{
   const {songId} = req.params
    try {
         await SongModel.findByIdAndDelete({_id:songId});
        res.status(200).json({message:`song id ${songId} Deleted successful`})

    } catch (error) {
        res.status(400).json({error:"error"})
    }
})

module.exports= {
    SongRoute
}