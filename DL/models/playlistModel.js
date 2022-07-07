const  mongoose = require ('mongoose');


const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "song"
    }],
    isActive:{
        type: Boolean,
        default: true
    }
});

const playlistModel = mongoose.model("playlist",playlistSchema);


module.exports = {playlistModel};