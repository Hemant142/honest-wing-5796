const mongoose = require("mongoose");

const SongSchema = mongoose.Schema({
  title: String,
  avatar: String,
  play: String,
  rating: String,
  catogary: String,
  artist: String,
  liked: Number,
  disliked: Number,
  lyrics: [String],
  userID:String,
  username:String


},{versionKey:false});


const SongModel= mongoose.model("SongList",SongSchema);

module.exports={
    SongModel
}