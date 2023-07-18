const express = require("express");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
// const { sendMail } = require("../utility/nodemailer");
const { JWT_KEY } = require("../secrets");


module.exports.signup = async function signup(req, res) {
    try {
      let dataObj = req.body;
      // Perform validation on dataObj before saving to the database (not shown here).
      let user = await userModel.create(dataObj);
      sendMail("signup", user);
      if (user) {
        return res.json({
          message: "User signed up",
          data: user,
        });
      } else {
        res.json({
          message: "Error while signing up",
        });
      }
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  };
  

  //login user
module.exports.login = async function login(req, res) {
    try {
      let data = req.body;
      if (data.email && data.password) {
        let user = await userModel.findOne({ email: data.email });
        if (user) {
          //bcrypt -> compare
          // Replace the following line with proper password verification using bcrypt or a similar library.
          if (user.password == data.password) {
            let uid = user["_id"]; //uid
            let token = jwt.sign({ payload: uid }, JWT_KEY);
            res.cookie("login", token, { httpOnly: true });
            // res.cookie('isLoggedIn',true);
            return res.json({
              message: "User has logged in",
              data: user, // userDetails:data,
            });
          } else {
            return res.json({
              message: "Wrong credentials",
            });
          }
        } else {
          return res.json({
            message: "User not found",
          });
        }
      } else {
        return res.json({
          message: "Empty field found",
        });
      }
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  };
  

  //protectRoute
module.exports.protectRoute = async function protectRoute(req, res, next) {
    try {
      let token;
      if (req.cookies.login) {
        console.log(req.cookies);
        token = req.cookies.login;
        let payload = jwt.verify(token, JWT_KEY);
        if (payload) {
          console.log("payload token", payload);
          const user = await userModel.findById(payload.payload);
          req.role = user.role;
          req.id = user.id;
          console.log(req.role, req.id);
          return next();
        } else {
          return res.json({
            message: "Please login again",
          });
        }
      } else {
        // For security reasons, handle unauthorized requests with a 401 status code.
        return res.status(401).json({
          message: "Please log in",
        });
      }
    } catch (err) {
      return res.json({
        message: err.message,
      });
    }
  };
  
  //forgetPassword
module.exports.forgetpassword = async function forgetpassword(req, res) {
    let { email } = req.body;
    try {
      const user = await userModel.findOne({ email: email });
      if (user) {
        //createResetToken is used to create a new token
        const resetToken = user.createResetToken();
        // http://abc.com/resetpassword/resetToken
        let resetPasswordLink = `${req.protocol}://${req.get(
          "host"
        )}/resetpassword/${resetToken}`;
        //send email to the user
        //nodemailer
        let obj = {
          resetPasswordLink: resetPasswordLink,
          email: email,
        };
        sendMail("resetpassword", obj);
        return res.json({
          message: "Reset password link sent",
          data: resetPasswordLink,
        });
      } else {
        return res.json({
          message: "Please sign up",
        });
      }
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  };

  //resetPassword
module.exports.resetpassword = async function resetpassword(req, res) {
    try {
      const token = req.params.token; // Corrected typo 'parmas' to 'params'.
      let { password, confirmPassword } = req.body;
      const user = await userModel.findOne({ resetToken: token });
      if (user) {
        //resetPasswordHandler will update the user's password in the db.
        user.resetPasswordHandler(password, confirmPassword);
        await user.save();
        res.json({
          message: "Password changed successfully, please login again",
        });
      } else {
        res.json({
          message: "User not found",
        });
      }
    } catch (err) {
      res.json({
        message: err.message,
      });
    }
  };

  module.exports.logout = function logout(req, res) {
    // Invalidate the login token properly.
    res.clearCookie('login');
    res.json({
      message: "User logged out successfully",
    });
  };
  