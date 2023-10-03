//Importing all the required modules and function
const express = require("express");
const { UserModel } = require("../Model/user.model");
const { checkPassword } = require("../Validators/passwordChecker");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BlacklistModel } = require("../Model/Blacklist.model");
require("dotenv").config();
var nodemailer = require('nodemailer');
const sendEmail = require("../utils/sendEmail");
const SECRET_KEY = process.env.secretKey;
// This is a user route which only contains user routes
const userRouter = express.Router();
// userRouter.set('view engine', 'ejs'); // Set EJS as the template engine
userRouter.use(express.static("public")); // Serve static files (e.g., React frontend) from the 'public' directory

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

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
      return res.status(200).json({
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
          console.log(result);
          const expirationTime =
            Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7;
          const token = jwt.sign(
            { userID: existingUser._id, username: existingUser.name },
            SECRET_KEY,
            {
              expiresIn: expirationTime,
            }
          );
          console.log(expirationTime, "Token");
          return res
            .status(200)
            .json({ msg: "Login Successfull!", token, existingUser });
        } else {
          res.status(200).json({ error: "Invalid Password!" });
        }
      });
    } else {
      res.status(200).json({ error: "User Not Found!" });
    }
  } catch (error) {
    console.log(error.message);
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
// userRouter.delete("/delete/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     await UserModel.findByIdAndDelete({ _id: id });
//     res.status(200).json({ msg: "User deleted successfully!" });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// userRouter.post("/forgot-password", async (req, res) => {
//   const { email } = req.body;
//   try {
//     const oldUser = await UserModel.findOne({ email });
//     // console.log(email,"email")
//     if (!oldUser) {
//       return res.send("User Not Exists!!");
//     }
//     const secret = JWT_SECRET + oldUser.password;
//     const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
//       expiresIn: "5m",
//     });
//     // console.log("token1", token)
//     const link = `http://localhost:8080/users/reset-password/${oldUser._id}/${token}`;
    

//     // <=======================Sending to Email========================>
//     var transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'yhemant203@gmail.com',
//         pass: 'rqlaujvwjbwkinve'
//       }
//     });
    
//     var mailOptions = {
//       from: 'yhemant203@gmail.com',
//       to: email,
//       subject: 'Sending Email using Node.js',
//       text: link
//     };
    
//     transporter.sendMail(mailOptions, function(error, info){
//       if (error) {
//         console.log(error);
//       } else {
//         console.log('Email sent: ' + info.response);
//       }
//     });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// userRouter.get("/reset-password/:id/:token", async (req, res) => {
//   const { id, token } = req.params;
//   // console.log(req.params);
//   const oldUser = await UserModel.findOne({ _id: id });
//   if (!oldUser) {
//     return res.send("User Not Exists!!");
//   }
//   const secret = JWT_SECRET + oldUser.password;
//   try {
//     const verify = jwt.verify(token, secret);
//     // Render the password reset form with the email value
//     res.render("index", { email: verify.email,status:"Not verified" });
//   } catch (err) {
//     res.status(400).send("Not Verified");
//   }
// });

// userRouter.post("/reset-password/:id/:token", async (req, res) => {
//   const { id, token } = req.params;
//   console.log(id);
//   const {password,confirmPassword}=req.body;
//   // console.log(password,confirmPassword)
//   const oldUser = await UserModel.findOne({ _id: id });

//   if (!oldUser) {
//     return res.send("User Not Exists!!");
//   }
//   const secret = JWT_SECRET + oldUser.password;
//   try {
//     const verify = jwt.verify(token, secret);
//     //console.log("verify")
//     if(password === confirmPassword) {
//       const encryptedPassword=await bcrypt.hash(password,5);
//       console.log({encryptedPassword})
//     await UserModel.updateOne({
//       _id:id,
//     },{
//       $set:{
//         password:encryptedPassword,
//       }
//     })
//     // res.status(200).send({status: "verified"})
//    res.render("index", { email: verify.email, status: "verified" });

//     }else{
//       res.status(200).send("Passwords do not match");
//     }
//   } catch (err) {
//     console.log(err)
//     res.status(400).send("Something Went Wrong");
//   }
// });












// send mail for forgot Password
userRouter.post("/forgot", async (req, res) => {
  const { email } = req.body;
  // console.log(email)
  if (!email) {
    res.status(200).json({ error: "all the fields are requried", issue: true });
  } else {
    try {
      let user = await UserModel.findOne({ email });
      // console.log(user)
      if (user) {
        const token = jwt.sign(
          { userId: user._id, username: user.username },
          process.env.JWT_RESET_KEY
        );

        const text = `here is the link to forgot Password, try to update Password  ${process.env.WEBURL}/resetpassword/${user._id}/${token}`;
// console.log(text)
        let obj = await sendEmail(
          user.email,
          "Forgot Password @ Recipe Swap",
          text
        );
        // console.log(obj,"Object")
        if (!obj.issue) {
          user.token = token;
          await user.save();
          res.send({
            message:
              "Password reset link sent to your email account, check the spam folder",
            issue: false,
          });
        } else {
          res.status(200).json({ error: obj.error, issue: true });
        }
      } else {
        res.status(200).json({ error: "User Not Found!", issue: true });
      }
    } catch (error) {
      res.status(200).json({ error: error.message, issue: true });
    }
  }
});



userRouter.get("/resetpassword/:id/:token", async (req, res) => {
  // const { password } = req.body;
  const { token ,id} = req.params;
  // console.log(token,"Token")
  // console.log(id)
    try {
      let user = await UserModel.findOne({ _id:id});
      // console.log(user,"user")

      if (user) {
        jwt.verify(token, process.env.JWT_RESET_KEY )
          
          res.redirect(`http://localhost:3000/reset_password/${id}/${token}`)
        
      } else {
        res.status(200).json({ error: "Token is expired!", issue: true });
      }
    } catch (error) {
      res.status(200).json({ error: error.message, issue: true });
    }
  
});
userRouter.post("/resetpassword/:id/:token", async (req, res) => {
  const { password } = req.body;
  const { token ,id} = req.params;
  console.log(id)
  if (!password) {
    res.status(200).json({ error: "all the fields are requried" });
  } else {
    try {
      let user = await UserModel.findOne({ _id: id });
      console.log(user,"Password")
      if (user) {
        jwt.verify(token, process.env.JWT_RESET_KEY, (err, decoded) => {
          if (err) console.log(err);
          if (decoded) {
            
            bcrypt
            .hash(password, 5, async (err, hash) => {
              if (err) return err;
              user.password = hash;
              user.token = "";
              await user.save();
              res
                .status(200)
                .json({ message: "Password has been changed", issue: false });
            });
          }
        });
      } else {
        res.status(200).json({ error: "Token is expired!", issue: true });
      }
    } catch (error) {
      res.status(200).json({ error: error.message, issue: true });
    }
  }
});

















//exporting the userRouter
module.exports = {
  userRouter,
};
