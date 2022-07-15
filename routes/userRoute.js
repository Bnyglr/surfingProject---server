const express = require('express');
const userLogic = require("../BL/userLogic");
const {authJWT} = require('../middleware/auth');

const router = express.Router();

router.get('/login', (req, res) => {
    res.send({hi: "hello"});
});

// router.post('/login', async(req,res) => {
//    console.log(req.body); 
// });

router.post("/login", async(req, res) => {
    console.log("body: " , req.body); 
    try{
      const token = await userLogic.login(req.body);
      res.send({token});
      console.log(token);
    }catch(error){
      console.log("checked:", error.message);
      res.status(500).send("sorry. something went wrong");
    }
  });

  router.get('/user-details', authJWT, async(req,res)=>{
    try{
      const user = await userLogic.getUserById(req.id);
      res.send(user);
    }catch(error){
      res.send(error.message);
    }
  });

module.exports = router;


