require('../DL/db.js').connect();
const playlistController = require('../DL/controllers/playlistController');


const newPlaylist = async (playlist) => {
        if(!playlist) throw {code: 405, message: "missing data"}
        await playlistController.create(playlist);
}

const deletePlaylist = async (playlist) => {
        if(!playlist) throw {code: 405, message: "missing data"}
        await playlistController.del(playlist);
}

const getAllplaylists = async () => {
   return await playlistController.read({});
}

const newSong = async (data)=> {
        const {filter,update} = data;
        console.log("filter: ", filter," update: ", update);
        playlistController.update(filter,{$push: {songs: update}});
}

const deleteSong = async (data)=>{
        const {filter, update} = data;
        playlistController.update(filter,{$pull: {songs: update._id}});
}

module.exports = { newPlaylist,getAllplaylists,newSong,deleteSong,deletePlaylist };