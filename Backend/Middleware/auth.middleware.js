const jwt = require("jsonwebtoken");
const {BlacklistModel} = require("../Model/Blacklist.model");
require("dotenv").config();
const SECRET_KEY = process.env.secretKey;

const auth = async(req, res, next) => {
    const token = req.headers.authorization;
    // console.log({token});
    try {
        if(token){
            let existingToken = await BlacklistModel.find({
                blacklist : {$in : token}
            });
           
            if(existingToken.length > 0){
               
                return res.status(400).json({error : "Please Login again!"});
            }else{
                let decoded = jwt.verify(token, SECRET_KEY);
                // console.log({decoded});
                req.body.userID = decoded.userID;
                req.body.username = decoded.username;
                return next();
            }
        }else{
            return res.status(400).json({error : "Please Login first!"});
        }
    } catch (error) {
        return res.status(400).json({error : error.message})
    }
}

module.exports = {
    auth
}