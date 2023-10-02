
const mongoose=require("mongoose");
const FavoriteSongSchema=mongoose.Schema({
    title: String,
    avatar: String,
    audio: String,
    rating: String,
    catogary: String,
    artist: String,
    genre:String,
    language:String,
    liked: Number,
    disliked: Number,
    lyrics: [String],
    userID:String,
    username:String,
    songId:String
  
},{versionKey:false})
const FavoriteSongModel=mongoose.model("favoriteSong",FavoriteSongSchema);
module.exports={
  FavoriteSongModel
}