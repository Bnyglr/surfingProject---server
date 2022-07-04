const express = require('express');
const userLogic = require("../BL/userLogic");

const router = express.Router();

router.get('/login', (req, res) => {
    res.send({hi: "hello"});
});

// router.post('/login', async(req,res) => {
//    console.log(req.body); 
// });

router.post("/login", async(req, res) => {
    console.log(req.body); 
    try{
      const token = await userLogic.login(req.body.name, req.body.password);
      res.send({token});
    }catch(error){
      console.log(error.message);
      res.status(500).send("sorry. something went wrong");
    }
  });

module.exports = router;


