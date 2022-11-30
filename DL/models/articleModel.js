const  mongoose = require ('mongoose');


const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    text: {
        type: String
    },
    createDate: {
        type: Date,
        default: Date.now,
      },
    isActive:{
        type: Boolean,
        default: true
    }
});


const articleModel = mongoose.model("article",articleSchema);


module.exports = {articleModel};