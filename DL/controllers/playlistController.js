require('../db').connect();

const {playlistModel} = require('../models/playlistModel');

async function create(data){
    return await playlistModel.create(data);
 }
 async function read(filter,proj){
    return await playlistModel.find(filter,proj).populate({path: 'songs',select:['name']} );
 }
 async function readOne(filter,proj){
    return await playlistModel.findOne(filter,proj);
 }
 async function update(filter,newData){
    const a =  await playlistModel.updateOne(filter, newData);
    console.log("it is happaning: ", a);
    return a;
 }
 async function del(filter){
    return await update(filter,{"$set":{"isActive":false}});
 }
 
 module.exports = {create,read,update,del,readOne};



