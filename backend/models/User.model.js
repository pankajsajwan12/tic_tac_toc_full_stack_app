const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // user_id : {type : Number},
    name : {type : String, required : true},
    user_name : {type : String, required : true},
    email : {type : String , required : true},
    password : {type : String, required : true}
})

const UserModel = mongoose.model("tic_toc_toe_user_singup_data", userSchema);

module.exports = {
    UserModel
}