require('../DL/db.js').connect();
const songController = require('../DL/controllers/songController');


const addNewSong = async (song) => {
        const newSong = await songController.create(song);
        console.log("song has been created: ", newSong);
}

const getAllSongs = async () => {
   return await songController.read({});
}

// addNewSong({name: "VeazTavoi"});


module.exports = { addNewSong,getAllSongs };