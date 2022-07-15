require('../db').connect();

const {songModel} = require('../models/songModel');

async function create(data){
    return await songModel.create(data);
 }
 async function read(filter,proj){
    return await songModel.find(filter,proj);
 }
 async function readOne(filter,proj){
    return await songModel.findOne(filter,proj);
 }
 async function update(filter,newData){
    return await songModel.updateOne(filter, newData);
 }
 async function del(filter){
   return await update(filter,{"$set":{"isActive":false}});
}

 module.exports = {create,read,update,del,readOne};



