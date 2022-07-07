require('../DL/db.js').connect();
const playlistController = require('../DL/controllers/playlistController');


const addNewPlaylist = async (song) => {
        await playlistController.create(song);
}

const getAllplaylists = async () => {
   return await playlistController.read({});
}

// addNewSong({name: "VeazTavoi"});


module.exports = { addNewPlaylist,getAllplaylists };