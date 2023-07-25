const userModel = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "FOODAPP";

const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.json("User already exists");
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await userModel.create({
        email: email,
        password: hashedPassword,
      });
      res.json("Signup successful");
      const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
      res.json({ user: result, token: token });
    }
  } catch (error) {
    console.log(error);
    res.json("Something went wrong");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email: email });
    if (!existingUser) {
      return res.json("User not found");
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);

    if (!matchPassword) {
      return res.json("Invalid credentials");
    }

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY);
    res.json({ user: existingUser, token: token });
  } catch (error) {
    console.log(error);
    res.json("Something went wrong");
  }
};

module.exports = { signup, login };
