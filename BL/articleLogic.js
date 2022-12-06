require('../DL/db.js').connect();
const articleController = require('../DL/controllers/articleController');
const userController = require('../DL/controllers/userController');


const newArticle = async (article, userId) => {
        const {title, text, paragraphText} = article;
        console.log('userId: ', userId);
        if(!title || !text || !paragraphText) throw {message: "missing data"}
        // const existArticle= await articleController.readOne({title:title})
        // if (existArticle) throw {message: "the title is exist"}
        console.log('title: ', title);
        console.log('text: ', text);
        const newArticle = await articleController.create(article);
        console.log('newArticle: ', newArticle);
        await userController.update({_id: userId},{$push: {articles: newArticle}})
        console.log("article has been created");
        return newArticle;
}


const deleteArticle = async (article,userId) => {
        const {_id} = article;
        if(!_id) throw ({message: "there is missing data!"})
        const existArticle = await articleController.readOne({_id:_id})
        if(!existArticle) throw { message:"The Article is't Exist!"}
        articleController.del({_id});
        userController.update({_id: userId},{$pull: {articles: _id}})
        console.log('The Article is Deleted 🗑.');

}


// const updateTextArticle = async (article) => {
//         const {title, text} = article;
//         if(!title) throw ({message: "there is missing data!"})
//         articleController.update()
// }

// const updateTitleArticle = async (article) => {
//         const {title, text} = article;
//         if(!title) throw ({message: "there is missing data!"})
// }

const updateArticle = async (article) => {
        const {title, text, _id}  = article;
        if(!title || !text || !_id ) throw ({message: "there is missing data!"});
        articleController.update({_id: _id},{title: title, text: text});
}



const getAllArticles = async () => {

   return await articleController.read({});
}

// const getArticle = as

//const updateArticle


module.exports = { newArticle, getAllArticles, deleteArticle, updateArticle};








// const newSong = async (song) => {
//         if(!song) throw {code: 405, message: "missing data"}
//         const newSong = await songController.create(song);
//         console.log("song has been created: ", newSong);
// }

// const getAllSongs = async () => {
//    return await songController.read({});
// }

// const deleteSong = async (song) => {
//         if(!song) throw {code: 405, message: "missing data"}
//         await songController.del(song);
// }
