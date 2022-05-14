const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema(
    {
        name:{type:String,required:[true],},
        email:{type:String,required:[true]},
        feedback:{type:String,required:[true]}
    }
);

const feedbackModel = mongoose.model("feedback", feedbackSchema);

module.exports.feedbackSchema = feedbackSchema;
module.exports.feedbackModel = feedbackModel;