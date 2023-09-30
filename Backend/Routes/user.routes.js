//Importing all the required modules and function
const express = require("express");
const { UserModel } = require("../Model/user.model");

const { checkPassword } = require("../Validators/passwordChecker");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BlacklistModel } = require("../Model/Blacklist.model");
require("dotenv").config();
const SECRET_KEY = process.env.secretKey;

// This is a user route which only contains user routes
const userRouter = express.Router();
 

 const JWT_SECRET="hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe"




// This is a user route which will provid the all the users data
userRouter.get("/", async (req, res) => {

  try {
    const users = await UserModel.find();
    res.status(200).json({ users: users });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }

});

//This is a user registration route where user can register him self
userRouter.post("/register", async (req, res) => {
  const { name, email, password, gender, image, dob, age, role } = req.body;
  try {
    const existingUser = await UserModel.find({ email });
    if (existingUser.length) {
      return res.status(200).json({ error: "User has already registered" });
    } else if (checkPassword(password)) {
      bcrypt.hash(password, 10, async (err, hash) => {
        const NewUser = new UserModel({
          name,
          email,
          password: hash,
          gender,
          image,
          dob,
          age,
          role,
        });
        await NewUser.save();
        return res.status(200).json({
          msg: "The new user has been registered",
          registeredUser: NewUser,
        });
      });
    } else {
      return res
        .status(200)
        .json({
          error:
            "Registration failed Password should contain atlease one uppercase, one number and one special character",
        });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

//This is login user route. When a user get login he will get token with the 7 days of expirey
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
// console.log(email,password)
  try {
    const existingUser = await UserModel.findOne({ email });
    // console.log(existingUser)
    if (existingUser) {
      bcrypt.compare(password, existingUser.password, (err, result) => {
        if (result) {
          console.log(result)
          const expirationTime =
            Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7;
          const token = jwt.sign(
            { userID: existingUser._id, username: existingUser.name },
            SECRET_KEY,
            {
              expiresIn: expirationTime,
            }
          );
          console.log(expirationTime,"Token")
          return res.status(200).json({ msg: "Login Successfull!", token ,existingUser});
        } else {
          res.status(200).json({ error: "Invalid Password!" });
        }
      });
    } else {
      res.status(200).json({ error: "User Not Found!" });
    }
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ error: error.message });
  }
});

//This is a logout route on successful logout user login genrated token will be going to get blacklisted
userRouter.get("/logout", async (req, res) => {
  const token = req.headers.authorization;
  try {
    if (token) {
      await BlacklistModel.updateMany({}, { $push: { blacklist: [token] } });
      res.status(200).json({ msg: "User has been logged out" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//This route is responsible for updating the information of user
userRouter.patch("/update/:id", async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  try {
    await UserModel.findByIdAndUpdate({ _id: id }, payload);
    res.status(200).json({ msg: "User detail updated successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//This route is responsible for deleting the user
userRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await UserModel.findByIdAndDelete({ _id: id });
    res.status(200).json({ msg: "User deleted successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


userRouter.post("/forgot-password",async(req,res)=>{
  const {email}=req.body;
  try{
const oldUser=await UserModel.findOne({email});
if(!oldUser){
  return res.send("User Not Exists!!")
}
const secret= JWT_SECRET + oldUser.password;
const token=jwt.sign({email:oldUser.email,id:oldUser._id},secret,{expiresIn:"5m"});
const link =`http://localhost:8080/users/reset-password/${oldUser._id}/${token}`;
console.log(link);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})

userRouter.get("/reset-password",async(req,res)=>{
  const {id, token}=req.params;
  console.log(req.params)
})
//exporting the userRouter
module.exports = {
  userRouter,
};
