const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017")
.then(()=>{
    console.log("MongoDB Connected");
})
.catch(()=>{
    console.log("failed");
})


const planSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: [20, "plan name should not exceed more than 20 characters"],
  },
  duration: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "price not entered"],
  },
  ratingsAverage: {
    type: Number,
  },
  discount: {
    type: Number,
    validate: [
      function () {
        return this.discount < 100;
      },
      "dicount should not exceed price",
    ],
  },
});

const planModel = mongoose.model("planModel", planSchema);
module.exports = planModel;
