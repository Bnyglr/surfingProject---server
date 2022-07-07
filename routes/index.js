const express = require('express');
const router = express.Router();

const userRouter = require('./userRoute');
const songRouter = require('./songRoute');
const playlistRouter = require('./playlistRoute');


router.use('/users',userRouter);
router.use('/songs',songRouter);
router.use('/playlists',playlistRouter);


module.exports = router;