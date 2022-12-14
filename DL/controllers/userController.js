
const {userModel} = require('../models/userModel');

async function create(data){
    return await userModel.create(data);
 }
 async function read(filter,proj){
    return await userModel.find(filter,proj);
 }
 async function readOne(filter,proj){
    return await userModel.findOne(filter,proj).populate({path: 'articles'})
 }
 async function update(filter,newData){
    return await userModel.updateOne(filter, newData);
 }
 async function del(filter){
   return await update(filter,{"$set":{"isActive":false}});
}

 module.exports = {create,read,update,del,readOne};



