const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017")
.then(()=>{
    console.log("MongoDB Connected");
})
.catch(()=>{
    console.log("failed");
})
const reviewSchema=new mongoose.Schema({
    review:{
        type:String,
        required:[true, 'review is required']
    },
    rating:{
        type:Number,
        min:1,
        max:10,
        required:[true,'rating is required']
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'userModel',
        required:[true,'review must belong to a user']
    },
    plan:{
        type:mongoose.Schema.ObjectId,
        ref:'planModel',
        required:[true,'review must belong to a plan']
    }
});
//find findById, findOne
reviewSchema.pre(/^find/, function (next) {
    this.populate({
      path: "user",
      select: "name profileImage"
    }).populate("plan");
    next();
  });

const reviewModel=mongoose.model('reviewModel',reviewSchema);

module.exports=reviewModel;