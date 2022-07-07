const express = require('express');
const songLogic = require("../BL/songLogic");

const router = express.Router();
router.get('/', async (req, res) => {
    console.log("hi");
    const songs = await songLogic.getAllSongs();
    res.send(songs);
})

router.post('/', async (res,req) => {
   try{
       songLogic.addNewSong(res.body);
       req.send("song has been added");
   }catch(error){

   }
})



module.exports = router;