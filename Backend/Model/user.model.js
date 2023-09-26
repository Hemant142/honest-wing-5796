//Importing Mongoose
const mongoose = require("mongoose");

//This is Schema for user model which is going to validate registration data
const userSchema = mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true},
    gender : {type : String, required : true},
    image : {type : String, required : true},
    dob : {type : String, required : true},
    age : {type : Number, required : true},
    role : {type : String, required : true},
},{
    //making version key false to not get it in to database automaticlly
    versionKey : false
})

//This is a usermodel function which is going to help us to do all the needed opretions over the user data collection
const UserModel = mongoose.model("user", userSchema);

//Exporting the usermodel function 
module.exports={
    UserModel
}