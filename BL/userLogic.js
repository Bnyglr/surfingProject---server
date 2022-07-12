require('../DL/db.js').connect();
const userController = require('../DL/controllers/userController');
const {createToken} = require('../middleware/jwt');

const login = async(user) => {
    //basic validataion
    const { email, password} = user;
    if (!email || !password)
      throw { code: 400, message: "missing data" };
    //user exist?
     const eUser = await userController.readOne({email},"+password");
    if(!eUser) throw ({code: 404, message: "user not found"});
    //password matching?
    console.log(password,eUser);
    if(password !== eUser.password) throw ({code: 503, message: "not auothorized"});
    const token = createToken(eUser._id);
    return token;
  }

  const register = async (user) => {
    const { email, password, firstName, lastName } = user;
    if (!email || !password || !firstName || !lastName)
      throw { code: 400, message: "missing data" };
  
    const existUser = await userController.readOne({ email });
    if (existUser) throw { code: 405, message: "duplicate email" };
  
    const newUser = await userController.create(user);
    const token = createToken(newUser._id);
    return token;
  };
  
  // register({email: "stam@stam.com", password: "0000", firstName: "stam", lastName: "stami"});



  module.exports = { login };