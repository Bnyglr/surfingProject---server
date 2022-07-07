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
    return await playlistModel.updateOne(filter, newData);
 }
 async function del(filter){
    return await update(filter,{isActive:flase})
 }
 
 module.exports = {create,read,update,del,readOne};



