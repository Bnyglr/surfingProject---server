const express = require('express');
const router = express.Router();

const userRouter = require('./userRoute');
const articleRouter = require('./articleRoute');


router.use('/users',userRouter);
router.use('/articles',articleRouter);


module.exports = router;