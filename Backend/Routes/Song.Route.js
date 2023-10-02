const express = require("express");
const { SongModel } = require("../Model/Song.Model");
const { auth } = require("../Middleware/auth.middleware");

const SongRoute = express.Router();
// SongRoute.use(auth)
// Song Get Requeest for getting the song according the query
SongRoute.get("/", async (req, res) => {
  // title: String,
  // avatar: String,
  // play: String,
  // rating: String,
  // catogary: String,
  // artist: String,
  // liked: Number,
  // disliked: Number,
  try {
    const { catogary, rating, title, artist, q, sort, order, page, limit } =
      req.query;
    // console.log({catogary, rating, title, artist, q, sort, order, page, limit });
    //  for example  basic Url = "http://localhost:8080/songs?page=2&limit=2&sortBy=asc"

    const query = {}; // all query Object

    //  if catogary is in query and type is array
    if (Array.isArray(catogary)) {
      query.catogary = { $in: catogary };
    }
    //  if catogary is in query and type is String means single Catogary
    else if (catogary) {
      query.catogary = catogary;
    }
    //  if artist is in query and type is array
    if (Array.isArray(artist)) {
      query.artist = { $in: artist };
    }
    //  if artist is in query and type is String means single artist
    else if (artist) {
      query.artist = artist;
    }

    //  if title is in query and type is array
    if (Array.isArray(title)) {
      query.title = { $in: title };
    }
    //  if title is in query and type is String means single title
    else if (title) {
      query.title = title;
    }
    //  if rating is in query
    if (rating) {
      query.rating = parseFloat(rating);
    }

    //  if any query is in query it is special for title,artist and catogary
    //  it is basically use for searching
    if (q) {
      query.$or = [
        { title: new RegExp(q, "i") },
        { artist: new RegExp(q, "i") },
        { catogary: new RegExp(q, "i") },
      ];
    }

    //  sorting Object
    const sortOptions = {};

    //   sorting by id
    if (sort && order) {
      sortOptions[sort] = order == "asc" ? 1 : -1; // 1 for ascending, -1 for descending 1
    }

    // const pageNumber = parseInt(page) || 1; // page come form query if not then by default 1
    const pageSize = parseInt(limit) || Infinity; // limit come form query if not then by default 10
    const totalproduct = await SongModel.countDocuments(query); // it is use for count totle Song
    const totalPages = Math.ceil(totalproduct / pageSize); // logic for find total page

    const data = await SongModel.find(query)
      .sort(sortOptions)
      // .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);
    res.json({
      data, // current page Array of SONG list means how many limit you give
      // page: pageNumber, // current page
      totalPages, // total page
      totalResults: totalproduct, //  total number of SONG persent in database
    });
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
});

// Song post Requeest for adding the new song according

SongRoute.post("/add", auth, async (req, res) => {
  const SongFromBody = req.body;
  // console.log(SongFromBody);
  try {
    const addedSong = new SongModel(SongFromBody);

    await addedSong.save();
    //   console.log(addedSong);
    res.status(200).send({ message: "New Song added successfully" });
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
});

// Song patch Requeest for updating the song according
SongRoute.patch("/update/:songId", auth, async (req, res) => {
  try {
    const { songId } = req.params;

    // console.log({songId});
    // console.log({Body:req.body});

    const Song = await SongModel.findOne({ _id: songId });
    // console.log( {Song});
    if (req.body.userID != Song.userID)
      res.status(200).send({ message: "you are not AdminAuthorized" });
    if (Song) {
      await SongModel.findByIdAndUpdate({ _id: songId }, req.body);
      res
        .status(200)
        .send({ message: `Product ${songId} updated successfully` });
    } else {
      res.status(200).send({ message: "Song not found" });
    }
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
});

// Song delete Requeest for deleting the song according

SongRoute.delete("/delete/:songId", auth, async (req, res) => {
  try {
    const { songId } = req.params;
    // console.log({songId});
    const Song = await SongModel.findOne({ _id: songId });
    console.log({ Song });
    if (Song) {
      if (req.body.userID != Song.userID)
        res.status(200).send({ message: "you are not AdminAuthorized" });

      await SongModel.findByIdAndDelete({ _id: songId });
      res.status(200).send({ message: `Song ${songId} Deleted successfully` });
    } else {
      res.status(200).send({ message: "song not found" });
    }
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
});

module.exports = {
  SongRoute,
};
