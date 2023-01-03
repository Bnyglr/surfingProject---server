const express = require("express");
const articleLogic = require("../BL/articleLogic");
const userLogic = require("../BL/userLogic");
const {authJWT} = require('../middleware/auth')

const router = express.Router();

router.get("/",async (req, res) => {
  console.log("hi");
  const articles = await articleLogic.getAllArticles();
  res.send(articles);
});




router.post("/new",authJWT, async (req, res) => {
  
  try {
    await articleLogic.newArticle(req.body,req.id);
    res.send({ message: "article has been added" });
  } catch (error) {
    console.log("again")
    console.log(error)
    res.status(403).send(error.message);
  }
});


router.post("/del" ,authJWT,async (req, res) => {
  try {
    //console.log()
    console.log('req.body: ', req.body);
    console.log('req.id: ', req.id);
    await articleLogic.deleteArticle(req.body,req.id);

    res.send("Article has deleted!");
  } catch (error) {
    console.log(error)
    res.status(404).send(error.message);
  }
});

router.post("/update", async (req, res) => {
  try {
    await articleLogic.updateArticle(req.body);
    res.send({ message: "The Article was Updated. 🗑" });
  } catch (error) {
    console.log(error)
    res.status(405).send(error.message);
  }
});


module.exports = router;













// router.post("/article", async (req, res) => {
//   // let {Parameter} = req.body;
//   // Parameter = 10 + Parameter;
//   // res.send({Parameter})

//   try {
//     await articleLogic.newArticle(req.body);
//     res.send({ message: "article has been added" });
//   } catch (error) {
  //     res.send(error.message);
//   }
// });



// router.post('/delete', async (res,req) => {
  //     //res.body = {"_id":"62cfe48278e84712288c2d15"}
  //     songLogic.deleteSong(res.body);
//     req.send({message:"song has been deleted"});

// });

// let {Parameter} = req.body;
// Parameter = 10 + Parameter;
// res.send({Parameter})
