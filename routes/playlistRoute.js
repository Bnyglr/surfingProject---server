const express = require('express');
const playlistLogic = require("../BL/playlistLogic");

const router = express.Router();


router.get('/', async (req, res) => {
    const playlists = await playlistLogic.getAllplaylists();
    res.send(playlists);
});

router.post('/new', async (res,req) => {
   try{
       playlistLogic.newPlaylist(res.body);
       req.send("playlist has been added");
   }catch(error){

   }
});

router.post('/delete', async (res,req) => {
    // res.body = {"_id":"62d09603c38088d4b63a91f8"}
    playlistLogic.deletePlaylist(res.body);
    req.send("playlist has been deleted");
});


router.post('/addsong',async(res,req) => {
    // res.body = {filter: { name : 'toDrive'}, update: {_id: '62cfe4da78e84712288c2d1b'}}
    playlistLogic.newSong(res.body);
    req.send("done");
});

router.post('/deletesong',async(res,req) => {
    // res.body = {filter: { name : 'toDrive'}, update: {_id: '62cfe4da78e84712288c2d1b'}}
    playlistLogic.deleteSong(res.body);
    req.send("done");
});



module.exports = router;

