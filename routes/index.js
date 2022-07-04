const express = require('express');
const router = express.Router();

const userRouter = require('./userRoute');


router.use('/users',userRouter);

// console.log("----");
// router.get('/',(req,res)=>{
//     res.send("Hi");
// })

module.exports = router;