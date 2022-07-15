const  mongoose = require ('mongoose');


const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,

    },
    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "song",
    }],
    createDate: {
        type: Date,
        default: Date.now,
      },
    isActive:{
        type: Boolean,
        default: true
    }
});

const playlistModel = mongoose.model("playlist",playlistSchema);


module.exports = {playlistModel};