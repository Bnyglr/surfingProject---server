require('../DL/db.js').connect();
const userController = require('../DL/controllers/userController');
const {createToken} = require('./jwt');


const login = async(email, password) => {
    //basic validataion
    if(!email || !password) throw ({code: 409, message: "missing data"});
    //user exist?
     const eUser = await userController.read({email},"+password");
    if(eUser.length == 0) throw ({code: 404, message: "user not found"});
    //password matching?
    console.log(password,eUser[0]);
    if(password !== eUser[0].password) throw ({code: 503, message: "not auothorized"});
    const token = createToken(eUser[0]._id);
    return token;
  }

  module.exports = { login };