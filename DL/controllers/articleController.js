
const {articleModel} = require('../models/articleModel');

async function create(data){
    return await articleModel.create(data);
 }

 async function read(filter,proj){
    return await articleModel.find(filter,proj);
 }

 async function readOne(filter,proj){
    return await articleModel.findOne(filter,proj);
 }

 async function update(filter,newData){
    return await articleModel.updateOne(filter, newData);
 }
 
 async function del(filter){
   return await update(filter,{"$set":{"isActive":false}});
}

 module.exports = {create,read,update,del,readOne};



