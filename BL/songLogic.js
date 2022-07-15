require('../DL/db.js').connect();
const songController = require('../DL/controllers/songController');


const newSong = async (song) => {
        if(!song) throw {code: 405, message: "missing data"}
        const newSong = await songController.create(song);
        console.log("song has been created: ", newSong);
}

const getAllSongs = async () => {
   return await songController.read({});
}

const deleteSong = async (song) => {
        if(!song) throw {code: 405, message: "missing data"}
        await songController.del(song);
}

module.exports = { newSong,getAllSongs,deleteSong };