const  mongoose = require ('mongoose');


const songSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    isActive:{
        type: Boolean,
        default: true
    }
});


const songModel = mongoose.model("song",songSchema);


module.exports = {songModel};