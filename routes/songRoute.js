const express = require('express');
const songLogic = require("../BL/songLogic");

const router = express.Router();
router.get('/', async (req, res) => {
    console.log("hi");
    const songs = await songLogic.getAllSongs();
    res.send(songs);
})

router.post('/new', async (res,req) => {
   try{
       songLogic.newSong(res.body);
       req.send({message:"song has been added"});
   }catch(error){

   }
});

router.post('/delete', async (res,req) => {
    //res.body = {"_id":"62cfe48278e84712288c2d15"}
    songLogic.deleteSong(res.body);
    req.send({message:"song has been deleted"});

});



module.exports = router;