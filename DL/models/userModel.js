const  mongoose = require ('mongoose');


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        reqiure: true
    },
    isActive:{
        type: Boolean,
        default: true
    }
});


const userModel = mongoose.model("user",userSchema);


module.exports = {userModel};