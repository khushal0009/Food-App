const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
        required: [true, 'Review is required']
    },
    rating: {
        type: Number,
        min: 1,
        max: 5, // Maximum rating set to 5
        required: [true, 'Rating is required']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'userModel',
        required: [true, 'Review must belong to a user']
    },
    plan: {
        type: mongoose.Schema.ObjectId,
        ref: 'planModel',
        required: [true, 'Review must belong to a plan']
    }
});

// reviewSchema.pre(/^find/, function (next) {
//     this.populate({
//         path: "user",
//         select: "name profileImage"
//     }).populate("plan");
//     next();
// });

const reviewModel = mongoose.model('reviewModel', reviewSchema);
module.exports = reviewModel;
