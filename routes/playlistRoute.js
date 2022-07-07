const express = require('express');
const playlistLogic = require("../BL/playlistLogic");

const router = express.Router();


router.get('/', async (req, res) => {
    const playlists = await playlistLogic.getAllplaylists();
    res.send(playlists);
})

router.post('/', async (res,req) => {
   try{
       playlistLogic.addNewPlaylist(res.body);
       req.send("playlist has been added");
   }catch(error){

   }
})



module.exports = router;