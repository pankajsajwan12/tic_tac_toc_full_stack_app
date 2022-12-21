const {Router} = require('express');
const {UserModel} = require('../models/User.model');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRoutes = Router();
require('dotenv').config();

userRoutes.post('/signup', async(req,res) => {
    const {name, user_name, email, password} = req.body;

    const isuserNameUnique = await UserModel.findOne({user_name})
    const isuserEmailUnique = await UserModel.findOne({email})

    if( isuserEmailUnique && isuserNameUnique) {
        return res.send({"msg" : "User already exits, try login in"});
    } else if (isuserNameUnique){
        return res.send({'msg':"please choose different name"});
    } else if (isuserEmailUnique){
        return res.send({"msg":"This email is already exists, try login in"});
    }else {
        const time = process.env().hash_time
        bcrypt.hash(password, time , async(err, hash) => {
            if(err){
                return res.send({'msg':"Something went wrong, please try again later" , "err":err})
            }
            const newUser = new UserModel({
                name,
                user_name,
                email,
                password : hash
            })

            try{
                await newUser.save();
                res.send({'msg':"Singup Successfully"})
            }
        catch(err){
            console.log(err);
            res.send({"msg":"Somthing went wrong, please try again later"})
        }
        })
    }
});


userRoutes.post("/login", async(req,res) => {
  const {user_name, password} = req.body;
  const user = await UserModel.findOne({user_name})
  const hash_password = user.password

  bcrypt.compare(password, hash_password, (err,result) => {
    if(err){
        return res.send({"msg":"Something went wrong, please try again later"});
    }
    if(result){
        const token = jwt.sign( {userId : user._id }, process.env.secret_key)
        return res.cookie("access_token", token , {
            httpOnly : true,
        })
        .status(200)
        .json({msg : 'Logged in successfully'});
    }
  })
})

module.exports = {
    userRoutes
}