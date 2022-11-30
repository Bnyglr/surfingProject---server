require('../DL/db.js').connect();
const userController = require('../DL/controllers/userController');
const {createToken} = require('../middleware/jwt');

const login = async(user) => {
    //basic validataion
    const { email, password } = user;
    // console.log("email: ", email, "password: ", password);
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
    const { email, password, fullName } = user;
    if (!email || !password ||!fullName)
      throw { code: 400, message: "missing data" };
  
    const existUser = await userController.readOne({ email });
    if (existUser) throw { code: 405, message: "duplicate email" };
  
    const newUser = await userController.create(user);
    const token = createToken(newUser._id);
    return token;
  };
  
  // register({email: "stam@stam.com", password: "0000", firstName: "stam", lastName: "stami"});

    const getUserById = async (id)=>{
      const user = await userController.readOne({_id: id});
      if(!user) throw new Error("Error encountred");
      return user;
    }


    const getAllUserArticles = async (userId) => {

      const user =  await userController.readOne({_id: userId});
      console.log('user: ', user);
      return user.articles;
   }


  module.exports = { login,register,getUserById, getAllUserArticles};