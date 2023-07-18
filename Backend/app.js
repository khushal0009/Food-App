const express = require("express");
const app = express();

app.use(express.static('public/build'));

const cookieParser=require('cookie-parser');
//middleware func-> post, front-> json
app.use(express.json()); //global middleware 
const port=process.env.PORT || 5000;
app.listen(port,function(){
    console.log(`server listening on port ${port}`); 
});

const userRouter = require('./Routers/userRouter');

//app.js

app.use("/user", userRouter);