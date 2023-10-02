const mongoose = require("mongoose");

const SongSchema = mongoose.Schema({
  title: String,
  avatar: String,
  Audio: String,
  rating: String,
  catogary: String,
  artist: String,
  genre:String,
  liked: Number,
  disliked: Number,
  language:String,
  userID:String,
  username:String


},{versionKey:false});


const SongModel= mongoose.model("SongList",SongSchema);

module.exports={
    SongModel
}