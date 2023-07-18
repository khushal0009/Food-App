const express = require("express");
const userRouter = express.Router();

const {getUser,updateUser,updateProfileImage}=require('../controller/userController');

const{signup,login,isAuthorised,protectRoute,forgetpassword,resetpassword,logout}=require('../controller/authController');

//user options
// userRouter.route('/:id')
// .patch(updateUser)


userRouter
.route('/signup')
.post(signup)



userRouter
.route('/login')
.post(login)


//profile page
// userRouter.use(protectRoute);
// userRouter
// .route('/userProfile')
// .get(getUser)

module.exports=userRouter;