const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//import { signup } from "./controllers/userController";

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
// convert request body to json

// Import and use the userRouter for '/signup' and '/login' routes
const userRouter = require('./routes/userRoutes');
app.use('/signup', userRouter);
app.use('/', userRouter);

// Mount the contactRouter for '/api/contact' route
app.use('/api/contact', contactRouter);


app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
