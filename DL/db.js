//Import the mongoose module
const  mongoose = require ('mongoose');

const MONGO_URL = 'mongodb+srv://yamar8:Mghu952!@cluster0.04nj7zh.mongodb.net/Playlist?retryWrites=true&w=majority';

//Set up default mongoose connection
exports.connect = async()=>{
    try{
        await mongoose.connect(MONGO_URL, {useNewUrlParser:true},
            (err)=>{
                if(err){throw err}
                console.log("Connection Success",mongoose.connection.readyState);
            })
    }
    catch(e){
        console.log('error mongoose:',e);
    }
}