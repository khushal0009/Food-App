const express = require("express");
const collection = require("./mongo");
const mongoose = require('mongoose');
const cors = require("cors");
const bcrypt = require("bcrypt"); // Import bcrypt
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/foodAppDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const contactRouter = require('./contactRouter');

// Middleware - Use CORS for all routes
app.use(cors());

// Parse incoming JSON data
app.use(express.json());

// Mount the contactRouter for '/api/contact' route
app.use('/api/contact', contactRouter);

app.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await collection.findOne({ email: email });
    if (user) {
      // Compare hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        res.json("exists");
      } else {
        res.json("Invalid Password");
      }
    } else {
      res.json("Notexist");
    }
  } catch (e) {
    console.log(e);
  }
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await collection.findOne({ email: email });
    if (user) {
      res.json("exists");
    } else {
      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds
      const data = {
        email: email,
        password: hashedPassword, // Store the hashed password
      };
      await collection.insertMany([data]);
      res.json("Not exists");
    }
  } catch (e) {
    console.log(e);
  }
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
